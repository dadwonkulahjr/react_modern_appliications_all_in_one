// import Contact from "./Contact";
import Contact from "./Contact";
//Map function use for looping
//Filter function used to filter on boolean values
const GeneralContacts = (props) => {
  return (
    <div
      className="col-12 py-2"
      style={{ borderRadius: "10px", backgroundColor: "#323637" }}
    >
      <div className="text-center text-white-50">Other Contacts</div>
      <div className="p-2">
        {props.contacts.map((contact, index) => (
          <Contact 
          contact={contact} 
          key={index}
          handleFavoriteClick={props.handleFavoriteClick}
          handleDeleteContact={props.handleDeleteContact}
          handleUpdateClick={props.handleUpdateClick}
          >
          </Contact>
        ))}
      </div>
    </div>
  );
};

export default GeneralContacts;
