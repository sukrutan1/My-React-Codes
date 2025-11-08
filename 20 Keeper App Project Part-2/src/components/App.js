import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((entries) => (
        <Note title={entries.title} content={entries.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
