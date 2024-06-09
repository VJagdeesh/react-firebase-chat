import React from "react";
import "./Detail.css";

function Detail() {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Joe</h2>
        <p>Can't talk. Whatsapp only!!!</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <span>photo_20204.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
      </div>
      <button>Block User</button>
      <button className="logout">Logout</button>
    </div>
  );
}

export default Detail;
