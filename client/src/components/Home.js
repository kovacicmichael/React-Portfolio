import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'
import API from "../utils/API";

export default class Home extends Component {
  state = {
    aboutbioImgae:"",
   	aboutName: "",
    aboutBio: "",
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
    portImage: "",
    portName: "",
    portDes: "",
    portClicks: 0,
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
  	console.log("loadpage")
    API.getAll()
      .then(res =>{
      	console.log(res)
      //   this.setState({ 
      //   	aboutbioImgae:about.bioImg,
		   	// aboutName: about.name,
		    // aboutBio: about.bio,
		    // homeBackImg: homepage.backImg,
		    // homeMessage: homepage.message,
		    // homeTitle: homepage.title,
		    // portImage: portfolio.portImg,
		    // portName: portfolio.name,
		    // portDes: portfolio.projectDes,
      //   })
    })
      .catch(err => console.log(err));
  };




	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2>{this.state.homeMessage}</h2>
					<p>This is the personal portfolio of Robert Gerboth</p>
					<p>Built with react, react-router and react-bootstrap</p>
					<Link to='/about'>
						<Button bsStyle="primary">About</Button>
					</Link>
				</Jumbotron>
				<Row className = 'show-grid text-center'>
					<Col xs={12} sm={4} className = 'person-wrapper'>
						<Image src = 'http://via.placeholder.com/300x300' circle className = 'profile-pic'></Image>
							<h3>Robert</h3>
							<p>
							Lorem ipsum dolor sit amet, porro ullum dissentiunt duo eu. Ne natum dissentiunt consequuntur eum, cu omnis possit mel, cu nec affert accusam. Prodesset definiebas no cum. At sit veniam corrumpit.

							Suas omnium eu mel. Veri libris vix in, his indoctum definitiones ex, ubique corpora duo ex. Cum error lobortis at, nemore laboramus mei id. Putant inimicus id sit. Habeo mandamus reprimique sed ei, consul volumus corrumpit cum in.

							Tollit veritus invidunt his te, mei ea suas graeco. Quando euismod id mea, mel ne omnis vituperatoribus, tation ubique vel an. Eos hendrerit vituperatoribus an, usu ut summo voluptatibus. Has ubique deleniti ei, vitae epicurei eum et. Modo ullum ridens an has, lorem consectetuer duo ne, in iusto splendide disputando usu.

							Velit dissentias no sit. Nec lorem tation facete ea, an his expetendis intellegebat. Mei ei lorem commune officiis, pro mucius principes eu. Te modus indoctum nec. At vim oblique repudiare assentior. Pri quem inciderint cu, iudico labore eam eu, viderer consequat complectitur usu ne.

							Modus detraxit pro in, aliquip assentior his ne, id prompta philosophia ius. Usu postea admodum expetendis te. Movet euismod vocibus vix ut. Mea ad nostro voluptua nominati, vix ceteros fastidii eloquentiam ut, quis ornatus eos et. Elitr facete aliquam ad his, alii errem eum cu. Ut dignissim argumentum duo, te facilisi assueverit sadipscing per. Ubique tamquam incorrupte his an.
							</p>
					</Col>
				</Row>
			</Grid>
		)
	}
} 