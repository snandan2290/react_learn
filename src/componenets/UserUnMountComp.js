import { Component } from "react";
import WithErroBoundryComp from "./WithErroBoundryComp";

class UserUnMountComp extends Component {
  render() {
    if (this.props.user === "Divya") {
      throw Error("No the user");
    }
    return `${this.props.user} user login in success!!`;
  }
}

export default WithErroBoundryComp(UserUnMountComp);
