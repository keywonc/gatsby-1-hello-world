import React from "react";
import { Link } from "gatsby";
import Header from "../../components/header";

export default () => (
  <div style={{ color: `pink` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>`src/pages/contact/index.js</p>
  </div>
);
