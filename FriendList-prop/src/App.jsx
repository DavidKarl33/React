import FriendList from './component/FriendList'

function App() {
  const friends = [
    { name: "Luffy", status: "online" },
    { name: "Zoro", status: "online" },
    { name: "Sanji", status: "offline" },
    { name: "Nami", status: "away" },
    { name: "Robin", status: "unknown" },
    { name: "Chopper", status: "unknown" },
  ];

  return (
    <div style={{ maxWidth: 200, margin: "auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Friend List</h2>
      <FriendList friends={friends} />
    </div>
  );
}

export default App;