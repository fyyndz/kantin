import { useState } from "react";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "./elements/DarkModeButton";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline-block">ShopEasy</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-sm font-medium hover:text-primary">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Products
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Categories
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            Deals
          </a>
          <a href="#" className="text-sm font-medium hover:text-primary">
            About
          </a>
        </nav>

        <div className="hidden md:flex relative w-full max-w-sm mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search products..." className="w-full pl-8" />
        </div>

        <div className="flex md:hidden">
          {isSearchOpen ? (
            <div className="absolute inset-0 top-16 bg-background z-50 px-4 py-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full pl-8" autoFocus />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="/" className="text-sm font-medium hover:text-primary">
                  Home
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  Products
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  Categories
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  Deals
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  About
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary">
                  My Account
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

