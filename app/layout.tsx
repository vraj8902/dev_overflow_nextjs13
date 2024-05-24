import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ 
  subsets: ["latin"], 
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  weight:['300','400','500','600','700'],
  variable:'--font-spaceGrotesk'
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A community-driven platform for asking and answering programming questions.Get help, share knowledge, and collaborate with developers from around the world.Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons:{
    icon:'/assets/icons/site-logo.svg'
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
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <header>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </header>
        <h1>hello brdr</h1>
        <main>
          {children}
        </main>
      </body>
    </html>
  </ClerkProvider>
  );
}

