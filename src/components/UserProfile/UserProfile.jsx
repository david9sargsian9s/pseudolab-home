import { useState, useEffect } from "react";
import "./UserProfile.css";

export const UserProfile = ({ currentUser, onLogout, onUpdateUser, onDelete }) => {
  const [copiedType, setCopiedType] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: ""
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        password: currentUser.password
      });
    }
  }, [currentUser]);

  const handleSave = () => {
    onUpdateUser(formData);
    setIsEditing(false);
  };

  if (!currentUser) return null;

  const copy = (type, value) => {
    navigator.clipboard.writeText(value);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <section className="profile">
      <div className="profile-warning">
        Thanks for beta testing! Functionality is limited.
      </div>
      <div className="profile-card">
        <div className="profile-header">
          <span
            className="profile-id"
            onClick={() => copy("uuid", currentUser.id)}
          >
            ID: {currentUser.id}
          </span>
        </div>

        <div className="profile-info">
          {copiedType === "uuid" && (
            <div className="textcopymessage">
              UUID copied!
            </div>
          )}

          <div className="fLName">
            <h2 className="profile-row">
              <span>first name</span>
              {isEditing ? (
                <input
                  value={formData.firstName}
                  className="editingInputs"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              ) : (
                currentUser.firstName
              )}
            </h2>

            <h2 className="profile-row">
              <span>last name</span>
              {isEditing ? (
                <input
                  value={formData.lastName}
                  className="editingInputs"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              ) : (
                currentUser.lastName
              )}
            </h2>
          </div>

          <div
            className="profile-row"
            onClick={() => copy("email", currentUser.mail)}
          >
            <span>Email</span>
            <span>The email is linked to the account and does not change.</span>

            {copiedType === "email" && (
              <div className="textcopymessage">
                Email copied!
              </div>
            )}

            <p>{currentUser.mail}</p>
          </div>

          <div className="profile-row">
            <span>Password</span>
            {isEditing ? (
              <input
                value={formData.password}
                className="editingInputs"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            ) : (
              <p>{currentUser.password}</p>
            )}
          </div>
        </div>

        <div className="btns">
          {isEditing ? (
            <button className="profile-Edit" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="profile-Edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          )}

          <button className="profile-logout" onClick={onLogout}>
            Log out
          </button>
          <button className="profile-logout" onClick={onDelete}>
            delete account
          </button>
        </div>
      </div>
    </section>
  );
};
