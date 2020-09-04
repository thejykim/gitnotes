import { Component } from "react";
import PublicGuard from "../services/PublicGuard";
import SignupPage from '../components/pages/SignupPage';

export default class Signup extends Component {
  render() {
    return (
      <PublicGuard>
        <SignupPage></SignupPage>
      </PublicGuard>
    )
  }
}