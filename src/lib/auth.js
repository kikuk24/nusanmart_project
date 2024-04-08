import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./db"
import { compare } from "bcrypt"
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: 'hjvjvjhvjh',
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
          include: {
            cart: true
          }
        });
        console.log(user)
        if (!user) {
          return null
        };

        const passwordMatch = await compare(credentials.password, user.password);

        if (!passwordMatch) {
          return null
        }

        return {
          id: `${user.id}`,
          name: `${user.name}`,
          email: user.email,
          cart: `${user.cart}`
        }
      }
    })
  ],
  callback: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: {
            name: user.name,
            email: user.email,
            cart: user.cart
          }
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          name: token.user.name,
          email: token.user.email,
          cart: token.user.cart
        }
      }
    }
  }
}