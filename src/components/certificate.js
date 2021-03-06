import React, { Component } from 'react';
import './style.scss';
import line from '../images/line.png';
import star from '../images/sp.png';
import { db } from '../firebaseConfig';

class Certificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: {},
            
        }
    }
    componentDidMount() {
        const TeamData = db.collection('team').doc('group');
        TeamData.get().then((doc) => {
            if (doc.exists) {
                this.setState({ Data: doc.data().certificate });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    render() {
        const { Data } = this.state;
        const name = localStorage.getItem('name');
        return (
            <div className="certificate">
                <div className="row">
                {Data &&  <div className="col">
                    <h1 className="my-3">{Data.title}</h1>
                    <img src={line} className="img-fluid" alt=""/>
                    <h6 className="my-3">This certifies that</h6>
                    <h2>{name ? name : Data.name}</h2>
                    <h6 className="mt-3">Is the star performer of the month {Data.month}</h6>
                    <img src={star} className="img-fluid" alt=""/>
                </div>}
            </div>
            </div>
        );
    }
}
export default Certificate;
