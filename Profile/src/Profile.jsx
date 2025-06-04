export default function Profile({ name, email, address, phone, image }) {
  return (

    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        padding: 20,
        borderRadius: 8,
        width: "100%",
        gap: 20
      }}
    >
      <img
        src={image}
        alt={'None'}
        style={{
          width: 250,
          height: 250,
          objectFit: "cover",
          borderRadius: "50%",
          border: "2px solid #ccc"
        }}
      />
      <div style={{ flex: 1 }}>
        <h2>{name}</h2>
        <p>Email: {email}</p>
        <p>Address: {address}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}
