import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3002; // Changed to 3002 to avoid conflicts

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req: Request, res: Response) => {
  res.send('CodeNavigator Backend API is running!');
});

// API routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    service: 'CodeNavigator API'
  });
});

// Example data endpoints that could be used by the frontend
app.get('/api/features', (req: Request, res: Response) => {
  const features = [
    {
      id: 1,
      title: "AI-Powered Code Generation",
      description: "Generate code in any programming language with natural language prompts",
      icon: "code"
    },
    {
      id: 2,
      title: "Smart Debugging",
      description: "Identify and fix bugs with AI assistance",
      icon: "bug"
    },
    {
      id: 3,
      title: "Performance Optimization",
      description: "Get suggestions to optimize your code for better performance",
      icon: "zap"
    },
    {
      id: 4,
      title: "Multi-Language Support",
      description: "Works with 50+ programming languages",
      icon: "languages"
    }
  ];
  
  res.json(features);
});

app.get('/api/capabilities', (req: Request, res: Response) => {
  const capabilities = [
    {
      id: 1,
      title: "Code Understanding",
      description: "Comprehends complex codebases and explains functionality"
    },
    {
      id: 2,
      title: "Refactoring Assistance",
      description: "Helps improve code structure and maintainability"
    },
    {
      id: 3,
      title: "Documentation Generation",
      description: "Automatically creates documentation for your code"
    },
    {
      id: 4,
      title: "Security Analysis",
      description: "Identifies potential security vulnerabilities"
    },
    {
      id: 5,
      title: "Code Review",
      description: "Provides detailed code review feedback"
    },
    {
      id: 6,
      title: "Learning Resources",
      description: "Suggests learning materials based on your coding patterns"
    }
  ];
  
  res.json(capabilities);
});

// Start server
app.listen(port, () => {
  console.log(`[server]: CodeNavigator backend is running at http://localhost:${port}`);
});

export default app;