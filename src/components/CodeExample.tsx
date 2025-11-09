import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Terminal, Play, Copy, Check, RotateCcw } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Code templates for different types of applications
const CODE_TEMPLATES = {
  todo: {
    title: "Todo List App",
    description: "A fully functional todo list with add, delete, and mark complete features",
    code: `import React, { useState } from 'react';
import './App.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { 
        id: Date.now(), 
        text: input, 
        completed: false 
      }]);
      setInput('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      
      <div className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition-colors"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                className="mr-3 h-5 w-5 text-blue-500"
              />
              <span className={todo.completed ? "line-through text-gray-500" : ""}>
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No tasks yet. Add one above!</p>
      )}
    </div>
  );
}

export default TodoApp;`
  },
  calculator: {
    title: "Calculator App",
    description: "A basic calculator with addition, subtraction, multiplication, and division",
    code: `import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDot = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-10 p-6 bg-gray-800 rounded-xl shadow-lg">
      <div className="bg-gray-900 rounded-lg p-4 mb-4">
        <div className="text-right text-white text-3xl font-semibold overflow-hidden">
          {display}
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        <button
          onClick={clearDisplay}
          className="col-span-2 bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          AC
        </button>
        <button
          onClick={() => performOperation('÷')}
          className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          ÷
        </button>
        <button
          onClick={() => performOperation('×')}
          className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          ×
        </button>
        
        <button
          onClick={() => inputDigit(7)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          7
        </button>
        <button
          onClick={() => inputDigit(8)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          8
        </button>
        <button
          onClick={() => inputDigit(9)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          9
        </button>
        <button
          onClick={() => performOperation('-')}
          className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          -
        </button>
        
        <button
          onClick={() => inputDigit(4)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          4
        </button>
        <button
          onClick={() => inputDigit(5)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          5
        </button>
        <button
          onClick={() => inputDigit(6)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          6
        </button>
        <button
          onClick={() => performOperation('+')}
          className="bg-orange-500 text-white p-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          +
        </button>
        
        <button
          onClick={() => inputDigit(1)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          1
        </button>
        <button
          onClick={() => inputDigit(2)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          2
        </button>
        <button
          onClick={() => inputDigit(3)}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          3
        </button>
        <button
          onClick={handleEquals}
          rowSpan="2"
          className="row-span-2 bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors"
        >
          =
        </button>
        
        <button
          onClick={() => inputDigit(0)}
          className="col-span-2 bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          0
        </button>
        <button
          onClick={inputDot}
          className="bg-gray-700 text-white p-4 rounded-lg hover:bg-gray-600 transition-colors"
        >
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;`
  },
  counter: {
    title: "Counter App",
    description: "A simple counter with increment, decrement, and reset functionality",
    code: `import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-center">
      <h1 className="text-3xl font-bold mb-6">Counter</h1>
      
      <div className="text-5xl font-bold mb-8 text-blue-600">
        {count}
      </div>
      
      <div className="flex justify-center space-x-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        
        <button
          onClick={reset}
          className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
        >
          Reset
        </button>
        
        <button
          onClick={increment}
          className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
        >
          Increment
        </button>
      </div>
      
      <div className="mt-6 text-gray-600">
        <p>Current count: {count}</p>
        <p className="mt-2 text-sm">
          {count > 10 ? "High count!" : 
           count < 0 ? "Negative count!" : 
           count === 0 ? "Reset to zero" : 
           "Counting..."}
        </p>
      </div>
    </div>
  );
}

export default Counter;`
  },
  form: {
    title: "Contact Form",
    description: "A responsive contact form with validation",
    code: `import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
      
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          <p className="font-bold">Success!</p>
          <p>Your message has been sent successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={\`w-full px-3 py-2 border \${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={\`w-full px-3 py-2 border \${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={\`w-full px-3 py-2 border \${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500\`}
              placeholder="Your message here..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={\`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors \${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }\`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;`
  },
  weather: {
    title: "Weather App",
    description: "A weather app that fetches and displays weather data",
    code: `import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

function WeatherApp() {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock weather data - in a real app, this would come from an API
  const mockWeatherData = {
    London: {
      location: 'London, UK',
      temperature: 18,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      icon: '⛅'
    },
    Paris: {
      location: 'Paris, France',
      temperature: 22,
      condition: 'Sunny',
      humidity: 55,
      windSpeed: 8,
      icon: '☀️'
    },
    NewYork: {
      location: 'New York, USA',
      temperature: 25,
      condition: 'Clear',
      humidity: 60,
      windSpeed: 15,
      icon: '🌤️'
    }
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // In a real app, you would fetch from an API:
      // const response = await fetch(\`https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=\${cityName}\`);
      // const data = await response.json();
      
      // For demo purposes, we'll use mock data
      const data = mockWeatherData[cityName] || mockWeatherData.London;
      setWeather(data);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather API error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg text-white">
      <h1 className="text-2xl font-bold text-center mb-6">Weather App</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="flex-1 px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-800 px-4 py-2 rounded-r-lg hover:bg-blue-900 transition-colors"
          >
            Search
          </button>
        </div>
      </form>
      
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
          <p className="mt-2">Loading weather data...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-500/80 rounded-lg p-4 mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {weather && !loading && (
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
          <div className="text-center">
            <div className="text-6xl mb-2">{weather.icon}</div>
            <h2 className="text-xl font-bold">{weather.location}</h2>
            <div className="text-5xl font-bold my-4">{weather.temperature}°C</div>
            <p className="text-lg">{weather.condition}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <p className="text-sm">Humidity</p>
              <p className="text-xl font-bold">{weather.humidity}%</p>
            </div>
            <div className="bg-white/20 rounded-lg p-3 text-center">
              <p className="text-sm">Wind</p>
              <p className="text-xl font-bold">{weather.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-6 text-center text-sm opacity-80">
        <p>Try searching for: London, Paris, New York</p>
      </div>
    </div>
  );
}

export default WeatherApp;`
  },
  default: {
    title: "Custom Component",
    description: "A custom component based on your request",
    code: `import React from 'react';
import './CustomComponent.css';

function CustomComponent() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">Your Custom Component</h1>
      <p className="text-center text-gray-600 mb-8">
        This is a placeholder for your custom component.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Feature 1</h3>
          <p className="text-gray-600">Description of your first feature.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Feature 2</h3>
          <p className="text-gray-600">Description of your second feature.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="font-bold text-lg mb-2">Feature 3</h3>
          <p className="text-gray-600">Description of your third feature.</p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default CustomComponent;`
  }
};

