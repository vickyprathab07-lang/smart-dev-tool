import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="text-xl font-bold text-foreground">CodeNavigator</span>
          </div>
          
          <p className="text-muted-foreground text-center md:text-right">
            Your advanced AI coding partner. Always ready to help you code better.
          </p>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © 2025 CodeNavigator. Built with precision and care.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
