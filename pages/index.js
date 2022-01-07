/** @format */

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Auth from "@aws-amplify/auth";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

const Dashboard = () => {

  const [user, setUser] = useState(null);
  const [fleet, setFleet] = useState([]);

  async function getUser() {
    const current = await Auth.currentAuthenticatedUser();
    console.log("Current user", current);
    setUser(current);
  }

  async function getFleet() {
    const email = user?.attributes?.email || "";
    const url = `/api/fleet?id=${email}`;

    const { data } = await axios.get(url);

    console.log("Fetched", data);
    setFleet(data.fleet);
  }

  // async function setFleet() {
  //   const email = user?.attributes?.email || "";
  //   const url = `/api/fleet?id=${email}`;

  //   const data = await axios.put(url, {
  //     fleet: [
  //       {
  //         ...
  //       }
  //     ]
  //   });

  //   console.log("Fetched", data);
  // }

  useEffect(() => {
    if (!user) return;

    getFleet();
  }, [user]);

  useEffect(() => {
    if (!window) return;

    getUser();
  }, []);

  
  return (
    <div>
      <Navbar user={user} />
      <Table user={user} fleet={fleet} />
    </div>
  );
};

export default Dashboard;
