import { useState } from "react";

interface IStartingApp {
  topic: string;
}

export const BasicForm = ({ topic }: IStartingApp) => {
  const [firstname, setFirstname] = useState<string>("");

  return (
    <>
      <h2>{topic}</h2>
      <form>
        <label htmlFor="firstname">First name: {firstname}</label>
        <input
          type="text"
          name="firstname"
          required
          value={firstname}
          onChange={(prop) => {
            if (/^[A-Za-z]*$/.test(prop.target.value)) {
              setFirstname(prop.target.value);
            }
          }}
        />
        <br />
        <label htmlFor="lastname">Last name: </label>
        <input type="text" name="lastname" required />
        <br />
        <label htmlFor="email">email: </label>
        <input type="email" name="email" required />
        <br />
        <label htmlFor="password">password: </label>
        <input type="password" name="password" required />
        <br />
        <input type="submit" value="Login!" />
      </form>
    </>
  );
};
