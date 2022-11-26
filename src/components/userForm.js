import React from "react";
import { adduser, updateUser } from "../store/actionCreator";
import { useDispatch } from "react-redux";
function validation(nomComplete, email, phoneNumber) {
  return (
    /^[a-zA-Z\s]{3,100}$/.test(nomComplete) &&
    /^[\w.]+@[a-z]+\.[a-z]{3,10}$/.test(email) &&
    /^[+0][0-9]+$/.test(phoneNumber)
  );
}
function UserForm({ setUpdateClicked, id, nomComplete, email, phoneNumber }) {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    const nomComplete = event.target.nomComplete.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    if (validation(nomComplete, email, phoneNumber)) {
      const newUser = { id, nomComplete, email, phoneNumber };

      if (!id) {
        dispatch(adduser(newUser));
      } else {
        dispatch(updateUser(newUser));
        setUpdateClicked(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="w-50 mt-2 m-auto">
      <label> Nom complete :</label>
      <input
        type={"text"}
        name={"nomComplete"}
        className="form-control"
        defaultValue={nomComplete}
      />

      <label> Email : </label>

      <input
        type={"text"}
        name={"email"}
        className="form-control"
        defaultValue={email}
      />
      <label> Telephone : </label>

      <input
        type={"text"}
        name={"phoneNumber"}
        className="form-control"
        defaultValue={phoneNumber}
      />
      <button className="btn btn-primary mt-2 form-control">
        {!id ? "Ajouter" : "Update"}
      </button>
    </form>
  );
}

export default UserForm;
