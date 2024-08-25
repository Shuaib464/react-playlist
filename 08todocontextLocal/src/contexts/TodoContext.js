import { useContext, createContext } from "react";

// create a context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'First Todo',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

// create custom hook
export const useTodo = () => {
    return useContext(TodoContext);
}

// create a Provider]
export const TodoProvider = TodoContext.Provider;