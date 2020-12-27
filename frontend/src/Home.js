import React, { Component } from "react";
import styled from "styled-components";
import bg1 from "./images/bg1.png";
import bg5 from "./images/bg5.png";
import bg6 from "./images/bg6.png";
import bg7 from "./images/bg7.png";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    value: "",
  };

  handleOnChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push({
      pathname: "/availableDoctors",
      state: {
        day: this.state.value,
      },
    });
  };

  handleClear = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <Background>
        <Container>
          <Header>
            <h2>Module 4.5: Can see available doctors on specific day</h2>
          </Header>
          <form
            noValidate
            autoComplete="off"
            style={{ width: "60%" }}
            onSubmit={this.handleSubmit}
          >
            <InputTextField
              id="outlined-basic"
              label="Enter Day to Search"
              variant="outlined"
              fullWidth
              value={this.state.value}
              onChange={this.handleOnChange}
            />
            <FormButtonGroup>
              <UIButton type="submit" variant="contained">
                Search
              </UIButton>
              <UIButton
                type="button"
                variant="contained"
                onClick={this.handleClear}
              >
                Clear
              </UIButton>
            </FormButtonGroup>
          </form>
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
  margin: 60px 0px 40px 0px;
  color: #eee;
  
`;

const InputTextField = withStyles({
  root: {
    backgroundColor: "rgba(245, 245, 245, 0.9)",
    borderRadius: "5px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1c1d1f",
    },
    "& label": {
      color: "#1c1d1f",
      fontSize: "1.3vw",
    },
    "& label.Mui-focused": {
      color: "#1c1d1f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1c1d1f",
        borderRadius: "5px",
        color: "#1c1d1f",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1c1d1f",
        color: "#1c1d1f",
      },
      "& .MuiOutlinedInput-input": {
        color: "#1c1d1f",
        borderColor: "#1c1d1f",
      },
    },
  },
})(TextField);

const UIButton = withStyles({
  root: {
    color: "#1c1d1f",
    boxShadow: "none",
    textTransform: "none",
    fontSize: "1.4vw",
    fontWeight: 500,
    padding: "6px 12px",
    margin: "5px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#f2eded",
    borderColor: "#eee",
    fontFamily: "'Open Sans', sans-serif",
    width: "25%",
    "&:hover": {
      backgroundColor: "#1c1d1f",
      borderColor: "#eee",
      boxShadow: "none",
      color: "#fff",
    },
    "&:active": {
      outline: "none",
      boxShadow: "none",
      backgroundColor: "#1c1d1f",
      borderColor: "#027719",
    },
    "&:disabled": {
      backgroundColor: "#1c1d1f",
      color: "white",
      border: "none",
    },
    "&:focus": {
      outline: "none",
    },
  },
})(Button);

const FormButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 5px;
  margin: 5px 0px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

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

export default withRouter(Home);
