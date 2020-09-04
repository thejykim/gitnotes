import { Component } from "react";
import Head from 'next/head';
import PublicGuard from '../services/PublicGuard';
import LoginPage from "../components/pages/LoginPage";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Login | GitNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PublicGuard>
          <LoginPage></LoginPage>
        </PublicGuard>
      </div>
    );
  }
}