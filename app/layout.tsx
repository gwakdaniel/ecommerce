import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import { Inter } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider'
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";
import prismadb from "@/lib/prismadb";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const store = prismadb.store
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
          </SignedOut>
          <SignedIn>
          </SignedIn>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
