import React, {useEffect, useState} from 'react';
import {ITodo} from "../interfaces";
import TodoLists from "../components/TodoLists";
import TodoInput from "../components/TodoInput";

const Main = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(localTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    } ,[todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title,
            id: Date.now() + title + Math.random() * 100,
            completed: false
        }
        setTodos(prev => [...prev, newTodo])
    }

    const toggleHandler = (id: string) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    const deleteHandler = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <TodoInput onAdd={addHandler}/>
            <TodoLists
                todos={todos}
                onToggle={toggleHandler}
                onDelete={deleteHandler}
            />
        </div>
    );
};

export default Main;