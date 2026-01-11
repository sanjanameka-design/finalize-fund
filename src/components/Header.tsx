import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-header text-header-foreground">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="border-2 border-header-foreground rounded px-2 py-1">
            <span className="text-xl font-bold">H</span>
          </div>
          <span className="font-bold text-lg tracking-wide">HAPPIRATE</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-header-foreground transition-colors">
            Solutions
          </a>
          <a href="#" className="text-muted-foreground hover:text-header-foreground transition-colors">
            Get In Touch
          </a>
          <a href="#" className="text-muted-foreground hover:text-header-foreground transition-colors">
            Blog
          </a>
          <a href="#" className="text-muted-foreground hover:text-header-foreground transition-colors">
            EMI Calculator
          </a>
        </nav>

        <Button variant="outline" className="bg-transparent border-header-foreground text-header-foreground hover:bg-header-foreground hover:text-header">
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
