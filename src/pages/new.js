import { Component } from "react";
import Head from 'next/head';
import PrivateGuard from "../services/PrivateGuard";
import NewRepo from "../components/pages/NewRepo";

export default class New extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Create a new repository | GitNotes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <PrivateGuard>
          <NewRepo></NewRepo>
        </PrivateGuard>
      </div>
    );
  }
} 