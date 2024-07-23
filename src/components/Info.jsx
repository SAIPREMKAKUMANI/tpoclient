import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CreateIcon from "@mui/icons-material/Create"; // Import the Create icon
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import GenerateResumePDF from "./GenerateResumePDF";
import "./Info.css";

function Info() {
  const { currentUser, logoutUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [showResumeForm, setShowResumeForm] = useState(false);
  const [resumeData, setResumeData] = useState(null);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const handleCreateResume = () => {
    setShowResumeForm(true);
  };

  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem("projects");
    console.log("Projects - ", savedProjects);
    return savedProjects
      ? JSON.parse(savedProjects)
      : [{ name: "", description: "" }];
  });

  const [workExperiences, setWorkExperiences] = useState(() => {
    const savedWorkExperiences = localStorage.getItem("workExperiences");
    console.log("Work Experiences - ", savedWorkExperiences);
    return savedWorkExperiences
      ? JSON.parse(savedWorkExperiences)
      : [{ description: "" }];
  });

  const [achievements, setAchievements] = useState(() => {
    const savedAchievements = localStorage.getItem("achievements");
    console.log("Achievements - ", savedAchievements);
    return savedAchievements
      ? JSON.parse(savedAchievements)
      : [{ description: "" }];
  });

  const [links, setLinks] = useState(() => {
    const savedLinks = localStorage.getItem("links");
    console.log("Links - ", savedLinks);
    return savedLinks
      ? JSON.parse(savedLinks)
      : {
          linkedin: "",
          codechef: "",
          codeforces: "",
          geeksforgeeks: "",
        };
  });

  const [education, setEducation] = useState(() => {
    const savedEducation = localStorage.getItem("education") ?? null;
    console.log("Education - ", savedEducation);
    return savedEducation
      ? JSON.parse(savedEducation)
      : {
          class10: { school: "", board: "", year: "", percentage: "" },
          class12: { school: "", board: "", year: "", percentage: "" },
          engineering: { college: "", university: "", year: "", cgpa: "" },
        };
  });

  const addProject = () => {
    setProjects([...projects, { name: "", description: "" }]);
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { description: "" }]);
    localStorage.setItem("workExperiences", JSON.stringify(workExperiences));
  };

  const addAchievement = () => {
    setAchievements([...achievements, { description: "" }]);
    localStorage.setItem("achievements", JSON.stringify(achievements));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][field] = value;
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  const handleWorkExperienceChange = (index, value) => {
    const updatedWorkExperiences = [...workExperiences];
    updatedWorkExperiences[index].description = value;
    setWorkExperiences(updatedWorkExperiences);
    localStorage.setItem(
      "workExperiences",
      JSON.stringify(updatedWorkExperiences)
    );
  };

  const handleAchievementChange = (index, value) => {
    const updatedAchievements = [...achievements];
    updatedAchievements[index].description = value;
    setAchievements(updatedAchievements);
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements));
  };
  const handleLinkChange = (platform, value) => {
    setLinks({ ...links, [platform]: value });
    localStorage.setItem("links", JSON.stringify(links));
  };

  const deleteAchievement = (index) => {
    const updatedAchievements = achievements.filter((_, i) => i !== index);
    setAchievements(updatedAchievements);
    localStorage.setItem("achievements", JSON.stringify(updatedAchievements));
  };

  // Add this function to handle education changes
  const handleEducationChange = (level, field, value) => {
    setEducation((prevEducation) => ({
      ...prevEducation,
      [level]: {
        ...prevEducation[level],
        [field]: value,
      },
    }));
    localStorage.setItem("education", JSON.stringify(education));
  };

  const [showPDFModal, setShowPDFModal] = useState(false);
  const handleSubmitResume = (event) => {
    event.preventDefault();

    const resumeData = {
      name: currentUser?.name || "",
      email: currentUser?.email || "",
      education: education || {},
      achievements: achievements || [],
      workExperiences: workExperiences || [],
      projects: projects || [],
      links: links || {},
    };

    setResumeData(resumeData);
    setShowPDFModal(true);
    setShowResumeForm(false);
  };

  return (
    <>
      <div className="info-container">
        <div className="user-info">
          <AccountCircleIcon fontSize="large" />
          <h2>{currentUser?.name}</h2>
          <p>{currentUser?.email}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>

        <div className="resume-icon" onClick={handleCreateResume}>
          <CreateIcon fontSize="large" />
          <span>Create Resume</span>
        </div>
      </div>

      {showResumeForm && (
        <div className="resume-form-overlay">
          <div className="resume-form">
            <h2>Create Your Resume</h2>
            <button
              className="close-modal"
              style={{ color: "black" }}
              onClick={() => setShowResumeForm(false)}
            >
              ×
            </button>
            <div className="resume-form-content">
              <form onSubmit={handleSubmitResume}>
                <h3>
                  <SchoolIcon /> Education
                </h3>
                <div className="education-section">
                  <div className="education-item">
                    <h4>Class 10</h4>
                    <input
                      type="text"
                      placeholder="School Name"
                      value={education.class10.school}
                      onChange={(e) =>
                        handleEducationChange(
                          "class10",
                          "school",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="Board"
                      value={education.class10.board}
                      onChange={(e) =>
                        handleEducationChange(
                          "class10",
                          "board",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="number"
                      placeholder="Year of Passing"
                      value={education.class10.year}
                      onChange={(e) =>
                        handleEducationChange("class10", "year", e.target.value)
                      }
                      required
                    />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Percentage/CGPA"
                      value={education.class10.percentage}
                      onChange={(e) =>
                        handleEducationChange(
                          "class10",
                          "percentage",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="education-item">
                    <h4>Class 12</h4>
                    <input
                      type="text"
                      placeholder="School Name"
                      value={education.class12.school}
                      onChange={(e) =>
                        handleEducationChange(
                          "class12",
                          "school",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="Board"
                      value={education.class12.board}
                      onChange={(e) =>
                        handleEducationChange(
                          "class12",
                          "board",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="number"
                      placeholder="Year of Passing"
                      value={education.class12.year}
                      onChange={(e) =>
                        handleEducationChange("class12", "year", e.target.value)
                      }
                      required
                    />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="Percentage/CGPA"
                      value={education.class12.percentage}
                      onChange={(e) =>
                        handleEducationChange(
                          "class12",
                          "percentage",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                  <div className="education-item">
                    <h4>Engineering</h4>
                    <input
                      type="text"
                      placeholder="College Name"
                      value={education.engineering.college}
                      onChange={(e) =>
                        handleEducationChange(
                          "engineering",
                          "college",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="text"
                      placeholder="University"
                      value={education.engineering.university}
                      onChange={(e) =>
                        handleEducationChange(
                          "engineering",
                          "university",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="number"
                      placeholder="Year of Passing"
                      value={education.engineering.year}
                      onChange={(e) =>
                        handleEducationChange(
                          "engineering",
                          "year",
                          e.target.value
                        )
                      }
                      required
                    />
                    <input
                      type="number"
                      step="0.01"
                      placeholder="CGPA"
                      value={education.engineering.cgpa}
                      onChange={(e) =>
                        handleEducationChange(
                          "engineering",
                          "cgpa",
                          e.target.value
                        )
                      }
                      required
                    />
                  </div>
                </div>

                <h3>
                  <EmojiEventsIcon /> Achievements
                </h3>
                {achievements.map((achievement, index) => (
                  <div key={index} className="achievement-container">
                    <textarea
                      className="achievement"
                      placeholder="Achievement description"
                      value={achievement.description}
                      onChange={(e) =>
                        handleAchievementChange(index, e.target.value)
                      }
                      required
                    ></textarea>
                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => deleteAchievement(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addAchievement}
                  className="add-project-btn"
                >
                  <AddIcon /> Add Achievement
                </button>

                <h3>
                  <WorkIcon /> Work Experience
                </h3>
                {workExperiences.map((work, index) => (
                  <textarea
                    key={index}
                    placeholder="Work experience description"
                    value={work.description}
                    onChange={(e) =>
                      handleWorkExperienceChange(index, e.target.value)
                    }
                    className="work-experience"
                    required
                  ></textarea>
                ))}
                <button
                  type="button"
                  onClick={addWorkExperience}
                  className="add-project-btn"
                >
                  <AddIcon /> Add Work Experience
                </button>

                <h3>
                  <CodeIcon /> Projects
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="project-input">
                    <input
                      type="text"
                      placeholder="Project Name"
                      value={project.name}
                      onChange={(e) =>
                        handleProjectChange(index, "name", e.target.value)
                      }
                      required
                    />
                    <textarea
                      placeholder="Project Description"
                      value={project.description}
                      onChange={(e) =>
                        handleProjectChange(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                      required
                    ></textarea>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProject}
                  className="add-project-btn"
                >
                  <AddIcon /> Add Project
                </button>

                <h3>
                  <LinkIcon /> Links
                </h3>
                <div className="links-section">
                  <input
                    type="url"
                    placeholder="LinkedIn URL"
                    value={links.linkedin}
                    onChange={(e) =>
                      handleLinkChange("linkedin", e.target.value)
                    }
                  />
                  <input
                    type="url"
                    placeholder="CodeChef URL"
                    value={links.codechef}
                    onChange={(e) =>
                      handleLinkChange("codechef", e.target.value)
                    }
                  />
                  <input
                    type="url"
                    placeholder="Codeforces URL"
                    value={links.codeforces}
                    onChange={(e) =>
                      handleLinkChange("codeforces", e.target.value)
                    }
                  />
                  <input
                    type="url"
                    placeholder="GeeksforGeeks URL"
                    value={links.geeksforgeeks}
                    onChange={(e) =>
                      handleLinkChange("geeksforgeeks", e.target.value)
                    }
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Generate Resume
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {showPDFModal && (
        <div className="pdf-modal-overlay">
          <div className="pdf-modal">
            <button
              className="close-modal"
              onClick={() => setShowPDFModal(false)}
            >
              <span>&times;</span>
            </button>
            <div className="pdf-content">
              <GenerateResumePDF resumeData={resumeData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Info;
