import { NextResponse } from 'next/server';

export function middleware(req) {
    const url = req.nextUrl.clone();
    const path = req.nextUrl.pathname;
    const token = req.cookies.get('access_token');

    // Static assets in the public directory (adjusted regex)
    const publicAssetExtensions = /\.(jpg|jpeg|png|gif|svg|ico|css|js|json|html|wav)$/;

    // Allow requests to public assets without authentication
    if (publicAssetExtensions.test(path)) {
        return NextResponse.next();
    }

    // If the user is authenticated and tries to access the login page, redirect to home
    if (token && (path === '/login' || path === '/otp')) {
        url.pathname = '/';
        return NextResponse.redirect(url);
    }

    // If the user is authenticated and tries to access /dashboard or /dashboard/*, allow the request
    if (token && path.startsWith('/dashboard')) {
        return NextResponse.next();
    }

    // If the user is not authenticated and tries to access /dashboard or /dashboard/*, redirect to login
    if (!token && path.startsWith('/dashboard')) {
        url.pathname = '/login';  // Redirect to login if not logged in and trying to access /dashboard
        return NextResponse.redirect(url);
    }

    // Allow all other pages without authentication
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/:path*',               // Match all pages, including the home page, and all other routes
        '/dashboard',             // Protect /dashboard
        '/dashboard/:path*',      // Protect any subpages of /dashboard
        '/:path*\\.(jpg|jpeg|png|gif|svg|ico|css|js|json|html)$',  // Allow static asset requests
    ],
};
