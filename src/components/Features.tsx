import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Bug, 
  Lightbulb, 
  FileCode, 
  Zap, 
  Shield 
} from "lucide-react";
import { useFeatures } from "@/hooks/useApi";
import { Skeleton } from "@/components/ui/skeleton";

const iconMap = {
  code: Code2,
  bug: Bug,
  lightbulb: Lightbulb,
  filecode: FileCode,
  zap: Zap,
  shield: Shield,
};

const Features = () => {
  const { data: features, isLoading, error } = useFeatures();

  if (isLoading) {
    return (
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4" />
            <Skeleton className="h-6 w-1/2 mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="p-6">
                <Skeleton className="h-12 w-12 rounded-lg mb-4" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5 mt-2" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-red-500">
            Failed to load features: {(error as Error).message}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Complete Coding Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to write, understand, and ship better code faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features?.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Code2;
            return (
              <Card 
                key={feature.id} 
                className="p-6 hover:shadow-lg-custom transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;