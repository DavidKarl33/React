function RegistrationForm() {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <label>Name:<input type="text" required /></label>
        <label>Email:<input type="email" required /></label>
        <label>Username:<input type="text" required /></label>
        <label>Password:<input type="password" required /></label>
        <label>Address:<input type="text" required /></label>
        <label>Contacts:<input type="tel" required /></label>
        <button className="register-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
