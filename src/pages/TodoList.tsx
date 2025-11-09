import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  
  // Calculator state
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  // Todo functions
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // Calculator functions
  const handleNumberClick = (number: string) => {
    if (display === "0" || shouldResetDisplay) {
      setDisplay(number);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperationClick = (op: string) => {
    if (operation !== null) {
      handleEqualsClick();
    }
    setPreviousValue(parseFloat(display));
    setOperation(op);
    setShouldResetDisplay(true);
  };

  const handleEqualsClick = () => {
    if (operation === null || previousValue === null) return;

    const currentValue = parseFloat(display);
    let result: number;

    switch (operation) {
      case "+":
        result = previousValue + currentValue;
        break;
      case "-":
        result = previousValue - currentValue;
        break;
      case "×":
        result = previousValue * currentValue;
        break;
      case "÷":
        result = previousValue / currentValue;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperation(null);
    setPreviousValue(null);
    setShouldResetDisplay(true);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setShouldResetDisplay(false);
  };

  const handleDecimalClick = () => {
    if (shouldResetDisplay) {
      setDisplay("0.");
      setShouldResetDisplay(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-blue-500 hover:underline">
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">Todo List & Calculator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Todo List Section */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Todo List</h2>
            
            <div className="flex gap-2 mb-4">
              <Input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new todo..."
                className="flex-1"
                onKeyDown={(e) => e.key === "Enter" && addTodo()}
              />
              <Button onClick={addTodo}>Add</Button>
            </div>
            
            <div className="flex gap-2 mb-4">
              <Button 
                variant={filter === "all" ? "default" : "outline"} 
                onClick={() => setFilter("all")}
              >
                All
              </Button>
              <Button 
                variant={filter === "active" ? "default" : "outline"} 
                onClick={() => setFilter("active")}
              >
                Active
              </Button>
              <Button 
                variant={filter === "completed" ? "default" : "outline"} 
                onClick={() => setFilter("completed")}
              >
                Completed
              </Button>
            </div>
            
            <ul className="space-y-2">
              {filteredTodos.length === 0 ? (
                <li className="text-muted-foreground py-4 text-center">
                  No todos found
                </li>
              ) : (
                filteredTodos.map((todo) => (
                  <li 
                    key={todo.id} 
                    className="flex items-center justify-between p-3 bg-background rounded-md border"
                  >
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="mr-3 h-5 w-5"
                      />
                      <span className={todo.completed ? "line-through text-muted-foreground" : ""}>
                        {todo.text}
                      </span>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </li>
                ))
              )}
            </ul>
          </div>
          
          {/* Calculator Section */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
            
            <div className="bg-muted p-4 rounded-md mb-4 text-right">
              <div className="text-2xl font-semibold overflow-x-auto whitespace-nowrap">
                {display}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              <Button onClick={handleClearClick} variant="outline" className="col-span-2">
                AC
              </Button>
              <Button onClick={() => handleOperationClick("÷")} variant="outline">
                ÷
              </Button>
              <Button onClick={() => handleOperationClick("×")} variant="outline">
                ×
              </Button>
              
              <Button onClick={() => handleNumberClick("7")}>7</Button>
              <Button onClick={() => handleNumberClick("8")}>8</Button>
              <Button onClick={() => handleNumberClick("9")}>9</Button>
              <Button onClick={() => handleOperationClick("-")} variant="outline">
                -
              </Button>
              
              <Button onClick={() => handleNumberClick("4")}>4</Button>
              <Button onClick={() => handleNumberClick("5")}>5</Button>
              <Button onClick={() => handleNumberClick("6")}>6</Button>
              <Button onClick={() => handleOperationClick("+")} variant="outline">
                +
              </Button>
              
              <Button onClick={() => handleNumberClick("1")}>1</Button>
              <Button onClick={() => handleNumberClick("2")}>2</Button>
              <Button onClick={() => handleNumberClick("3")}>3</Button>
              <Button onClick={handleEqualsClick} variant="outline" className="row-span-2">
                =
              </Button>
              
              <Button onClick={() => handleNumberClick("0")} className="col-span-2">
                0
              </Button>
              <Button onClick={handleDecimalClick}>.</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;