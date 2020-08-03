import React, { Component } from "react";
import { TextField, Container, Button } from "@material-ui/core";

export default class ForgotPassword extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailError: "",
      msg: "",
    };
  }
  handleEmail=(event)=>{
      this.setState({email:event.target.value})
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.email === "") {
      this.setState({ emailError: "email can't empty" });
    } else {
      this.setState({ msg: "an email sent to your email" });
    }
  };
  render() {
    return (
      <div>
        {this.state.msg}
        <Container component="main" maxWidth="xs">
        <form  noValidate onSubmit={this.handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={this.handleEmail}
            autoFocus
            error={this.state.emailError}
            helperText={this.state.emailError}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
          >
            Submit
          </Button>
        </form>
        </Container>
      </div>
    );
  }
}
