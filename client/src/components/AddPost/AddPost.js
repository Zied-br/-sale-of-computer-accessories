import React, { useState } from "react";
import { addPost, getPost } from "../../redux/actions/postActions";
import "./addPost.css";
import { useDispatch } from "react-redux";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [postPicture, setPostPicture] = useState(null);
  const [accessory, setAccessory] = useState("select-accessory");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [accessoryError, setAccessoryError] = useState(false);

  const handlePost = () => {
    let error = false;

    if (!title) {
      setTitleError(true);
      error = true;
    }

    if (!description) {
      setDescriptionError(true);
      error = true;
    }

    if (!file) {
      setFileError(true);
      error = true;
    }

    if (accessory === "select-accessory") {
      setAccessoryError(true);
      error = true;
    }

    if (!error) {
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      data.append("accessory", accessory);
      data.append("file", file);

      dispatch(addPost(data)).then(() => {
        dispatch(getPost());
        cancelPost();
      });
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const cancelPost = () => {
    setTitle("");
    setDescription("");
    setPostPicture(null);
    setFile(null);
    setAccessory("select-accessory");
    setTitleError(false);
    setDescriptionError(false);
    setFileError(false);
    setAccessoryError(false);
  };

  return (
    <div className="AddPost">
      <img
        name="newImage"
        width="50px"
        src="https://static.vecteezy.com/system/resources/previews/005/218/431/non_2x/q-initial-letter-monogram-esport-and-gaming-logo-template-free-vector.jpg"
        alt="myImg"
      />
      <input
        type="file"
        name="file"
        id="file-upload"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={(e) => handlePicture(e)}
        required
      />
      {fileError && <p className="error-message">Please select a file.</p>}
      <input
        name="title"
        type="text"
        placeholder="Title"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      {titleError && <p className="error-message">Please enter a title.</p>}
      <textarea
        name="description"
        type="text"
        placeholder="Description"
        autoFocus
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      />
      {descriptionError && (
        <p className="error-message">Please enter a description.</p>
      )}
      <select
        id="accessories"
        value={accessory}
        onChange={(e) => setAccessory(e.target.value)}
        required
      >
        <option value="select-accessory"disabled>Select Accessory</option>
<option value="keyboard">Keyboard</option>
<option value="mouse">Mouse</option>
<option value="external-drive">External Drive</option>
<option value="laptop-stand">Laptop Stand</option>
<option value="headphones">Headphones</option>
<option value="usb-hub">USB Hub</option>
</select>
{accessoryError && (
<p className="error-message">Please select an accessory.</p>
)}
<button className="btn" onClick={handlePost}>
add new post
</button>
</div>
);
};

export default AddPost;
