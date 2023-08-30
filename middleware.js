export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/cart", "/account/profile", "/explore/:path*", "/checkout/:path*"],
};
