import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "jdoe@gmaile.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "karen@gmaile.com",
        phone: "666-666-6666"
      },
      {
        id: 3,
        name: "henry munier",
        email: "henry@gmaile.com",
        phone: "111-111-1111"
      }
    ]
  };

  deleteContact = (id) => {
    const { contacts } = this.state;

    const newContacts = contacts.filter(contact =>
      contact.id !== id);

    this.setState({
      contacts: newContacts
    })
  }

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
