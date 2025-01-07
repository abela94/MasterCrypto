import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const response = await fetch(`https://mastercrypto.org/airdrops/${params.id}/`)
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch airdrop' }, { status: 500 })
  }
}

