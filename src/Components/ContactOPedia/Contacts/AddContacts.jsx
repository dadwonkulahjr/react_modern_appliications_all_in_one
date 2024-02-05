import React from "react";

class AddContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      successMessage: undefined,
      errorMessage: undefined,
    };
  }

  handleOnSubmitAddContactForm = (e) => {
    e.preventDefault();
    const name = e.target.elements.contactName.value.trim();
    const phone = e.target.elements.contactPhone.value.trim();
    const email = e.target.elements.contactEmail.value.trim();
    const id = e.target.elements.contactId.value.trim();
    let responseMessage = undefined;

    if (this.props.isUpdating) {
      responseMessage = this.props.handleUpdateContact({
        id: id,
        name: name,
        phone: phone,
        email: email,
      
      });
    } else {
      responseMessage = this.props.handleAddContact({
        name: name,
        phone: phone,
        email: email,
      });
    }
    if (responseMessage.status === "success") {
      this.setState({
        errorMessage: undefined,
        successMessage: responseMessage.msg,
      });
      document.querySelector(".contact-form").reset();
    } else {
      this.setState({
        errorMessage: responseMessage.msg,
        successMessage: undefined,
      });
    }
  };

  handleCancel = () => {
    this.props.handleCancelUpdateContact();
  };
  render() {
    return (
      <form
        onSubmit={this.handleOnSubmitAddContactForm}
        className="contact-form"
      >
        <div className="border text-white py-2">
          <div className="row p-2">
            <div className="col-12 text-white-50">
              {this.props.isUpdating ? "Update Contact" : "Add a new contact"}
            </div>

            <div className="co-12 col-md-4 py-1">
              <input
                className="form-control form-control-sm"
                placeholder="Name..."
                name="contactName"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.name : ""
                }
              />
            </div>
            <div className="co-12 col-md-4 py-1">
              <input
                className="form-control form-control-sm"
                placeholder="Phone..."
                name="contactPhone"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.phone : ""
                }
              />
            </div>
            <div className="co-12 col-md-4 py-1">
              <input
                className="form-control form-control-sm"
                placeholder="Email..."
                name="contactEmail"
                defaultValue={
                  this.props.isUpdating ? this.props.selectedContact.email : ""
                }
              />
            </div>
            {this.state.errorMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-danger text-center">
                {this.state.errorMessage}
              </div>
            )}

            {this.state.successMessage === undefined ? (
              <div></div>
            ) : (
              <div className="col-12 text-success text-center">
                {this.state.successMessage}
              </div>
            )}

            <div
              className={`"col-12 py-1" ${
                this.props.isUpdating
                  ? "col-md-4 offset-md-2"
                  : "col-md-6 offset-md-3"
              }`}
            >
              <button className="form-control btn btn-success mt-1">
                {this.props.isUpdating ? "Update" : "Create"}
              </button>
            </div>
            <div className="col-12 col-md-4 p-1">
              {this.props.isUpdating && (
                <button
                  className="btn btn-secondary form-control"
                  onClick={this.handleCancel}
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
        <input
          hidden
          name="contactId"
          defaultValue={
            this.props.isUpdating ? this.props.selectedContact.id : ""
          }
        ></input>
      </form>
    );
  }
}

export default AddContacts;
