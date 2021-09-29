import React, { useState } from "react";
import "./_categoriesbar.scss";

const keywords = [
  "All",
  "JavaScript",
  "Computer Programming",
  "Crypto",
  "Football",
  "Marty Shwartz",
  "Hip Hop",
  "Gym",
  "Guitar",
  "Podcast",
  "React JS",
  "Psychology",
];
const CategoriesBar = () => {
  const [active, setActive] = useState("All");
  return (
    <div className="categoriesbar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => setActive(value)}
          className={active === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
