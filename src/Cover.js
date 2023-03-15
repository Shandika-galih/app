import React from "react";
import "./index.css";
import "./App.css";
import { useHistory } from "react-router-dom";

function Cover() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/newpage");
  };

  return (
    <div>
      <div className="cover-page">
        <div className="cover-page__content">
          <h1 className="cover-page__title">Simple</h1>
          <h1 className="cover-page__title">Quicks</h1>
          <button class="btn btn-outline-warning" onClick={handleButtonClick}>
            Go More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cover;
