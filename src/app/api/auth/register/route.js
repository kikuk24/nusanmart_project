import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import bcrypt from 'bcrypt'
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, password, confPassword } = body
    if (password !== confPassword) {
      return NextResponse.json({ error: 'Passwords dan confirmation password tidak sama' }, { status: 403 })
    }
    const hashedPassword = await bcrypt.hash(password, 12)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'ADMIN'
      }
    })
    return NextResponse.json({ user: newUser, message: 'Register Success' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}