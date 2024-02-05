const RemoveAllContacts = (props) =>{
    return (
        <div>
            <button onClick={()=>props.handleRemoveAllContacts()} className="btn btn-primary form-control">Remove All Contacts</button>
        </div>
    );
}

export default RemoveAllContacts;