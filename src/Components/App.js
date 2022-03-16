import React , {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

/////import component //////

import Header from "./Header";
import FormAddTodo from "./FormAddTodo";
import TodoList from "./TodoList";

////import Contexts//////

import TodosContext from "../context/Todos";


class App extends Component {
    state = {
        todos : [],
    }

    addTodo(text) {
        this.setState(prevState => {
            return {
                todos : [
                   ...prevState.todos,
                   {key : Date.now() , done : false , text}
                    
                ]
            }
          })
    }


    deleteTodo (key) {
        this.setState(prevState =>{
            return {
                todos : prevState.todos.filter(item => item.key !== key)
            }
        })
    }

    toggleTodo(key) {
        let {todos} = this.state

        let item = todos.find(item =>item.key === key);
        item.done = ! item.done;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos : [
                ...newTodos,
                item
            ]
        })
    }

    editTodo(key , text) {
        let {todos} = this.state;

        let item = todos.find(item =>item.key === key);
        item.text = text;

        let newTodos = todos.filter(item => item.key !== key)

        this.setState({
            todos : [
                ...newTodos,
                item
            ]
        })

    }


    render () {
        return (
           <TodosContext.Provider value={{
               todos : this.state.todos,
               add : this.addTodo.bind(this),
               done : this.toggleTodo.bind(this),
               delete : this. deleteTodo. bind(this),
               edit : this.editTodo.bind(this)
           }}>
                <div className="App"> 
                    <Header/>
                    <main>
                        <section className="jumbotron">
                            <div className=" d-flex flex-column align-items-center bg-info  p-5">
                                <h1 className="jumbotron-heading">Welcome!</h1>
                                <p className="lead text-muted">To get started, add some items to your list:</p>
                                <FormAddTodo add={this.addTodo.bind(this)}  />
                            </div>
                        </section>
                        <div className="todosList">
                                <div className="container ">
                                    <div className="d-flex flex-column align-items-center mt-3">
                                    <TodoList 
                                    todos={this.state.todos} 
                                    delete={this.deleteTodo.bind(this)} 
                                    done={this.toggleTodo.bind(this)}
                                    edit={this.editTodo.bind(this)}
                                    />
                                    </div>
                                </div>
                        </div>
                    </main>
                </div>
                    
           </TodosContext.Provider>
        )
    }

}


export default App ;