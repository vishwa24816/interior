
'use client';

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Logo />
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Interior website. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground hidden sm:block">For more details:</p>
            <Button asChild variant="outline" size="sm">
                <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
