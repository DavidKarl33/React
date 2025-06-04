export default function Friend({ name, status }) {
  const statusIcons = {
    online: "🟢",
    offline: "🔴",
    away: "🟡",
    unknown: "💤",
  };

  const icon = statusIcons[status];

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
      <span style={{ fontSize: "1.5em" }}>{icon}</span>
      <span>{name}</span>
    </div>
  );
}
