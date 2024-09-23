"use client";
import useTurnstileCaptcha from "./useTurnstileCaptcha";

const LoginForm = () => {
  const { content: captchaContent, resetWidget } = useTurnstileCaptcha();

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <form>
      <input type="text" name="username" />
      <input type="password" name="password" />
      {captchaContent}
      <button type="submit" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
