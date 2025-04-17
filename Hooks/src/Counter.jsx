import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className='container'>
            <p id='para'>You Click {count} times</p>
            <button id='btn' onClick={() => { setCount(count + 1) }}>Click Me</button>
        </div>
    )
}

export default Counter
