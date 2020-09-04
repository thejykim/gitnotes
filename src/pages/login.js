import { Component } from "react";
import PublicGuard from '../services/PublicGuard';
import LoginPage from "../components/pages/LoginPage";

export default class Login extends Component {
  render() {
    return (
      <PublicGuard>
        <LoginPage></LoginPage>
      </PublicGuard>
    );
  }
}