import { Button } from "../Button";

export const EnterLayout = () => {
  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Welcome to Magenta tiger Blog</h1>
        <h3>Built off hard work</h3>
      </div>
      <div className="BtnContainer">
        <Button variant="primary" label="Continue with Github" />
      </div>
      <div className="text">
        Have a password? Continue with your email address
      </div>
      <form action="submit">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password </label>
        <input type="password" name="password" id="password" />
      </form>
    </div>
  );
};
