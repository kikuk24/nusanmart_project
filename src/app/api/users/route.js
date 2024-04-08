import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true
      }
    })
    return NextResponse.json({ users, message: 'Success' }, { status: 200 })
  }
  catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}