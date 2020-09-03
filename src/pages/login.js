import { Component } from "react";
import ShellNav from "../components/ShellNav";
import LoginPage from "../components/pages/LoginPage";

export default class Login extends Component {
  render() {
    return (
      <ShellNav>
        <LoginPage></LoginPage>
      </ShellNav>
    );
  }
}