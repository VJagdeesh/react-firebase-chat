import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./Chat.css";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
  };

  useEffect(() => {
    endRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Joe</span>
            <p>Can't talk. Whatsapp only!!!</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Some stupid texts</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Some stupid texts</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Some stupid texts</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <p>Some stupid texts</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Some stupid texts</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Write a message...."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
}

export default Chat;
