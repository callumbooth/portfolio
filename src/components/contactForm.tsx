import React, { Component } from "react";

import Axios from "axios";

interface IContactFormState {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

class ContactForm extends Component<unknown, IContactFormState> {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const msg = {
      Subject: "New message from the portfolio",
      Body: {
        contentType: "Text",
        Content: `
                    You have a new message!\n\n
                    Name: ${this.state.name}\n
                    Email: ${this.state.email}\n
                    Message: ${this.state.message}\n
                `
      },
      ToRecipients: [
        {
          EmailAddress: {
            address: "callum-booth@live.co.uk"
          }
        }
      ]
    };

    Axios.post("https://outlook.office.com/api/v2.0/me/sendmail", {
      Message: msg
    });
  };

  onChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="contact-me-form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            className={this.state.name !== "" ? "has-data" : null}
            type="text"
            onChange={this.onChange}
            name="name"
            value={this.state.name}
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input
            className={this.state.email !== "" ? "has-data" : null}
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.state.email}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-group">
          <textarea
            className={this.state.message !== "" ? "has-data" : null}
            name="message"
            onChange={this.onChange}
            value={this.state.message}
          ></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <input type="submit" className="btn btn-red" />
      </form>
    );
  }
}

export default ContactForm;
