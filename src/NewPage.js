import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useHistory } from "react-router-dom";
function NewPage() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push("/");
  };
  return (
    <div>
      <Header />
      <div class="NewPage">
        <center>
          <button class="btn btn-outline-warning" onClick={handleButtonClick}>
            Go Back
          </button>
        </center>
      </div>
      <Footer />
    </div>
  );
}

export default NewPage;
