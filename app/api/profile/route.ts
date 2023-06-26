import { NextResponse } from "next/server"

export async function GET() {
  const response = await fetch(
    "https://api.github.com/repos/tonirilix/shadcn-next-test",
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 60,
      },
    }
  )
  if (!response?.ok) {
    return null
  }

  const data = await response.json()

  return NextResponse.json(data)
}
