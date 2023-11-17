import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
  return NextResponse.json({ message: "ok" },{status: 200})
}
