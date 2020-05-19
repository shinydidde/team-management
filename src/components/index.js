import React, { Component } from 'react';
import star from '../images/star.png';
import './style.scss';
import { db } from '../firebaseConfig';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamData: {},
        }
    }
    getCertificate(name){
        const {history:{push}} = this.props;
        localStorage.setItem('name', name);
        push('/star-performer-of-the-month')
    }
    componentDidMount() {
        //getting data from firebase    
        const TeamData = db.collection('team').doc('group');
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
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-12 my-5"><h1>Frontend Team</h1></div>
                </div>
                <div className="row">
                    {teamData && teamData.fe &&  teamData.fe.map((item, index) => (
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 frame" key={index}>
                            {item.enabled === true && <span onClick={this.getCertificate.bind(this, item.name)}><img src={star} alt="" className="App-logo"/></span>}
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
                {/* <div className="row">
                    <div className="col-lg-12 my-5"><h1>BE Team Members</h1></div>
                </div>
                <div className="row">
                    {teamData && teamData.be &&  teamData.be.map((item, index) => (
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 frame" key={index}>
                            {item.enabled === true && <span onClick={this.getCertificate.bind(this, item.name)}><img src={star} alt="" className="App-logo"/></span>}
                            <figure className="effect-bubba">
                                <img src={item.img} alt="" className="img-thumbnail img-fluid rounded" />
                                <figcaption className="hidden-sm hidden-xs">
                                    <p>{item.desc}</p>
                                    <h2>{item.name}</h2>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div> */}
            </div>
        );
    }
}
export default Home;
