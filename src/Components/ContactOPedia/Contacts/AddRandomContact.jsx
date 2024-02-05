import { getRandomUsers } from "../../../Utilities/api";


const getRandomContacts = async (props) =>{
    const responseFromApi = await getRandomUsers();
    console.log(responseFromApi);
    return props.handleAddRandomContact({
        name:responseFromApi.data.first_name + " " + responseFromApi.data.last_name,
        email:responseFromApi.data.email,
        phone:responseFromApi.data.phone_number
    });
}

const AddRandomContact = (props) =>{
    return (
        <div>
            <button onClick={()=> getRandomContacts(props)} className="btn btn-success form-control">Add Random Contact</button>
        </div>
    );
}

export default AddRandomContact;

// onClick={(props.handleAddRandomContact(props))=>}