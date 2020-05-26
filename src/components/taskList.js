import React from 'react';
import dayjs from 'dayjs';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { db } from '../firebaseConfig';

const name = "monica";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.displayTask = this.displayTask.bind(this);
    this.finishTask = this.finishTask.bind(this);
  }

  displayTask(task) {
    return <li
      className={`font-weight-bold ${task.completed ? 'strikethrough' : ''}`}
      key={`${task.id}`}
      onClick={this.finishTask}
      title={task.title}
      id={task.id}
    >
      {task.title}
    </li>
  };

  updateTaskStatus(selectedTask) {
    var ts = dayjs().format('DD MMM YYYY');
    db.collection('team').doc('tasks').collection(name).doc(`${ts}`).update({
      data: firebase.firestore.FieldValue.arrayRemove({
        id: selectedTask.id,
        title: selectedTask.title,
        completed: false
      })
    }).then(function () {
      console.log("Item removed!");
      // db.collection('team').doc('tasks').collection(name).doc(`${ts}`).update({
      //   data: firebase.firestore.FieldValue.arrayUnion({
      //     id: selectedTask.id,
      //     title: selectedTask.title,
      //     completed: true
      //   })
      // }).then(function () {
      //   console.log("Document successfully written!");
      // })
      //   .catch(function (error) {
      //     console.error("Error writing document: ", error);
      //   });
    })
      .catch(function (error) {
        console.error("Error removing item: ", error);
      });
  };

  finishTask(event) {
    const selectedTask = event.currentTarget;
    this.updateTaskStatus(selectedTask);
  };

  render() {
    return <div className="card card-body bg-info mb-2">
      <ul className="task-list text-white">
        {
          this.props.items.length !== 0 ?
            this.props.items.map(this.displayTask) :
            <label className="font-weight-bold">You have no tasks at the moment!</label>
        }
      </ul>
    </div>
  }
}

export default TaskList;
