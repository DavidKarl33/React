import Profile from "./Profile";

function App() {
  const user = {
    name: "David d",
    email: "devedev@example.com",
    address: "123 Street Xyz, City, Ph",
    phone: "555-555-6666",
    image: " " 
  };

  return (
    <div>
      <h1>User Profile</h1>
        <Profile 
          name={user.name}
        email={user.email}
        address={user.address}
        phone={user.phone}
        image={user.image}
      />
    </div>
  );
}

export default App;
