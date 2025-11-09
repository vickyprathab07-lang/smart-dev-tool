import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

const CodeExample = () => {
  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground">
            From idea to implementation in seconds
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 shadow-card border-border animate-slide-in">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-accent border-accent">
                Input
              </Badge>
              <Terminal className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 border border-border">
                <p className="text-foreground font-mono text-sm">
                  "Build a todo list app in React with add and delete features."
                </p>
              </div>
              <p className="text-muted-foreground text-sm">
                Natural language request from developer
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-card border-border animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-primary text-primary-foreground">
                Output
              </Badge>
              <Terminal className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4 border border-primary/20 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground font-mono text-sm">App.jsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground font-mono text-sm">TodoItem.jsx</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span className="text-foreground font-mono text-sm">App.css</span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Complete, working code with React hooks and clean UI
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Card className="inline-block p-6 shadow-card border-primary/20 bg-primary/5">
            <p className="text-foreground">
              <span className="font-semibold">Result:</span> Production-ready application with proper 
              component structure, state management, and styling—all explained clearly.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
