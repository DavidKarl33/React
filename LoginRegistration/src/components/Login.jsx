function LoginForm() {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          Password:
          <input type="password" required />
        </label>
        <button className="login-button" type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
