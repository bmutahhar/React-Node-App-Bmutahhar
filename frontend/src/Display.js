import React, { Component } from "react";
import styled from "styled-components";
import bg1 from "./images/bg1.png";
import bg5 from "./images/bg5.png";
import bg6 from "./images/bg6.png";
import bg7 from "./images/bg7.png";
import { List, ListItem } from "@material-ui/core";

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      success: false,
    };
  }
  getDoctors() {
    fetch(`/doctors/available/${this.props.location.state.day}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((respJson) => respJson.json())
      .then((resp) => {
        console.log(resp);
        this.setState({ doctors: resp });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.getDoctors();
  }

  render() {
    return (
      <Background>
        <Container>
          <Header>
            <h2>
              These are the available doctors on {this.props.location.state.day}
            </h2>
          </Header>
          <List style={styles.list}>
            {this.state.doctors.map((item, index) => {
              return (
                <ListItem style={styles.listItem} key={index}>
                  {`Name: ${item.name}`}
                  <br />
                  {`Title: ${item.title}`}
                </ListItem>
              );
            })}
          </List>
        </Container>
      </Background>
    );
  }
}

const Background = styled.div`
 background: linear-gradient(rgba(28, 28, 28, 1), rgba(28, 28, 28, 1)),
    url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: -2;
`;

const Header = styled.div`
  height: 25%;
  width: 70%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 1.5vw;
  margin: 10px 0px 0px 0px;
  color: #eee;
`;

const styles = {
  list: {
    maxHeight: "80%",
    overflow: "auto",
    backgroundColor: "#1c1d1f",
    width: "70%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    border: "1px solid white",
  },
  listItem: {
    color: "#1c1d1f",
    margin: "7px",
    padding: "10px",
    backgroundColor: "#f5f5f5",
    borderRadius: "5px",
    width: "95%",
    fontSize: "20px",
    fontFamily: '"Open Sans", sans-serif',
    // display:"flex",
    // justifyContent:"flex-start",
    // alignItems:"center",
    // flexDirection:"column",
  },
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: transparent;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;
