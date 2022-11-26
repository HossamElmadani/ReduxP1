import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/actionCreator";
import UserForm from "./userForm";
function User(props) {
  const { id, nomComplete, email, phoneNumber } = props;
  const dispatch = useDispatch();
  const [updateClicked, setUpdateClicked] = useState(false);
  const Infos = (
    <>
      <div>Nom Complete: {nomComplete}</div>
      <div>Email: {email}</div>
      <div>Phone number: {phoneNumber}</div>
      <button
        className="btn btn-danger m-2"
        onClick={() => dispatch(deleteUser(id))}
      >
        Delete
      </button>
    </>
  );
  return (
    <div className="userInfo">
      {updateClicked ? (
        <UserForm setUpdateClicked={setUpdateClicked} {...props} />
      ) : (
        Infos
      )}
      <button
        className="btn btn-primary m-2"
        onClick={() => setUpdateClicked(!updateClicked)}
      >
        {updateClicked ? "return" : "update"}
      </button>
    </div>
  );
}

export default User;
