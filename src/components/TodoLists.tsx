import React from 'react';
import {ITodo} from "../interfaces";

interface TodoList {
    todos: ITodo[],

    onToggle(id: string): void,

    onDelete(id: string): void
}

const TodoLists: React.FC<TodoList> = ({todos, onToggle, onDelete}) => {

    const removeHandler = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        onDelete(id)
    }

    const toggleHandler = (id: string) => {
        onToggle(id)
    }

    if (!todos.length) {
        return <p className='center'>Todos are empty!</p>
    }

    return (
        <div className='container'>
            <ul>
                {
                    todos.map(todo => {
                        const classes = ['todo']
                        if (todo.completed) {
                            classes.push('completed')
                        }

                        return (
                            <li key={todo.id} className={classes.join(' ')}>
                                <label>
                                    <input
                                        onChange={() => toggleHandler(todo.id)}
                                        type="checkbox"
                                        checked={todo.completed}
                                    />
                                    <span>{todo.title}</span>
                                    <i onClick={(e) => removeHandler(e, todo.id)}
                                       className="material-icons red-text pointer"> delete</i>
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default TodoLists;