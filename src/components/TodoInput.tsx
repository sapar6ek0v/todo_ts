import React, {useState} from 'react';

interface TodoForm {
    onAdd(title: string): void,
}

const TodoInput: React.FC<TodoForm> = ({onAdd}) => {
    const [text, setText] = useState<string>('')

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleInputPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onAdd(text)
            setText('')
        }
    }

    return (
        <div className='container pdt'>
            <input
                value={text}
                type="text"
                id='title'
                onChange={handleInput}
                onKeyDown={handleInputPress}
                placeholder='Write something...'
            />
            <label htmlFor="title"> </label>
        </div>
    );
};

export default TodoInput;