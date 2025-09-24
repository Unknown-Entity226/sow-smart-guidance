import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Leaf, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">CropGuide</h1>
                <p className="text-xs text-muted-foreground">Smart Agricultural Advisory</p>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#recommendations" className="text-sm font-medium hover:text-primary transition-colors">
              Crop Guide
            </a>
            <a href="#market" className="text-sm font-medium hover:text-primary transition-colors">
              Market Prices
            </a>
            <a href="#support" className="text-sm font-medium hover:text-primary transition-colors">
              Support
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSelector />
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}