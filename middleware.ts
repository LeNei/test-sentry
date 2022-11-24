import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '/',
}

const REQUIRE_LOGIN = !!process.env.REQUIRE_LOGIN;
export function middleware(req: NextRequest) {
  if (!REQUIRE_LOGIN) {
    return NextResponse.next()
  }

  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === 'flowcarbon' && pwd === "MqpzBhkzB6A6okdSQkAqKbogtm4c") {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}

