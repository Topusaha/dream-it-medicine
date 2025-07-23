import React from "react";
import "../App.css";


interface MainBodyProps {
  background: string;
  title: string;
  caption: string;
}

const MainBody: React.FC<MainBodyProps> = ({ background, title, caption }) => {
    return (
      <div className="main-body-container">
      <section
        className="main-body"
        style={{ backgroundImage: `url(${background})` }}
      >
        <h1 className="main-body__title">{title}</h1>
        <p className="main-body__caption">{caption}</p>
      </section>
      </div>
    );

  };
  

export default MainBody; 