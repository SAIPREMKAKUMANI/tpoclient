import React, { useState, useEffect, useContext } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import "./Home.css";

const categories = [
  "Intern",
  "Placement",
  "Fest",
  "Notice",
  "Guidance",
  "Others",
];
function Home() {
  const { currentUser } = useContext(UserContext);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryNotes, setCategoryNotes] = useState([]);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/getNotices/${selectedCategory}`
        );
        console.log("fetch notes : ", res.data.success);
        if (res.data.success) {
          console.log(res.data.notices);
          setCategoryNotes(res.data.notices);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (selectedCategory) {
      fetchNotes();
    }
  }, [selectedCategory, categoryNotes]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    console.log(selectedCategory);
  };

  async function deleteNote(idx) {
    try {
      console.log("Delete" + idx);
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/tpo/deleteNotices/${idx}`
      );
      const updatedNotes = categoryNotes.filter(
        (note, index) => note.id !== idx
      );
      setCategoryNotes(updatedNotes);
      if (res.data.success) {
        console.log(res.data);
      } else {
        console.log(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="Home">
        <CreateArea fOs={currentUser?.faculty} />
        <div className="categories-container">
          <div className="categories-root">Categories</div>

          <div className="categories-tree">
            {categories.map((category, index) => (
              <div className="categories">
                <div key={index} className="category-branch">
                  <div
                    className="category-item"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="notes-container">
          {Array.from(categoryNotes, (note) => (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              content={note.content}
              onDelete={deleteNote}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;

// {notes.map((noteItem, index) => {
//   return (
//     <Note
//       key={index}
//       id={noteItem.id}
//       title={noteItem.title}
//       content={noteItem.content}
//       onDelete={deleteNote}
//     />
//   );
// })}
