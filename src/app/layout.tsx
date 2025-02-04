import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import AnnouncementBanner from "@/components/ui/AnnouncementBan";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Nike. Just Do It. Nike.com',
  description: "nike",
  icons: {
  icon: 
    { url: '/favicon.ico', type: 'image/x-icon' },
    
 
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <ClerkProvider>
    <html lang="en">
        <body className={inter.className}>
          <Header />
          <main>
            {children}
          </main>
          <Toaster />

          <Footer />
        </body>
    </html>
    </ClerkProvider>
  );
}
