import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const capabilities = [
  "Understand project structure and dependencies",
  "Generate production-ready code in any language",
  "Debug errors by analyzing logs and suggesting fixes",
  "Write test cases and deployment scripts",
  "Explain complex code in simple terms",
  "Refactor or optimize existing code",
  "Build small apps or modules from natural language",
  "Follow security best practices",
];

const Capabilities = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Core Capabilities
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Built for Professional Developers
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CodeNavigator acts like a real coding partner, understanding your needs and delivering 
              complete, working solutions. From debugging to deployment, we've got you covered.
            </p>
            <div className="pt-4">
              <p className="text-foreground font-semibold mb-2">What makes us different:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Always delivers complete, working code—no incomplete snippets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Asks clarifying questions when needed for better results</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Includes test samples and documentation automatically</span>
                </li>
              </ul>
            </div>
          </div>

          <Card className="p-8 shadow-card border-border animate-slide-in">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              What I Can Do
            </h3>
            <div className="space-y-3">
              {capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
