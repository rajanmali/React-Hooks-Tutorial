import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setName((prevName) => ({ ...prevName, [name]: value }));
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="First Name..."
          name="firstName"
          value={name.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name..."
          name="lastName"
          value={name.lastName}
          onChange={handleInputChange}
        />
      </form>
      <h4>Your name is: {`${name.firstName} ${name.lastName}`}</h4>
    </>
  );
};

export default UseStateObject;
