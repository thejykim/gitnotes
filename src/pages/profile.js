import { Component } from "react";
import PrivateGuard from "../services/PrivateGuard";
import ProfilePage from "../components/pages/ProfilePage";

export default class Profile extends Component {
  render() {
    return (
      <PrivateGuard>
        <ProfilePage></ProfilePage>
      </PrivateGuard>
    );
  }
} 