import React, { Component } from 'react';
import dayjs from 'dayjs';
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
        var ts = dayjs().format('DD MMM YYYY');
        // Add a new document in collection "cities"
        db.collection('team').doc(`tasks/monica/${ts}`).set({ data:[
    {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },
      {
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
      },
      {
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
      },
      {
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
      },
      {
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
      },
      {
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
      },
      {
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
      },
      {
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
      },
      {
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true
      },
      {
        "id": 15,
        "title": "ab voluptatum amet voluptas",
        "completed": true
      },
      {
        "id": 16,
        "title": "accusamus eos facilis sint et aut voluptatem",
        "completed": true
      },
      {
        "id": 17,
        "title": "quo laboriosam deleniti aut qui",
        "completed": true
      },
      {
        "id": 18,
        "title": "dolorum est consequatur ea mollitia in culpa",
        "completed": false
      },
      {
        "id": 19,
        "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
        "completed": true
      },
      {
        "id": 20,
        "title": "ullam nobis libero sapiente ad optio sint",
        "completed": true
      }
]

            })
          .then(function() {
            console.log("Document successfully written!");
          })
          .catch(function(error) {
            console.error("Error writing document: ", error);
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
