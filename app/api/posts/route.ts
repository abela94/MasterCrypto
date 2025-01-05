import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://mastercrypto.org/posts')
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 })
  }
}

