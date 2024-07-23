import React from "react";
import { Container } from "react-bootstrap";
import { Modal } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./Training.css";
import { FaYoutube } from "react-icons/fa6";

function Training() {
  const [dsa, setDsa] = useState(false);
  const [wdv, setWdv] = useState(false);
  const [adv, setAdv] = useState(false);
  const [ml, setMl] = useState(false);
  const [ds, setDs] = useState(false);
  return (
    <>
      <div className="training">
        <div className="whyus-container">
          <h1>Are You Looking How To Build Your Career?</h1>
          <p>---Let's look some guided path</p>
        </div>
        <div className="whyus-container">
          <h1>A Best Choice is to become a Software Developer</h1>
          <p className="read-more">
            Software development is the process of designing, creating, testing,
            and maintaining different software applications. It involves the
            application of various principles and techniques from computer
            science, engineering and mathematical analysis......
            <a
              style={{ textDecoration: "none" }}
              href="https://www.simplilearn.com/tutorials/programming-tutorial/what-is-software-development"
            >
              Read More
            </a>
          </p>
          <p>
            The main skill required to expert in the field is DSA.
            <br />
            DSA stands for Data Structures And Algorithms
            <br />
            Correspondingly it is a best way to enhance our skill towards some
            development skills. To know more about these
            <a
              style={{ textDecoration: "none" }}
              href="https://medium.com/javarevisited/11-essential-skills-to-become-software-developer-in-2020-c617e293e90e"
            >
              {" "}
              Click Here
            </a>
            <br />A Piece Of Advise From Our Seniors is to master our skills in
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Machine Learning</li>
              <li>Data Science</li>
            </ul>
            The Above Mentioned Development are in demand skills.
          </p>
        </div>
        {/* <FlowChart /> */}
        <div className="whyus-container">
          <p>
            As Every One Have Some Query <b>How To Start DSA</b>
          </p>
          <p>Here Is RoadMap For DSA</p>
          {dsa === false && (
            <button className="youtube-button" onClick={() => setDsa(true)}>
              <FaYoutube />
            </button>
          )}
          <Modal
            open={dsa}
            onClose={() => setDsa(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container>
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 100,
                  height: 400,
                  width: 650,
                }}
              >
                <button className="modalButton" onClick={() => setDsa(false)}>
                  <CloseIcon />
                </button>
                <div className="video-container whyus-container">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/hORRaq7CNw0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </Modal>
          <br />
          <br />
          Common Mistake Of Students is Follwing Multiple Practice Sheets Or Not
          Following Any Sheet.
          <br />
          To Master Data Structure And Algorithms One Should Maintain A Right
          Path and Strong Basics.
          <br />
          First Step is to know about basics of all concepts.
          <br />
          To keep with your basics follow Classes thoroughly or Any Prominent
          Youtube Channel (Neso Academy).
          <br />
          <p>
            Follow A Sheet Thoroughly.
            <ul>
              <li>Striver Sheet- A2Z Sheet</li>
              <li>Love Babber Sheet</li>
              <li>Fraz Sheet</li>
            </ul>
            These Sheets Are Available On Internet.You Can Browse Them On
            Google.
          </p>
          <p>
            To Make Your Preparation Thorough Give Some Contests (When You Think
            You Are Ready).
            <br />
            <ul>
              <li>Leet Code Weekly Contests</li>
              <li>GFG Weekly Contests</li>
            </ul>
          </p>
          <p>
            It is Better To Do Competitive Coding Parallelly.
            <br />
            It Make Your Aptitude Skills Strong.
            <br />
            The Best Platforms Are.
            <ul>
              <li>CodeForces</li>
              <li>CodeChef</li>
            </ul>
            CodeChef -- These Are Mainly Mathematical.
            <br />
            CodeForces -- Both Mathematical combined with DSA.
            <br />
            Better To Start With CodeForces.
          </p>
        </div>
        <div className="whyus-container">
          <p>
            As Every One Have Some Query <b>How To Start Web Development?</b>
          </p>
          <p>Here is RoadMap for Web Development</p>
          {wdv === false && (
            <button className="youtube-button" onClick={() => setWdv(true)}>
              <FaYoutube />
            </button>
          )}
          <Modal
            open={wdv}
            onClose={() => setWdv(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container>
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 100,
                  height: 400,
                  width: 650,
                }}
              >
                <button className="modalButton" onClick={() => setWdv(false)}>
                  <CloseIcon />
                </button>
                <div className="video-container whyus-container">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/MkcfB7S4fq0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </Modal>
          <br />
          Here Are Some Expert Guidelines.
          <br />
          As A Beginner All We Have Some Doubts
          <p>
            How can I start learning web development? Is it easy? And how can I
            keep up with the latest web designing technologies? These are the
            questions that appear in every beginner’s mind. There is also
            confusion between web designing and web development, but we’ll talk
            about web development...
            <a
              style={{ textDecoration: "none" }}
              href="https:geeksforgeeks.org/can-start-learn-web-development/"
            >
              {" "}
              ReadMore
            </a>
          </p>
          <p>
            <b>Are You Confused To Study From Which Platform?</b>
            <br />
            I will suggest some online learning platforms.These are genuine and
            most people loved it. There Are Some Free Platforms And Paid Ones.
            <br />
            <b>Free Platforms.</b>
            <br />
            Most Of The Free Platforms Are Available On Youtube. According to
            some our institute graduates,Please don't prefer NPTEL course. If
            you want just certificate then Prefer it,but not else.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@CodeWithHarry"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Code With Harry
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@ApnaCollegeOfficial"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Apna College
                </a>
              </li>
            </ul>
            <b>Paid Platforms</b>
            <br />
            As We Know The Paid Platforms Are Usually Good. But We Should Choose
            Best Courses To nail WEB DEV in a best way.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>Udemy Course --Dr. Angela Yu</li>
              <li>Coursera</li>
              <li>Coding Ninjas</li>
              <li>Edureka</li>
            </ul>
            Finally do a clean project,to nail the interview.
          </p>
        </div>
        <div className="whyus-container">
          <p>
            As Every One Have Some Query <b>How To Start App Development?</b>
          </p>
          <p>Here is ROAD MAP for App Development</p>
          {adv === false && (
            <button className="youtube-button" onClick={() => setAdv(true)}>
              <FaYoutube />
            </button>
          )}
          <Modal
            open={adv}
            onClose={() => setAdv(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container>
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 100,
                  height: 400,
                  width: 650,
                }}
              >
                <button className="modalButton" onClick={() => setAdv(false)}>
                  <CloseIcon />
                </button>
                <div className="video-container whyus-container">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/M-jKKLK40hU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </Modal>
          <br />
          Here Are Some Expert Guidelines.
          <br />
          As A Beginner All We Have Some Doubts
          <p>
            There are a few things that you need to do to become a mobile app
            developer....
            <a
              href="https://www.simplilearn.com/building-career-in-mobile-app-development-article"
              style={{ textDecoration: "none" }}
            >
              To Explore This Click Here
            </a>
          </p>
          <p>
            <b>Are You Confused To Know Where To Learn This Technology?</b>
            <br />
            I will suggest some online learning platforms.These are genuine and
            most people loved it. There Are Some Free Platforms And Paid Ones.
            <br />
            <b>Free Platforms.</b>
            <br />
            Most Of The Free Platforms Are Available On Youtube. According to
            some our institute graduates,Please don't prefer NPTEL course. If
            you want just certificate then Prefer it,but not else.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@CodeWithHarry"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Code With Harry
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@wscubetech"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  WS Cube Tech
                </a>
              </li>
            </ul>
            <b>Paid Platforms</b>
            <br />
            As We Know The Paid Platforms Are Usually Good. But We Should Choose
            Best Courses To nail APP DEV in a best way.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>Udemy Course</li>
              <li>Coursera</li>
              <li>Coding Ninjas</li>
              <li>Edureka</li>
            </ul>
            As Always Practice Makes Man Perfect. Do an free/paid internship for
            a good experience.
            <br />
            Finally do a clean project,to nail the interview.
          </p>
        </div>
        <div className="whyus-container">
          <p>
            As Every One Have Some Query <b>How To Start Machine Learning?</b>
          </p>
          <p>Here is RoadMap for Machine Learning</p>
          {ml === false && (
            <button className="youtube-button" onClick={() => setMl(true)}>
              <FaYoutube />
            </button>
          )}
          <Modal
            open={ml}
            onClose={() => setMl(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container>
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 100,
                  height: 400,
                  width: 650,
                }}
              >
                <button className="modalButton" onClick={() => setMl(false)}>
                  <CloseIcon />
                </button>
                <div className="video-container whyus-container">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/M-jKKLK40hU"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </Modal>
          <br />
          Here Are Some Expert Guidelines.
          <br />
          As A Beginner All We Have Some Doubts
          <br />
          <a
            href="https://www.geeksforgeeks.org/how-to-start-learning-machine-learning/"
            style={{ textDecoration: "none" }}
          >
            Click Here To Know About This
          </a>
          <p>
            <b>Are You Confused To Know Where To Learn This Technology?</b>
            <br />
            I will suggest some online learning platforms.These are genuine and
            most people loved it. There Are Some Free Platforms And Paid Ones.
            <br />
            <b>Free Platforms.</b>
            <br />
            Most Of The Free Platforms Are Available On Youtube. According to
            some our institute graduates,Please don't prefer NPTEL course. If
            you want just certificate then Prefer it,but not else.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>
                <a
                  href="https://explore.skillbuilder.aws/learn/public/learning_plan/view/28/machine-learning-learning-plan?la=cta&cta=topbanner"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  AWS{" "}
                </a>
                ----Amazon Web Services Providing Free Machine Learning
                Course,Enrol To View Content
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@wscubetech"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  WS Cube Tech
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=N5fSpaaxoZc&pp=ygUcbWFjaGluZSBsZWFybmluZyBmdWxsIGNvdXJzZQ%3D%3D"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Edureka
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@SimplilearnOfficial"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Simplilearn
                </a>
              </li>
            </ul>
            <b>Paid Platforms</b>
            <br />
            As We Know The Paid Platforms Are Usually Good. But We Should Choose
            Best Courses To nail APP DEV in a best way.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>Udemy Course</li>
              <li>Coursera</li>
              <li>Coding Ninjas</li>
            </ul>
            Finally do a clean project,to nail the interview.
          </p>
        </div>
        <div className="whyus-container">
          <p>
            As Every One Have Some Query <b>How To Start Data Science?</b>
          </p>
          <p>Here is RoadMap for Data Science</p>
          {ds === false && (
            <button className="youtube-button" onClick={() => setDs(true)}>
              <FaYoutube />
            </button>
          )}
          <Modal
            open={ds}
            onClose={() => setDs(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Container>
              <div
                style={{
                  marginLeft: 200,
                  marginTop: 100,
                  height: 400,
                  width: 650,
                }}
              >
                <button className="modalButton" onClick={() => setDs(false)}>
                  <CloseIcon />
                </button>
                <div className="video-container whyus-container">
                  <iframe
                    className="responsive-iframe"
                    src="https://www.youtube.com/embed/jtn-hRJjl68"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </Container>
          </Modal>
          <br />
          Here Are Some Expert Guidelines.
          <br />
          As A Beginner All We Have Some Doubts
          <br />
          <p>
            Data Science, which is also known as the sexiest job of the century,
            has become a dream job for many of us. But for some....
            <a
              href="https://towardsdatascience.com/data-science-from-scratch-4343d63c1c66"
              style={{ textDecoration: "none" }}
            >
              Click Here To Know About This
            </a>
          </p>
          <p>
            <b>Are You Confused To Know Where To Learn This Technology?</b>
            <br />
            I will suggest some online learning platforms.These are genuine and
            most people loved it. There Are Some Free Platforms And Paid Ones.
            <br />
            <b>Free Platforms.</b>
            <br />
            Most Of The Free Platforms Are Available On Youtube. According to
            some our institute graduates,Please don't prefer NPTEL course. If
            you want just certificate then Prefer it,but not else.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>
                <a
                  href="https://www.youtube.com/@codebasics"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Code Basics{" "}
                </a>
                ----Amazon Web Services Providing Free Machine Learning
                Course,Enrol To View Content
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=N5fSpaaxoZc&pp=ygUcbWFjaGluZSBsZWFybmluZyBmdWxsIGNvdXJzZQ%3D%3D"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Edureka
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@SimplilearnOfficial"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Simplilearn
                </a>
              </li>
            </ul>
            <b>Paid Platforms</b>
            <br />
            As We Know The Paid Platforms Are Usually Good. But We Should Choose
            Best Courses To nail APP DEV in a best way.
            <br />
            The Below Mentioned Courses Are Based On Our Seniors Experience.
            <ul>
              <li>Udemy Course</li>
              <li>Coursera</li>
              <li>Coding Ninjas</li>
            </ul>
            Finally do a clean project,to nail the interview.
          </p>
        </div>
      </div>
    </>
  );
}

export default Training;
