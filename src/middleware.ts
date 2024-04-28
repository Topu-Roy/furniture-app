import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware((auth, req) => {
    if (req.nextUrl.pathname.startsWith('/shop')) auth().protect();
    if (req.nextUrl.pathname.startsWith('/cart')) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};