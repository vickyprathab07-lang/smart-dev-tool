import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Bug, 
  Lightbulb, 
  FileCode, 
  Zap, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Multi-Language Support",
    description: "Write production-ready code in HTML, CSS, JavaScript, React, Python, C++, Java, and more.",
  },
  {
    icon: Bug,
    title: "Debug & Fix",
    description: "Analyze error logs, identify issues, and get instant fixes for your code problems.",
  },
  {
    icon: Lightbulb,
    title: "Smart Explanations",
    description: "Understand complex code with clear, simple explanations tailored to your level.",
  },
  {
    icon: FileCode,
    title: "Full Project Scaffolding",
    description: "Build complete applications from natural language descriptions with proper structure.",
  },
  {
    icon: Zap,
    title: "Code Optimization",
    description: "Refactor and optimize your code for better performance, readability, and maintainability.",
  },
  {
    icon: Shield,
    title: "Best Practices",
    description: "Follow industry standards with clean, secure, and well-documented code generation.",
  },
];

const Features = () => {
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
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
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
