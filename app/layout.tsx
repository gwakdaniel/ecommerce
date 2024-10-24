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

import "./globals.css";

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
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedOut>
          </SignedOut>
          <SignedIn>
          </SignedIn>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
