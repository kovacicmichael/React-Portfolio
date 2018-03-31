import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

export default class Admin extends Component {
  state = {
    aboutID: "",
    aboutbioImage: "",
    aboutName: "",
    aboutBio: "",
    aboutFBURL: "",
    aboutGHURL: "",
    aboutLIURL: "",
    aboutEmail: "",
    aboutPhone: "",
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
    portSortOrder: "",
    portImage: "",
    portName: "",
    portGithubURL: "",
    portLiveLink: "",
    portDes: "",
    projects: ""
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    console.log("loadPage in Admin");
    API.getAll()
      .then(res =>{
        console.log(res.data)
        const data = res.data
        this.setState({ 
          aboutID:data.about[0]._id,
          aboutbioImage:data.about[0].bioImg,
          aboutName: data.about[0].name,
          aboutBio: data.about[0].bio,
          aboutFBURL: data.about[0].facebookURL,
          aboutGHURL: data.about[0].githubURL,
          aboutLIURL: data.about[0].linkedinURL,
          aboutEmail: data.about[0].email,
          aboutPhone: data.about[0].phone,
          homeBackImg: data.about[0].backImg,
          homeMessage: data.about[0].message,
          homeTitle: data.about[0].title,
          projects: data.portfolio
        })
        console.log(data.about[0].name + " " + data.about[0].title + " " + data.portfolio[0].name)
    })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    console.log("Delete project");
    API.deleteProject(id)
      .then(res => {
        console.log("Did delete project");
        this.loadPage()
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleAboutSubmit = event => {
    event.preventDefault();
      console.log(`Inside handleAboutSubmit. Profile ID: ${this.state.aboutID} ${this.state.aboutName} ${this.state.aboutbioImage} ${this.state.aboutBio}`);
      API.updateAbout({
        _id: this.state.aboutID,
        name: this.state.aboutName,
        bioImg: this.state.aboutbioImage,
        bio: this.state.aboutBio,
        backImg: this.state.homeBackImg,
        message: this.state.homeMessage,
        title: this.state.homeTitle,
        facebookURL: this.state.aboutFBURL,
        linkedinURL: this.state.aboutLIURL,
        githubURL: this.state.aboutGHURL,
        email: this.state.aboutEmail,
        phone: this.state.aboutPhone
      })
        .then(res => this.loadPage())
        .catch(err => console.log(err));
  };

  handleProjectSubmit = event => {
    event.preventDefault();
      API.saveProject({
        name: this.state.portName,
        portSortOrder: this.state.portSortOrder,
        portImg: this.state.portImage,
        portDes: this.state.portDes,
        githubURL: this.state.portGithubURL,
        liveLink: this.state.portLiveLink,
        portfolioClicks: 0
      })
        .then(res => this.loadPage())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size = "sm-12 md-12">
            <Jumbotron>
              <h1>Enter Home Page and Bio Information Here</h1>
            </Jumbotron>
          </Col>
          <Col size = "md-6">
            <h1>Personal Profile</h1>
            <form>
              <Input
                value={this.state.aboutName}
                onChange={this.handleInputChange}
                name="aboutName"
                placeholder="Name (Required)"
              />
              <Input
                value={this.state.homeTitle}
                onChange={this.handleInputChange}
                name="homeTitle"
                placeholder="Homepage Title"
              />
              <Input
                value={this.state.aboutbioImage}
                onChange={this.handleInputChange}
                name="aboutbioImage"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.aboutFBURL}
                onChange={this.handleInputChange}
                name="aboutFBURL"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.aboutGHURL}
                onChange={this.handleInputChange}
                name="aboutGHURL"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.aboutLIURL}
                onChange={this.handleInputChange}
                name="aboutLIURL"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.aboutEmail}
                onChange={this.handleInputChange}
                name="aboutEmail"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.aboutPhone}
                onChange={this.handleInputChange}
                name="aboutPhone"
                placeholder="Biography Image URL"
              />
              <Input
                value={this.state.homeMessage}
                onChange={this.handleInputChange}
                name="homeMessage"
                placeholder="Homepage Greeting Message"
              />
              <Input
                value={this.state.homeBackImg}
                onChange={this.handleInputChange}
                name="homeBackImg"
                placeholder="Homepage Background Image"
              />
              <TextArea
                value={this.state.aboutBio}
                onChange={this.handleInputChange}
                name="aboutBio"
                placeholder="Biography (Required)"
              />
              <FormBtn
                disabled={!(this.state.aboutName && this.state.aboutBio)}
                onClick={this.handleAboutSubmit}
              >
                Submit Bio
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6 sm-12">

              <h1>Enter New Portfolio Project</h1>

            <form>
              <Input
                value={this.state.portName}
                onChange={this.handleInputChange}
                name="portName"
                placeholder="Project Name (required)"
              />
              <Input
                value={this.state.portSortOrder}
                onChange={this.handleInputChange}
                name="portSortOrder"
                placeholder="Project Display Position (required)"
              />
              <Input
                value={this.state.portImage}
                onChange={this.handleInputChange}
                name="portImage"
                placeholder="Project Image"
              />
              <Input
                value={this.state.portGithubURL}
                onChange={this.handleInputChange}
                name="portGithubURL"
                placeholder="GitHub URL (Optional)"
              />
              <Input
                value={this.state.portLiveLink}
                onChange={this.handleInputChange}
                name="portLiveLink"
                placeholder="Live Link (Optional)"
              />
              <TextArea
                value={this.state.portDes}
                onChange={this.handleInputChange}
                name="portDes"
                placeholder="Project Description (required)"
              />
              <FormBtn
                disabled={!(this.state.portDes && this.state.portName)}
                onClick={this.handleProjectSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">

              <h1>Projects</h1>

              {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <DeleteBtn onClick={() => this.deleteProject(project._id)} />
                    <Link to={"/portfolio/" + project._id}>
                      <p><strong>{project.name}</strong></p>
                    </Link>
                    <p><strong>Description  : {project.portDes}</strong></p>
                    <p><strong>GitHub Link  :{project.githubURL}</strong></p>
                    <p><strong>Live Link    :{project.liveLink}</strong></p>
                    <p><strong>Image LInk   :{project.portImg}</strong></p>
                    <p><strong>Number Views :{project.portfolioClicks}</strong></p>
                    <p></p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
