export default function Post({ post }) {
  return (
    <div
      style={{
        background: "#f0f0f0",
        color: "#333",
        padding: "20px",
        marginBottom: "10px",
        borderRadius: "5px",
        display: "flex",
        gap: "15px",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "black",
          flexShrink: 0,
          marginTop: "4px",
        }}
      ></div>

      <div style={{ flex: 1 }}>
        <div style={{ marginBottom: "6px",display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: "10px",
            marginTop: "4px", }}>
          <strong>{post.name}</strong> 
        </div>

        <div style={{ fontSize: "12px", color: "#555", marginBottom: "15px",display: "flex",justifyContent: "flex-start",marginTop:"-10px" }}>
          {post.timestamp}
        </div>

        <div style={{ marginBottom: "12px" }}>{post.text}</div>

        <div
          style={{
            display: "flex",
            gap: "15px",
            fontSize: "1.3em",
            cursor: "pointer",
            justifyContent: "flex-end",
          }}
        >
          <span>
            ❤️
          </span>
          <span>
            👍
          </span>
          <span>
            👎
          </span>
        </div>
      </div>
    </div>
  );
}
