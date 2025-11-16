
'use client';

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo />
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Interior website. All rights reserved.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm">More Details</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Get in Touch</DialogTitle>
                  <DialogDescription>
                    We'd love to hear more about your project. Reach out to us for a consultation.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </footer>
  );
}
