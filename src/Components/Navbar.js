import React, { useState, useCallback } from "react";
import Modal from "react-modal";
import List from "./list";
import Route from "./route";

import "../styles.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [end, setEnd] = useState(false);
  const [seconds, setSeconds] = React.useState(10 * 60);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("00:00");
    }
  });
  return (
    <div class="navbar navbar-light bg-light">
      <div class="container">
        <ul className="header">
          <li>
            <ul className="sub">
              <li>
                {" "}
                <img
                  src="https://media-exp1.licdn.com/dms/image/C560BAQFlR7ET1VWQtw/company-logo_200_200/0/1614841176944?e=2159024400&v=beta&t=Uj9_9B-R771_5HgdWtwXpoE9mA49jgCwuTHXhh35CFU"
                  alt=""
                  width="30"
                  height="30"
                />
              </li>
              <li>Trial Lesson [Grade 1-3]</li>
              <li>
                <Route />
              </li>
            </ul>
          </li>
          {/* <li>{end ?{seconds} seconds:"00:00"}</li> */}
          <li>{seconds} seconds</li>
          <li>
            <button type="button" onClick={openModal} className="btn">
              End Class
            </button>
          </li>
        </ul>
      </div>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h3>Select a reason to end class</h3>
        <List />
        <input
          className="btn btn-danger"
          type="button"
          value="End Class"
          onKeyPress="setEnd(true)"
          onClick={closeModal}
        />
        <input
          className="btn2 btn-light"
          type="button"
          value="Cancel"
          onClick={closeModal}
        />
      </Modal>
    </div>
  );
}
export default Navbar;
