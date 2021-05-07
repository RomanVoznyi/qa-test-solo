import AuthForm from '../components/AuthForm/AuthForm';

const AuthView = () => {
  return (
    <section className="section auth">
      <div className="auth-box">
        <h1 className="auth-title">Pro Test</h1>
        <p className="auth-desription">
          <strong>[</strong> We will help you find weak points in knowledge so
          that you can strengthen it. We will show you what is relevant to know
          for a <strong>QA Engineer</strong> and will try to make the learning
          process more diverse_ <strong>]</strong>
        </p>
      </div>
      <AuthForm />
    </section>
  );
};

export default AuthView;
