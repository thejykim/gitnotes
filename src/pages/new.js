import { Component } from "react";
import Head from 'next/head';
import PrivateGuard from "../services/PrivateGuard";
import NewProject from "../components/pages/NewProject";

export default class New extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>New Project | GitNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PrivateGuard>
          <NewProject></NewProject>
        </PrivateGuard>
      </div>
    );
  }
} 