import React, { PureComponent } from "react";

class UserUnMountComp extends PureComponent {
  render() {
    if (this.props.user === "Divya") {
      throw Error("No the user");
    }
    return `${this.props.user} user login in success!!`;
  }
}

export default UserUnMountComp;
