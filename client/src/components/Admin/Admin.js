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
    aboutbioImgage: "",
    aboutName: "",
    aboutBio: "",
    homeBackImg: "",
    homeMessage: "",
    homeTitle: "",
    portImage: "",
    portName: "",
    portDes: "",
    projects: ""
  };

  componentDidMount() {
    this.loadPage();
  }

  loadPage = () => {
    console.log("loadpage");
    API.getAll()
      .then(res =>{
        console.log(res.data)
        const data = res.data
        this.setState({ 
          aboutbioImgage:data.about[0].bioImg,
          aboutName: data.about[0].name,
          aboutBio: data.about[0].bio,
          homeBackImg: data.homepage[0].bckImage,
          homeMessage: data.homepage[0].message,
          homeTitle: data.homepage[0].title,
          projects: data.portfolio
        })
        console.log(data.about[0].name + " " + data.homepage[0].title + " " + data.portfolio[0].name)
    })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.portDes) {
      API.saveProject({
        name: this.state.name,
        portImg: this.state.portImg,
        portDes: this.state.portDes,
        githubURL: this.state.githubURL,
        liveLink: this.state.liveLink
      })
        .then(res => this.renderPage())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size = "md-12">
            <Jumbotron>
              <h1>Enter Home Page and Bio Information Here</h1>
            </Jumbotron>
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
              <Input
                value={this.state.aboutbioImgage}
                onChange={this.handleInputChange}
                name="aboutbioImgage"
                placeholder="Biography Image URL"
              />
              <TextArea
                value={this.state.aboutBio}
                onChange={this.handleInputChange}
                name="aboutBio"
                placeholder="Biography (Required)"
              />
              <FormBtn
                disabled={!(this.state.aboutName && this.state.aboutBio)}
                onClick={this.handleFormSubmit}
              >
                Submit Bio
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter New Portfolio Project</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.portName}
                onChange={this.handleInputChange}
                name="portName"
                placeholder="Project Name (required)"
              />
              <Input
                value={this.state.portImg}
                onChange={this.handleInputChange}
                name="portImg"
                placeholder="Project Image"
              />
              <Input
                value={this.state.githubURL}
                onChange={this.handleInputChange}
                name="githubURL"
                placeholder="GitHub URL (Optional)"
              />
              <Input
                value={this.state.liveLink}
                onChange={this.handleInputChange}
                name="liveLink"
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
                onClick={this.handleFormSubmit}
              >
                Submit Project
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Projects</h1>
            </Jumbotron>
              {this.state.projects.length ? (
              <List>
                {this.state.projects.map(project => (
                  <ListItem key={project._id}>
                    <Link to={"/books/" + project._id}>
                      <strong>
                        {project.name}, {project.projectDes} Image: {project.portImg} ID: {project._id}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteProject(project._id)} />
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
