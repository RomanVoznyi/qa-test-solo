const RegisterForm = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setName(value);
    }
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
        Or register to our app using name, e-mail and password:
      </p>
      <div className="input-list">
        <label className="input-box">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="auth-input"
            placeholder=" "
            autoComplete="off"
            required
          />
          <span className="auth-label">Name</span>
        </label>
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

export default RegisterForm;
