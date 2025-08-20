import React from "react";
import { Button } from "./ui/button";
import {
  Calendar,
  CreditCard,
  ShieldCheck,
  Stethoscope,
  User,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default async function Header() {
  
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-10 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/logo-single.png"
            alt="Medimeet Logo"
            width={200}
            height={100}
            className="h-15 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center space-x-2">
            <SignedOut>
                <SignInButton>
                    <Button variant="secondary">Sign In</Button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton
                appearance={{
                    elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                    },
                }}
                afterSignOutUrl="/"
                />
            </SignedIn>
        </div>
      </nav>
    </header>
  );
}
