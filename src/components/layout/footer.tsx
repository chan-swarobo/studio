
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} SWAROBO Hub. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO Hub on Twitter">
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO Hub on GitHub">
            <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="SWAROBO Hub on LinkedIn">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
