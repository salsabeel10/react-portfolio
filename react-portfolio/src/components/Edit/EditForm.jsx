// EditForm.jsx
import { useState } from "react";
import "./EditForm.css";

const EditForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    cv: null,
    about: "",
    projectTitle: "",
    github: "",
    live: ""
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="profile-pic-container">
          <img src="/default-profile.png" alt="Profile" className="profile-pic" />
        </div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input type="file" name="cv" onChange={handleChange} accept=".pdf,.doc,.docx" />
        <textarea
          name="about"
          placeholder="About You"
          value={formData.about}
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="projectTitle"
          placeholder="Project Title"
          value={formData.projectTitle}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="github"
          placeholder="GitHub Link"
          value={formData.github}
          onChange={handleChange}
        />
        <input
          type="url"
          name="live"
          placeholder="Live Link"
          value={formData.live}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditForm;
