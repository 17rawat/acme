"use client";

import { useState } from "react";

const EditableField = ({ label, field, value, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (field === "password") {
      if (newPassword !== confirmPassword) {
        alert("New password and confirm password do not match");
        return;
      }

      onSave(field, oldPassword, newPassword);
      // setOldPassword("");
      // setNewPassword("");
      // setConfirmPassword("");
    } else {
      onSave(field, value, editedValue);
      // setEditedValue("");
    }
    setIsEditing(false);
  };

  // console.log(editedValue);

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      <label className="text-gray-600">{label}</label>
      {isEditing ? (
        <form onSubmit={handleSave} className="flex mt-1">
          {field === "password" ? (
            <>
              <input
                type="password"
                placeholder="Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="border rounded px-2 mr-2 py-1 w-full"
                required
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="border rounded px-2 mr-2 py-1 w-full"
                required
              />

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border rounded px-2 py-1 w-full"
                required
              />
            </>
          ) : (
            <input
              type="text"
              placeholder="Enter New Value"
              value={editedValue}
              onChange={(e) => setEditedValue(e.target.value)}
              className="border rounded px-2 py-1 w-full"
              required
            />
          )}
          <button
            type="submit"
            className="ml-2 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Cancel
          </button>
        </form>
      ) : (
        <div className="flex items-center">
          <p className="mr-2">{value}</p>
          <button
            onClick={() => setIsEditing(true)}
            className="ml-auto px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default EditableField;
