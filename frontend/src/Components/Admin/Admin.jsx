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

  const [testData, setTestData] = useState({ test: "" });

  useEffect(() => {
    // console.log(formData);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (name === "title") {
      const idValue = value.replace(/\s+/g, "-").toLowerCase();
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        id: idValue,
      }));
    } else if (type === "file") {
      if (name === "cover") {
        setFormData((prevData) => ({
          ...prevData,
          images: {
            ...prevData.images,
            cover: files[0],
          },
        }));
      }
      if (name === "other") {
        const newOtherImages = [...formData.images.other, ...files];
        setFormData((prevData) => ({
          ...prevData,
          images: {
            ...prevData.images,
            other: newOtherImages,
          },
        }));
      }
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
  // TESTER ///

  const testChange = (e) => {
    const { value, name } = e.target;
    setTestData({ [name]: value });
  };

  const testSubmit = (e) => {
    e.preventDefault();
    console.log("testSubmit", testData);
  };
  return (
    <div>
      <div>
        <p>test</p>
        <form onSubmit={testSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="test"
              value={testData.test}
              onChange={testChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
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
          Cover Image:
          <input type="file" name="cover" onChange={handleChange} />
        </label>
        <br />
        <label>
          Other Images:
          <input type="file" name="other" multiple onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Admin;
