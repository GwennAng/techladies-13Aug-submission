import React from "react"


export class Todos extends React.Component {
    state = {
        todos: [],
            newTodoDescription:"",
    };

    async componentDidMount() {
        const response= await fetch("/todos");
        const { todos } = await response.json();
        this.setState({
            todos:todos,
        })
    }

    

    handleOnChange=event=>{
        const{name,value}=event.target;
        /*name="newTodoDescription"
        value="something to do"*/
        this.setState({
            [name]:value,   // "newTodoDescription":value,
        });

    }
    handleToDoclick = (currentToDo) => {
     /*   if (currentToDo.isDone) {
            currentToDo.isDone = false;
        } else {
            currentToDo.isDone = true;
        }
        */
        currentToDo.isDone=!currentToDo.isDone;
        const updatedState = {
            todos: this.state.todos
        }
        this.setState(updatedState)
    }

    handleAddTodo= async () => {
        //step 1 : get new to do description
        const newTodoDescription=this.state.newTodoDescription;
    
        //step 2: create new todo object from desription
        const newTodo ={
            description:newTodoDescription,
            isDone:false,
        };

            const newTodos= [
                newTodo,
                ...this.state.todos,
                
            ];

            this.setState({
                todos:newTodos,
            });

            await fetch("/todos", {
                method:'post',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({ todo:newTodo}),
            });
    
        }
        
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
