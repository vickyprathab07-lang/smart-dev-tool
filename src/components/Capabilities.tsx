import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Code, Bug, Zap, FileText, TestTube, Shield } from "lucide-react";
import { useState } from "react";
import { useCapabilities } from "@/hooks/useApi";
import { Skeleton } from "@/components/ui/skeleton";

const iconMap = {
  code: Code,
  bug: Bug,
  zap: Zap,
  filetext: FileText,
  testtube: TestTube,
  shield: Shield,
};

const Capabilities = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const { data: capabilities, isLoading, error } = useCapabilities();

  if (isLoading) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-20 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
            <Card className="p-8">
              <Skeleton className="h-8 w-1/3 mb-6" />
              <div className="space-y-4">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="p-4 rounded-lg border">
                    <div className="flex items-start gap-3">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-1/3 mb-2" />
                        <Skeleton className="h-4 w-4/5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Failed to load capabilities: {(error as Error).message}
          </h2>
        </div>
      </section>
    );
  }

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
            
            <div className="space-y-4">
              {capabilities?.map((capability, index) => {
                // Generate a consistent icon based on the capability title
                const iconName = capability.title.toLowerCase().replace(/\s+/g, '');
                const Icon = iconMap[iconName as keyof typeof iconMap] || Code;
                
                return (
                  <div 
                    key={capability.id}
                    className={`p-4 rounded-lg border transition-all cursor-pointer ${
                      activeCapability === index 
                        ? "border-primary bg-primary/5 shadow-sm" 
                        : "border-border hover:bg-muted/50"
                    }`}
                    onClick={() => setActiveCapability(index)}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 mt-0.5 flex-shrink-0 text-primary`} />
                      <div>
                        <h4 className="font-semibold text-card-foreground">{capability.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{capability.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Pro tip:</span> Click on any capability to see more details about how CodeNavigator can help with that specific task.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;