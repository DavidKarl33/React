import "./App.css";
import React, { useRef } from "react";
import Post from "./Post.jsx";

function App() {
  const posts = [
    {name:"D", text: "Welcome to the feed! Share your thoughts.", timestamp: "6/4/2025 10:00 AM" },
    {name:"Monkee", text: "Hallo there! What's on your mind?", timestamp: "6/4/2025 9:00 AM" },
  ];

  const inputRef = useRef(null);

  const handlePost = () => {
    if (inputRef.current && inputRef.current.value.trim() !== "") {
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h3 style={{display:"flex",justifyContent:"flex-start"}}>Ey, what's on your mind?</h3>
     

      <input
        ref={inputRef}
        type="text"
        style={{
          width: "100%",
          padding: "20px",
          fontSize: "1em",
          boxSizing: "border-box",
          borderRadius: "10px",
          border: "1px solid #ccc",
          height: "80px",
          outline: "none",
          marginBottom: "10px",
        }}
        placeholder="What's on your mind?"
      />

      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "20px" }}>
        <button
          onClick={handlePost}
          style={{
            padding: "10px 20px",
            fontSize: "1em",
            cursor: "pointer",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          Post
        </button>
      </div>

      <div>
        <h3>Posts</h3>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
