import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import UpdateBtn from "../../components/UpdateBtn";
import Footer from '../Footer';
import API from "../../utils/API";
import "./Admin.css";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import firebaseConfig from '../../firebase.js';

let database = firebaseConfig.database();
const auth = firebaseConfig.auth();



export default class Admin extends Component {
  state = {
    portID: "",
    portSortOrder: "",
    portImage: "",
    portName: "",
    portGithubURL: "",
    portLiveLink: "",
    portDes: "",
    techUsed: "",
    projects: "",
    contactName: "",
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
    contacts: ""
  };

  componentDidMount() {
    this.loadPage();
    auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          console.log('loggerd in')
        }
        else {
          console.log("Not logged in");
          window.location = "/";
        }
      })
  }

  loadPage = () => {
    console.log("loadPage in Admin");
    API.getAll()
      .then(res =>{
        console.log(res.data)
        const data = res.data
        console.log(data.portfolio)
        this.setState({
          projects: data.portfolio,
          contacts: data.contacts
        })
        //console.log(data.about[0].name + " " + data.about[0].title + " " + data.portfolio[0].name + " "+ data.contacts[0].name)
    })
      .catch(err => console.log(err));
  };

  selectProject = id => {
    API.getProject(id)
    .then(res => {
      console.log(res.data);
      const data = res.data;
      this.setState({
        portID: data._id,
        portSortOrder: data.sortOrder,
        portImage: data.portImg,
        portName: data.name,
        portGithubURL: data.githubURL,
        portLiveLink: data.liveLink,
        portDes: data.portDes,
        techUsed: data.techUsed
      })
    })
    .catch(err => console.log(err));
  };

  handleProjectUpdate = event => {
    event.preventDefault();
    console.log(`Inside handleProjectSubmit`);
    console.log(`Portfolio ID: ${this.state.portID}`);
      API.updateProject({
        _id: this.state.portID,
        name: this.state.portName,
        sortOrder: this.state.portSortOrder,
        portImg: this.state.portImage,
        portDes: this.state.portDes,
        githubURL: this.state.portGithubURL,
        liveLink: this.state.portLiveLink,
        techUsed: this.state.techUsed.split(", "),
        
      })
        .then(res => this.loadPage())
        .catch(err => console.log(err));

    this.setState({ 
      portID: "",
      portSortOrder: "",
      portImage: "",
      portName: "",
      portGithubURL: "",
      portLiveLink: "",
      portDes: "",
      techUsed: "",
      projects: ""
    })
  };

  deleteProject = id => {
    console.log("Delete project");
    API.deleteProject(id)
      .then(res => {
        console.log("Delete project");
        this.loadPage()
      })
      .catch(err => console.log(err));
  };

  deleteContact = id => {
    console.log("Delete contact");
    API.deleteContact(id)
      .then(res => {
        console.log("Deleted Contact");
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
        sortOrder: this.state.portSortOrder,
        portImg: this.state.portImage,
        portDes: this.state.portDes,
        githubURL: this.state.portGithubURL,
        liveLink: this.state.portLiveLink,
        techUsed: this.state.techUsed.split(", "),
        portfolioClicks: 0
      })
        .then(res => this.loadPage())
        .catch(err => console.log(err));

    this.setState({ 
      port_id: "",
      portSortOrder: "",
      portImage: "",
      portName: "",
      portGithubURL: "",
      portLiveLink: "",
      portDes: "",
      projects: ""
    })
  };

  logOut = event => {
    firebaseConfig.auth().signOut();

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log('loggerd in')
        console.log(firebaseUser);
        window.location = "/Admin";
      }
      else {
        console.log("Not logged in");
        window.location = "/";
      }
    })

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size = "sm-12 md-12">
              <h1 class="headerMessage">Bio and Project Information</h1>
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
              <Input
                value={this.state.techUsed}
                onChange={this.handleInputChange}
                name="techUsed"
                placeholder="Tech Used"
              />
              <TextArea
                value={this.state.portDes}
                onChange={this.handleInputChange}
                name="portDes"
                placeholder="Project Description (required)"
              />
              <FormBtn
                disabled={!this.state.portDes && !this.state.portName}
                onClick={this.handleProjectSubmit}
              >
                Submit as New Project
              </FormBtn>
              <FormBtn
                disabled={!this.state.portDes && !this.state.portName}
                onClick={this.handleProjectUpdate}
              >
                Update Project
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
                    <UpdateBtn onClick={() => this.selectProject(project._id)} />
                    <p><strong>{project.name}</strong></p>
                    <p><strong>Description  : {project.portDes}</strong></p>
                    <p><strong>GitHub Link  : {project.githubURL}</strong></p>
                    <p><strong>Live Link    : {project.liveLink}</strong></p>
                    <p><strong>Image LInk   : {project.portImg}</strong></p>
                    <p><strong>Tech Used   : {project.techUsed}</strong></p>
                    <p><strong>Number Views : {project.portfolioClicks}</strong></p>
                    <p></p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
        <Col size = "md-6">
            <h1>Registered Contacts</h1>
            {this.state.contacts.length ? (
              <List>
                {this.state.contacts.map(contact => (
                  <ListItem key={contact._id}>
                    <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                    <p><strong>Name    : {contact.name}</strong></p>
                    <p><strong>Email   : {contact.email}</strong></p>
                    <p><strong>Subject : {contact.subject}</strong></p>
                    <p><strong>Message : {contact.message}</strong></p>
                    <p></p>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          </Row>
        <footer>
          Copyright 2018 - Michael J Kovacic
          <br />
        
          <a onClick = {this.logOut}> Home(logout)</a>

        </footer>
      </Container>
    );
  }
}
