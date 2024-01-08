import { useState } from "react";

let GLOBAL_ID = 4;

export default function TodoApp() {
    const [todo, setTodo] = useState([{
        id: 1,
        title: 'GYM',
        desc: '30 mins'
    }, {
        id: 2,
        title: 'GYM',
        desc: '30 mins'
    }, {
        id: 3,
        title: 'GYM',
        desc: '30 mins'
    }])

    function addTodo(){
        setTodo([...todo, {
            id: GLOBAL_ID++,
            title: 'new todo',
            desc: 'new desc'
        }])
    }

    return (
        <div>
            <button onClick={addTodo} style={{
                height: '25px',
                width: '150px'
            }}>Add new todo</button>
            {todo.map(todo => <Todo key={todo.id} title={todo.title} desc={todo.desc}></Todo>)}
        </div>
    )
}

function Todo({title, desc}) {
    return <div style={{
        height: '150px',
        width: '100px'
    }}>
        <h1>
            {title}
        </h1>
        <h4>
            {desc}
        </h4>
    </div>
}