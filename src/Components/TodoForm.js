import React, {useState, useEffect, useRef} from 'react'

// - props are whatever is added to the input box
function TodoForm(props) {
    // - dynamic value of the input tags
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        // - sets the input value to whatever the user types
        setInput(e.target.value);
    }

    const handleSumbit = e => {
        e.preventDefault();

        props.onSubmit({
            // - generates a random id between 1 and 10000 INSPECT
            id:Math.floor(Math.random() * 1000),
            text: input
        });

        // - resets the input tag to an empty string after you git the submit button
        setInput('')
    }

  return (
    <div>
        <form className='todo-form' onSubmit={handleSumbit}>
            <input 
            type='text'
            placeholder='Add a Todo'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={inputRef}
            />
            <button className='todo-button'>Add ToDo</button>
        </form>
    </div>
  )
}

export default TodoForm