import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const orders = await prisma.order.findMany({ orderBy:{createdAt:"desc"} })
  return NextResponse.json(orders)
}

export async function POST(req: Request) {
  const body = await req.json()

  const order = await prisma.order.create({
    data: {
      email: body.email,
      address: body.address,
      total: body.total,
      items: body.items
    }
  })

  return NextResponse.json(order)
}