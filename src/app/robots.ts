import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(
    `User-agent: *\nDisallow:\nSitemap: https://oscaralves.dev/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}
