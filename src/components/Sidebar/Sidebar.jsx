import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  //this is for menu functionality--when we click on this
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" />
              {/* <p>What is react?....</p> */}
            </div>
          </div>
        ) : null}
      </div>
      
      <div className="bottom">
        <div className="bootom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>

        <div className="bootom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>

        <div className="bootom-item recent-entry">
          <img src={assets.send_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
