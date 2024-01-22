import React from "react";

const Home = () => {
  return (
    <div
      id="homePage"
      style={{
        backgroundImage: "url('path/to/background-image.jpg')",
        backgroundPosition: "top right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>Left side content</p>
      <img src="path/to/image.jpg" alt="Right side content" />
    </div>
  );
};

export default Home;
