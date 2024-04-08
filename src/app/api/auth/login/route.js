import { NextResponse } from 'next/server'

export async function handler(request) {
  try {
    const body = await request.json()
    const { email, password } = body
    return NextResponse.json({ message: 'Login Success' }, { status: 200 })
  } catch (error) {

  }
}