import React, { Component } from "react";

export class RenderListComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        { id: 1, name: "John Doe", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", phone: "987-654-3210" },
        { id: 3, name: "Alice Johnson", phone: "555-123-4567" },
      ],
    };
  }

  render() {
    const users = this.state.users;
    return (
      <div>
        <h1>Rendering list Comp</h1>
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.phone}
              </li>
            ))}
          </ul>
        ) : (
          <h2>No users found!!</h2>
        )}
      </div>
    );
  }
}

export default RenderListComp;
