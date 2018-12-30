import React from "react";
import { Link } from "gatsby";
import Header from "../components/header";

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/contact/">Contact</Link> | <Link to="/about/">About</Link>
    <Header headerText="Hello Gatsby Index!" />
    <p>What a day.</p>
    <img
      src="https://source.unsplash.com/random/400x200"
      alt="Unsplash random"
    />
  </div>
);
