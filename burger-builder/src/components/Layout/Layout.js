import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const Layout = props => (
  <Aux>
    <main className="content">{props.children}</main>
  </Aux>
);

export default Layout;
