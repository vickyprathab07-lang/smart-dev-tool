import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">CodeNavigator Features</h1>
        <ul className="list-disc pl-6 space-y-4">
          <li className="text-lg">AI-powered code generation in 50+ programming languages</li>
          <li className="text-lg">Real-time debugging assistance</li>
          <li className="text-lg">Code optimization suggestions</li>
          <li className="text-lg">Documentation generation</li>
          <li className="text-lg">Code review and security analysis</li>
        </ul>
        <Link to="/" className="text-blue-500 hover:underline mt-8 block">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Features;