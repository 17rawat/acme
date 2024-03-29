import "./globals.css";
import { Inter } from "next/font/google";
import ToasterContext from "@/context/Toaster-Context";
import AuthContextProvider from "@/context/Auth-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import CartProvider from "@/store/cartProvider";

import { Suspense } from "react";

import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <CartProvider>
            <ToasterContext />
            <div className="flex flex-col min-h-screen">
              <Header />
              <Suspense fallback={<Loading />}>
                <main>{children}</main>
              </Suspense>
              <Footer />
            </div>
          </CartProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
