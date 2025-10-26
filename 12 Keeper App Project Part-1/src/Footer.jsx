import React from "react";

const currentYear = new Date().getFullYear();

function Message() {
  return (
    <footer>
      <p>Copyright {currentYear}</p>
    </footer>
  );
}

export default Message;
