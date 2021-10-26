import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  // Add basic auth to preview
  if (!["preview", "development"].includes(process.env.VERCEL_ENV)) {
    return NextResponse.next();
  }

  const basicAuth = req.headers.get("authorization");

  if (basicAuth) {
    const auth = basicAuth.split(" ")[1];
    const [user, pwd] = Buffer.from(auth, "base64").toString().split(":");

    if (user === "cbooth" && pwd === "password") {
      return NextResponse.next();
    }
  }

  return new Response("Auth required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"'
    }
  });
}
