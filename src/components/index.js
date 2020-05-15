import React, { Component } from 'react';
import './style.scss';
import { db } from '../firebaseConfig';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: [],
        }
    }
    componentDidMount() {
        const TeamData = db.collection('team').doc('info');
        TeamData.get().then((doc) => {
            if (doc.exists) {
                this.setState({ teamData: doc.data().data });
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    render() {
        const { teamData } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 my-5"><h1>FE Team Members</h1></div>
                </div>
                <div className="row">
                    {teamData && teamData.map((item, index) => (
                        <div className="col-xs-12 col-sm-6 col-lg-4" key={index}>
                            <figure className="effect-bubba">
                                <img src={item.img} alt="" className="img-thumbnail img-fluid rounded" />
                                <figcaption className="hidden-sm hidden-xs">
                                    <p>{item.desc}</p>
                                    <h2>{item.name}</h2>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default Home;
