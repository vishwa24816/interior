import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("font-headline text-xl font-bold tracking-wider", className)}>
      Interior website
    </Link>
  );
}
