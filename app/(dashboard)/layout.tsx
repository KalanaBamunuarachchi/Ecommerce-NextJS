import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import LeftSideBar from "@/components/layout/LeftSideBar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agni Admin Dashboard",
  description: "Admin Dashboard for Agni Electronics",
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
          <LeftSideBar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
