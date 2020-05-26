import React from 'react';
import dayjs from 'dayjs';
import './style.scss';
import { db } from '../firebaseConfig';
import TaskList from "./taskList";
import Loader from "./loader";
import '../Loader.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';

const name = "monica"; // We'll be using a const ID for the data fetches (for testing purposes)
const isTodoCompleted = false; // The Todos will be uncompleted by default
const team = ['monica', 'ridhi', 'uday', 'arun', 'pankaj', 'ram', 'abhishek']

class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            task: '',
            total: 0
        };
        this.taskInput = React.createRef();
        this.loaderInstance = React.createRef();
        this.onInputChange = this.onInputChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.storeTask = this.storeTask.bind(this);
    }

    handleLoader(status = false) {
        this.loaderInstance.current.updateLoaderVisibility(status);
    }

    fetchTasks(ele) {
        this.handleLoader(true);
        var ts = dayjs().format('DD MMM YYYY');
        const TeamData = db.collection('team').doc('tasks').collection(ele).doc(`${ts}`);
        TeamData.get().then((doc) => {
            if (doc.exists) {
                this.handleLoader(false)
                console.log(doc.data())
                this.setState({ items: doc.data().data, total: doc.data().data.length });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    storeTask() {
        var ts = dayjs().format('DD MMM YYYY');
        db.collection('team').doc('tasks').collection(name).doc(`${ts}`).update({
            data: firebase.firestore.FieldValue.arrayUnion({
                id: this.state.total,
                title: this.state.task,
                completed: isTodoCompleted
            })
        }).then(function () {
            console.log("Document successfully written!");
        })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
        this.fetchTasks();
    };

    addTask(event) {
        event.preventDefault();
        if (this.state.task) {
            this.handleLoader(true);
            this.storeTask();
            this.setState({
                task: ''
            });
        } else {
            alert('The task cannot be empty. Please enter a task.')
        }
        this.taskInput.current.focus();
    }

    onInputChange(event) {
        this.setState({ task: event.target.value })
    }

    render() {
        console.log(this.state)
        return (
            <div className="task-app container-fluid">
                {!this.state.items.length > 0 && <div className="container p-5">
                    <h1>Pick a name to see the task list</h1>
                    <Loader ref={this.loaderInstance} />
                    <ol type="1">
                        {team.map((ele, index) => (
                            <li key={index} onClick={this.fetchTasks.bind(this, ele)} title="Click to finish this task">{ele}</li>
                        ))}
                    </ol>
                </div>}
                {this.state.items.length > 0 && <div className="container p-5">
                    <h1>My tasks</h1>
                    <Loader ref={this.loaderInstance} />
                    <form className="form-inline mb-5 mt-5" onSubmit={this.addTask}>
                        <input
                            id="task-input"
                            placeholder="Enter your task here..."
                            className="form-control"
                            onChange={this.onInputChange}
                            value={this.state.task}
                            autoComplete="off"
                            ref={this.taskInput}
                        />
                        <button className="btn btn-info ml-1 font-weight-bold">Add Task</button>
                    </form>

                    <TaskList items={this.state.items} />
                </div>}
            </div>
        );
    }
}

export default Tasks;
