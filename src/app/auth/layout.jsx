export const metadata = {
  title: 'Login',
  description: 'Auth'
}

export default function AuthLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
}