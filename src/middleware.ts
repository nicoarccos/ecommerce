import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Log para depuración
  console.log(`[Middleware] Accessing: ${url.pathname}`);
  
  // Simplemente continuamos con la solicitud sin modificarla
  return NextResponse.next();
}

// Configura para que el middleware se ejecute en todas las rutas
export const config = {
  matcher: [
    // Aplicar a todas las rutas excepto los archivos estáticos
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 