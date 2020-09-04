import { Component } from "react";
import Head from 'next/head';
import PrivateGuard from "../services/PrivateGuard";
import ProfilePage from "../components/pages/ProfilePage";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Profile | GitNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PrivateGuard>
          <ProfilePage></ProfilePage>
        </PrivateGuard>
      </div>
    );
  }
} 