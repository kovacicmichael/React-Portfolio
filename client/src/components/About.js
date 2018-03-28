import React, { Component } from 'react'
import {Grid, Col, Image } from 'react-bootstrap'
import './About.css'
import API from "../utils/API";

export default class About extends Component {
	state = {
    aboutbioImage:"",
   	aboutName: "",
    aboutBio: "",
  	};

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
  	console.log("loadpage")
    API.getAll()
      .then(res =>{
      	console.log(res.data)
      	const data = res.data
        this.setState({ 
        	aboutbioImgae:data.about[0].bioImg,
		   	aboutName: data.about[0].name,
		    aboutBio: data.about[0].bio,
        })
    })
      .catch(err => console.log(err));
  };
	render() {
		return (
			<div>
				<Image src = {this.state.aboutbioImage} className = 'header-image'/>
				<Grid>
					<Col xs={12} sm={8} smOffset={2}>
						<Image src = 'http://via.placeholder.com/300x300' className = 'about-profile-pic' rounded/>
						<h3>{this.state.aboutName}</h3>
						<p>{this.state.aboutBio}</p>
						<p>						
							Suas omnium eu mel. Veri libris vix in, his indoctum definitiones ex, ubique corpora duo ex. Cum error lobortis at, nemore laboramus mei id. Putant inimicus id sit. Habeo mandamus reprimique sed ei, consul volumus corrumpit cum in.

							Tollit veritus invidunt his te, mei ea suas graeco. Quando euismod id mea, mel ne omnis vituperatoribus, tation ubique vel an. Eos hendrerit vituperatoribus an, usu ut summo voluptatibus. Has ubique deleniti ei, vitae epicurei eum et. Modo ullum ridens an has, lorem consectetuer duo ne, in iusto splendide disputando usu.

							Velit dissentias no sit. Nec lorem tation facete ea, an his expetendis intellegebat. Mei ei lorem commune officiis, pro mucius principes eu. Te modus indoctum nec. At vim oblique repudiare assentior. Pri quem inciderint cu, iudico labore eam eu, viderer consequat complectitur usu ne.

							Modus detraxit pro in, aliquip assentior his ne, id prompta philosophia ius. Usu postea admodum expetendis te. Movet euismod vocibus vix ut. Mea ad nostro voluptua nominati, vix ceteros fastidii eloquentiam ut, quis ornatus eos et. Elitr facete aliquam ad his, alii errem eum cu. Ut dignissim argumentum duo, te facilisi assueverit sadipscing per. Ubique tamquam incorrupte his an.
						</p>
					</Col>
				</Grid>
			</div>
		)
	}
} 