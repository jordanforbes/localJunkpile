import React, { useState, useEffect } from "react";
// import fs  require("fs"); // Node.js file system module

const Admin = (props) => {
  const [formData, setFormData] = useState({
    pid: null,
    id: null,
    category: "app_project",
    title: null,
    caption: null,
    description: null,
    repo: null,
    url: null,
    technologies: [],
    images: {
      cover: null,
      other: [],
    },
  });

  useEffect(() => {
    console.log(formData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") {
      const idValue = value.replace(/\s+/g, "-").toLowerCase();
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        id: idValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("form data to sumbit", formData);
  };
  return (
    <div>
      <h1>Submit Form and Add to JSON</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Caption:
          <input
            type="text"
            name="caption"
            value={formData.caption}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Technologies:
          <input
            type="text"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Images:
          <input type="file" name="images" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