const CodeExample = () => {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [userRequest, setUserRequest] = useState("Build a todo list app in React with add and delete features.");
  const [flash, setFlash] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState("todo");

  const exampleRequests = [
    "Build a todo list app in React with add and delete features.",
    "Create a calculator app with basic operations",
    "Make a counter app with increment and decrement buttons",
    "Build a contact form with validation",
    "Create a weather app that shows current conditions"
  ];

  // Determine which template to use based on user request
  const getTemplateType = (request) => {
    const lowerRequest = request.toLowerCase();
    
    if (lowerRequest.includes("todo") || lowerRequest.includes("task")) {
      return "todo";
    } else if (lowerRequest.includes("calculator") || lowerRequest.includes("calculate")) {
      return "calculator";
    } else if (lowerRequest.includes("counter") || lowerRequest.includes("count")) {
      return "counter";
    } else if (lowerRequest.includes("form") || lowerRequest.includes("contact")) {
      return "form";
    } else if (lowerRequest.includes("weather")) {
      return "weather";
    } else {
      return "default";
    }
  };

  const handleGenerateCode = () => {
    if (!userRequest.trim()) return;
    
    setIsGenerating(true);
    setFlash(false);
    
    // Determine template type
    const templateType = getTemplateType(userRequest);
    setCurrentTemplate(templateType);
    
    // Immediate generation (no delay for faster response)
    // In a real implementation, this would be an actual AI call
    setGeneratedCode(CODE_TEMPLATES[templateType].code);
    setIsGenerating(false);
    setFlash(true);
    setTimeout(() => setFlash(false), 300);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDemo = () => {
    setGeneratedCode("");
    setUserRequest("Build a todo list app in React with add and delete features.");
    setCurrentTemplate("todo");
  };

  return (
    <section className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Coding with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe what you want to build, and watch as CodeNavigator generates complete, working code in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-6 shadow-card border-border animate-slide-in">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="text-accent border-accent">
                Your Request
              </Badge>
              <Terminal className="w-4 h-4 text-muted-foreground" />
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Describe what you want to build:</label>
                <Textarea
                  value={userRequest}
                  onChange={(e) => setUserRequest(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      if (!isGenerating && userRequest.trim()) {
                        handleGenerateCode();
                      }
                    }
                  }}
                  placeholder="e.g., Build a todo list app in React with add and delete features"
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Button
                  onClick={handleGenerateCode}
                  disabled={isGenerating || !userRequest.trim()}
                  className="flex items-center justify-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      Generate Code
                    </>
                  )}
                </Button>
                
                <div className="flex flex-wrap gap-2">
                  {exampleRequests.map((request, index) => (
                    <button
                      key={index}
                      onClick={() => setUserRequest(request)}
                      className="text-xs bg-muted hover:bg-muted/80 text-muted-foreground px-2 py-1 rounded cursor-pointer transition-colors"
                    >
                      {request.length > 30 ? `${request.substring(0, 30)}...` : request}
                    </button>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm">
                  Type your request or click an example to get started
                </p>
              </div>
            </div>
          </Card>

          {/* Output Section */}
          <Card className="p-6 shadow-card border-border animate-slide-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Badge className="bg-primary text-primary-foreground">
                  {generatedCode ? CODE_TEMPLATES[currentTemplate].title : "Generated Code"}
                </Badge>
                <Terminal className="w-4 h-4 text-muted-foreground" />
              </div>
              
              <div className="flex gap-2">
                {generatedCode && (
                  <button
                    onClick={() => copyToClipboard(generatedCode)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
                {generatedCode && (
                  <button
                    onClick={resetDemo}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    title="Reset demo"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              {isGenerating ? (
                <div className="bg-card rounded-lg p-4 border border-primary/20 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                    <span className="text-foreground font-mono text-sm">Analyzing your request...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <span className="text-foreground font-mono text-sm">Generating components...</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    <span className="text-foreground font-mono text-sm">Adding functionality...</span>
                  </div>
                </div>
              ) : generatedCode ? (
                <div className={`bg-card rounded-lg p-4 border border-primary/20 max-h-96 overflow-y-auto transition-all duration-300 ${flash ? 'bg-primary/10' : ''}`}>
                  <pre className="text-foreground font-mono text-xs leading-relaxed">
                    <code>{generatedCode}</code>
                  </pre>
                </div>
              ) : (
                <div className="bg-muted/30 rounded-lg p-8 border border-border text-center">
                  <Terminal className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Your generated code will appear here after clicking "Generate Code"
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Try: "{userRequest}"
                  </p>
                </div>
              )}
              
              {generatedCode && (
                <p className="text-muted-foreground text-sm">
                  {CODE_TEMPLATES[currentTemplate].description}
                </p>
              )}
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