const LoginForm = ({ email, setEmail, password, setPassword }) => {
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <p className="form-options">
        Or login to our app using e-mail and password:
      </p>
      <div className="input-list">
        <label className="input-box">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="auth-input"
            placeholder=" "
            autoComplete="off"
            required
          />
          <span className="auth-label">Email</span>
        </label>
        <label className="input-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="auth-input"
            minLength={8}
            placeholder=" "
            autoComplete="off"
            required
          />
          <span className="auth-label">Password</span>
        </label>
      </div>
    </>
  );
};

export default LoginForm;
