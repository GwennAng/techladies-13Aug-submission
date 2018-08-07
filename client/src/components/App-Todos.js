import React from "react";
// import {Todos} from "./App"

export class Todos extends React.Component {
    state = {
        todos: [
            {
                description: 'Learn to Code',
                isDone: false
            },
            {
                description: 'Apply for bootcamp',
                isDone: false
            },

            {
                description: 'Matriculation',
                isDone: false
            }
        ],
        newTodoDescription:"",
    };




render() {
    return <div> 
        <h1>Aggresive Reminder To Do Things</h1>
        <label htmlFor="newTodoDescription">Add ToDo</label>
        <input 
            type="text" 
            value={this.state.newTodoDescription}
            name="newTodoDescription"
            id="newTodoDescription"
            onChange={this.handleOnChange}
        >
        
        </input>
        <button onClick={this.handleAddTodo}>+</button>
        <ul>
            {this.state.todos.map((todo) => {
                let completeClass = ""

                if (todo.isDone) { completeClass = "complete" }

                return <li className={completeClass} onClick={() => this.handleToDoclick(todo)}>{todo.description}</li>
            })}
        </ul>
    </div>
}
}