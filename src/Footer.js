import React, { useState } from "react";
import BsPlus from "./img/flash.png";
import BsEnvelope from "./img/inbox.png";
import BsBell from "./img/task.png";
import "./App.css";

function Footer() {
  const [showIcons, setShowIcons] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  function toggleIcons() {
    setShowIcons(!showIcons);
    const subIcons = document.querySelectorAll(".sub-icon");
    subIcons.forEach((icon) => {
      if (!showIcons) {
        icon.classList.add("show");
      } else {
        icon.classList.remove("show");
      }
    });
  }

  function toggleCommentBox() {
    setShowCommentBox(!showCommentBox);
  }

  return (
    <div className="cover-page2">
      <footer className="footer">
        <div className="icon-container">
          <button className="main-icon" onClick={toggleIcons}>
            <img src={BsPlus} alt="Message" />
          </button>
          <a className="sub-icon" onClick={toggleCommentBox}>
            <img src={BsEnvelope} alt="Message" />
          </a>
          <a className="sub-icon">
            <img src={BsBell} alt="Message" />
          </a>
        </div>
        {showCommentBox && (
          <div className="comment-box">
            <h3>INBOX</h3>
            <form>
              <textarea placeholder="Tulis Pesan"></textarea>
              <button type="submit">Kirim</button>
            </form>
          </div>
        )}
      </footer>
    </div>
  );
}

export default Footer;
