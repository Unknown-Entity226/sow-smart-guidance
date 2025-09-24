import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";
import { Leaf, Menu } from "lucide-react";

interface HeaderProps {
  onNavigate?: (section: string) => void;
  currentState?: string;
}

export function Header({ onNavigate, currentState }: HeaderProps) {
  const handleNavigation = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  const isActive = (section: string) => {
    if (section === "home" && currentState === "hero") return true;
    if (section === "recommendations" && (currentState === "recommendations" || currentState === "crop-details")) return true;
    return false;
  };

  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation("home")}>
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
            <button 
              onClick={() => handleNavigation("home")}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("home") ? "text-primary" : ""
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation("recommendations")}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isActive("recommendations") ? "text-primary" : ""
              }`}
            >
              Crop Guide
            </button>
            <button 
              onClick={() => handleNavigation("market")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Market Prices
            </button>
            <button 
              onClick={() => handleNavigation("support")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Support
            </button>
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