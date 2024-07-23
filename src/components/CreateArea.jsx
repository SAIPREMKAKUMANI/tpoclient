import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";
import axios from "axios";
import "./CreateArea.css";

function CreateArea(props) {
  const expanded = true;
  const [note, setNote] = useState({
    category: "",
    title: "",
    content: "",
    id: "",
  });
  const fac = props.fOs;

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  async function submitNote(event) {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/addNotices`,
        {
          title: note.title,
          content: note.content,
          category: note.category,
        }
      );

      if (!res.data.success) {
        toast.error(res.data.message);
      } else {
        toast.success("Notice added successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error in creating notices");
    }

    setNote({
      title: "",
      content: "",
      category: "",
      id: "",
    });
  }

  return (
    <div className="create-area-container">
      {fac && (
        <form className="create-note expanded" onSubmit={submitNote}>
          {expanded && (
            <select
              name="category"
              value={note.category}
              onChange={handleChange}
              required
              aria-label="Select Category"
            >
              <option value="">Select Category</option>
              <option value="Intern">Intern</option>
              <option value="Placement">Placement</option>
              <option value="Fest">Fest</option>
              <option value="Notice">Notice</option>
              <option value="Guidance">Guidance</option>
              <option value="Others">Others</option>
            </select>
          )}
          {expanded && (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Topic"
              aria-label="Topic"
            />
          )}
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder={
              expanded ? "Add Notification" : "Click to add a new notification"
            }
            rows={expanded ? 3 : 1}
            aria-label="Notification Content"
          />
          <Fab
            className="submit-button"
            color="primary"
            aria-label="add"
            onClick={submitNote}
          >
            <AddIcon />
          </Fab>
        </form>
      )}
    </div>
  );
}

export default CreateArea;
