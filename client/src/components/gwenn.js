import React from "react"


class App extends React.Component {
    state = {
        todos: [
            {
                description: 'Do Shit',
                isDone: false
            },
            {
                description: 'Do More Shit',
                isDone: false
            },

            {
                description: 'Stop procrastinating you fool',
                isDone: false
            }
        ]
    }

    handleToDoclick = (currentToDo) => {
        if (currentToDo.isDone) {
            currentToDo.isDone = false;
        } else {
            currentToDo.isDone = true;
        }
        const updatedState = {
            todos: this.state.todos
        }
        this.setState(updatedState)
    }

    render() {
        return <div> <h1>Aggresive Reminder To Do Things</h1>
            <ul>
                {this.state.todos.map((a) => {
                    let completeClass = ""

                    if (a.isDone) { completeClass = "complete" }

                    return <li className={completeClass} onClick={() => this.handleToDoclick(a)}>{a.description}</li>
                })}
            </ul>
        </div>
    }
}

export default App