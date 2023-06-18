import { useState } from "react";

export const BasicForm = () => {
    const [firstName, setfirstName] = useState<string>('')
    return (
      <form>
          <label htmlFor="firstname">First name: </label>
          <input 
          type="text" 
          name="firstname" 
          required 
          value = {firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if(/^[A-Za-z]*$/.test(event.target.value))
            {
              setfirstName(event.target.value)
            }
          }} />
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
    );
  }