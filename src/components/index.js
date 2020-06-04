import React, { Component } from 'react';
import Slider from "react-slick";
import star from '../images/plain.png';
import team from '../images/team.png';
import './style.scss';
import { db } from '../firebaseConfig';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: [],
      certificate: {}
    }
    this.shuffle = this.shuffle.bind(this);
  }
  getCertificate(name) {
    const { history: { push } } = this.props;
    localStorage.setItem('name', name);
    push('/star-performer-of-the-month')
  }

  shuffle(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  componentDidMount() {
    //getting data from firebase    
    const TeamData = db.collection('team').doc('group');
    TeamData.get().then((doc) => {
      if (doc.exists) {
        this.setState({ teamData: this.shuffle(doc.data().data.fe), certificate: doc.data().certificate });
      } else {
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { teamData, certificate } = this.state;
    return (
      <div className="container pb-5">
        {certificate && <div className="row text-left">
          <div className="col-lg-6">
            <h1 className="my-5">Frontend Team </h1>
            <h4 className="my-5">{certificate.name} | {certificate.title} - {certificate.month}</h4>
            <button className="btn btn-outline-dark" onClick={this.getCertificate.bind(this, certificate.name)}>Certificate</button>
          </div>
          <div className="col-lg-6">
            <img src={team} className="img-fluid mt-5" alt="" />
          </div>
        </div>}
        <div className="row">
          <div className="col-lg-12 my-5">
            <Slider {...settings}>
              {teamData && teamData.map((item, index) => (
                <div className="circle" key={index}>
                  <div className="image-cropper">
                    <img src={item.img} alt="" className="img-fluid" />
                  </div>
                  <div className="title" onClick={item.enabled ? this.getCertificate.bind(this, item.name) : null}>{item.enabled === true && <span><img src={star} alt="" className="App-logo" /></span>}<strong>{item.name}</strong> | {item.desc}</div>
                </div>))}
            </Slider>
          </div>
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
