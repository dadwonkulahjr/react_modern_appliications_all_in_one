import React from "react";
import AddContacts from "../Contacts/AddContacts";
import Header from "../Layout/Header";
import AddRandomContact from "./AddRandomContact";
import RemoveAllContacts from "./RemoveAllContacts";
import FavoriteContacts from "./FavoriteContacts";
import GeneralContacts from "./GeneralContacts";
import Footer from "../Layout/Footer";

class ContactIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [
        {
          id: 1,
          name: "Precious K. Wonkulah",
          email: "wonkulahp@yahoo.com",
          phone: "+231770539161",
          IsfavoriteContact: true,
        },
        {
          id: 2,
          name: "Darius W. Faith",
          email: "dariuswonkulah@gmail.com",
          phone: "+231880587888",
          IsfavoriteContact: false,
        },
        {
          id: 3,
          name: "Dacious W. Rose",
          email: "daciouswonkulah@gmail.com",
          phone: "+2315557787",
          IsfavoriteContact: true,
        },
        {
          id: 4,
          name: "Dad S. Wonkulah Sr",
          email: "wonkulahsr@tuseTheProgrammer.com",
          phone: "+23166577878",
          IsfavoriteContact: false,
        },
      ],
      selectedContact:undefined,
      isUpdatingContact:false
    };
  }

  handleAddContact = (newContact) => {
    if (newContact.name === "") {
      return { status: "failure", msg: "Please enter a valid name." };
    } else if (newContact.phone === "") {
      return { status: "failure", msg: "Please enter a valid phone number." };
    }

    const duplicateContacts = this.state.contactList.filter((x) => {
      if (x.name === newContact.name && x.phone === newContact.phone) {
        return true;
      }
    });

    if (duplicateContacts.length > 0) {
      return { status: "failure", msg: "Duplicate record." };
    } else {
      const newFinalContact = {
        ...newContact,
        id: this.state.contactList[this.state.contactList.length - 1].id + 1,
        IsfavoriteContact: false,
      };
      this.setState((prevState) => {
        return {
          contactList: prevState.contactList.concat(newFinalContact),
        };
      });
      return {status: "success", msg: "Contact was added successfully!"};
    }
  };


  handleFavoriteClick = (contact) =>{
    this.setState((prevState) =>{
      return{
        contactList: prevState.contactList.map((obj) =>{
          if(obj.id === contact.id){
            return {...obj, IsfavoriteContact: !obj.IsfavoriteContact}
          }
          else{
            return obj;
          }
        })
      }
    })
  }

  handleDeleteContact = (contactId) =>{
    this.setState((prevState) =>{
      return{
        contactList: prevState.contactList.filter((obj) =>{
          return obj.id !== contactId
        })
      }
    })
  };

  handleAddRandomContact = (newRandomContact) =>{
    const newFinalContact = {
      ...newRandomContact,
      id: this.state.contactList[this.state.contactList.length - 1].id + 1,
      IsfavoriteContact: false,
    };

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.concat(newFinalContact),
      };
    });
  };

  handleRemoveAllContacts = () =>{
      this.setState((prevState)=>{
        return{
          contactList: []
        }
      });
  };

  handleUpdateClick = (contact) =>{
    this.setState((prevState)=>{
      return{
        selectedContact:contact,
        isUpdatingContact:true
      }
    });
    console.log(contact);
    // alert("Edit button clicked");
  };

  handleCancelUpdateContact = (contact) =>{
    this.setState((prevState)=>{
      return{
        selectedContact:undefined,
        isUpdatingContact:false
      }
    });
    console.log(contact);
    // alert("Edit button clicked");
  };

  handleUpdateContact = (updatedContact) => {
    console.log(updatedContact);
    if (updatedContact.name === "") {
      return { status: "failure", msg: "Please enter a valid name." };
    } else if (updatedContact.phone === "") {
      return { status: "failure", msg: "Please enter a valid phone number." };
    }

    this.setState((prevState) => {
      return {
        contactList: prevState.contactList.map((obj) =>{
          if(obj.id === updatedContact.id){
            return {...obj,
              name:updatedContact.name,
              email:updatedContact.email,
              phone:updatedContact.phone
            };
          }
          return obj;
        }),
        isUpdatingContact:false,
        selectedContact:undefined
      };
    });
    return {status: "success", msg: "Contact was updated successfully!"};
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ minHeight: "85vh" }}>
          <div className="row py-3">
            <div className="col-4 offset-2 row">
              <AddRandomContact handleAddRandomContact={this.handleAddRandomContact} 
              />
            </div>
            <div className="col-4 row">
              <RemoveAllContacts handleRemoveAllContacts={this.handleRemoveAllContacts} />
            </div>
            <div className="row py-2">
              <div className="col-lg-8 offset-lg-2 row">
                {/* <div className="col-8 offset-2 row"> */}
                <AddContacts 

                handleAddContact={this.handleAddContact}
                isUpdating={this.state.isUpdatingContact}
                selectedContact={this.state.selectedContact}
                handleCancelUpdateContact={this.handleCancelUpdateContact}
                handleUpdateContact={this.handleUpdateContact}
                >
                </AddContacts>
              </div>
            </div>

            <div className="row py-2">
              <div className="col-lg-8 offset-lg-2 row">
                {/* <div className="col-8 offset-2 row"> */}
                <FavoriteContacts handleFavoriteClick={this.handleFavoriteClick}
                  handleDeleteContact={this.handleDeleteContact}
                  handleUpdateClick={this.handleUpdateClick}
                  contacts={this.state.contactList.filter(
                    (x) => x.IsfavoriteContact === true
                  )}
                ></FavoriteContacts>
              </div>
            </div>
            <div className="row py-2">
              <div className="col-lg-8 offset-lg-2 row">
                {/* <div className="col-8 offset-2  row"> */}
                <GeneralContacts handleFavoriteClick={this.handleFavoriteClick}
                  handleDeleteContact={this.handleDeleteContact}
                  handleUpdateClick={this.handleUpdateClick}
                  contacts={this.state.contactList.filter(
                    (x) => x.IsfavoriteContact === false
                  )}
                ></GeneralContacts>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ContactIndex;
