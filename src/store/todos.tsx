import { createContext, useContext, useState, type ReactNode } from "react";

export type ToDosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddToDo: (task: string) => void;
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo:(id:string)=>void
};

export const todoContext = createContext<TodosContext | null>(null);

export const ToDosProvider = ({ children }: ToDosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const newTodos = localStorage.getItem("todos") || "[]";
      return JSON.parse(newTodos) as Todo[]
    } catch (error) {
      return []
    }
  });
  const handleAddToDo = (task:string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
        ];
      console.log(newTodos)
      localStorage.setItem("todos",JSON.stringify(newTodos))
      return newTodos;
    });
  };

  // mark completed 
  const toggleTodoAsCompleted = (id: string)=>{
    setTodos((prev) => {
      let newTodos = prev.map((todo) => {
        if (todo.id === id) {
          return {...todo,completed:!todo.completed}
        }
        return todo;
      })
      localStorage.setItem("todos",JSON.stringify(newTodos))
      return newTodos;
    })
  }

  // delete individuals data
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev.filter((filterTodo) => filterTodo.id !== id);
      localStorage.setItem("todos",JSON.stringify(newTodos))
      return newTodos;
    })
  }

  return (
    <todoContext.Provider value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}>
      {children}
    </todoContext.Provider>
  );
};

// consumer

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);

    if (!todosConsumer) {
        throw new Error("error")
    }
    return todosConsumer;
}

