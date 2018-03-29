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
    projects: "",
    name: "",
    portImg: "",
    projectDes: "",
    githubURL: "",
    liveLink: ""
  };

  componentDidMount() {
    this.loadAdmin();
  }

  loadAdmin = () => {
    API.getAll()
      .then(res =>
        this.setState({ project: res.data, name: "", projectDes: "", githubURL: "", liveLInk: "", portImg: ""})
      )
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
    if (this.state.name && this.state.projectDes) {
      API.saveBook({
        name: this.state.name,
        portImg: this.state.portImg,
        projectDes: this.state.projectDes,
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
          <Col size="md-6">
            <Jumbotron>
              <h1>Enter New Portfolio Project</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.portImg}
                onChange={this.handleInputChange}
                name="portImg"
                placeholder="portImg (required)"
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
                value={this.state.projectDes}
                onChange={this.handleInputChange}
                name="projectDes"
                placeholder="projectDes (Optional)"
              />
              <FormBtn
                disabled={!(this.state.projectDes && this.state.name)}
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
                        {project.title} by {project.portImg}
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
