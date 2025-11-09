import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About CodeNavigator</h1>
        <p className="text-lg mb-4">
          CodeNavigator is an advanced AI-powered coding assistant that helps developers write, debug, and optimize code across all programming languages.
        </p>
        <p className="text-lg mb-4">
          Our mission is to make coding more accessible and efficient for developers of all skill levels.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;