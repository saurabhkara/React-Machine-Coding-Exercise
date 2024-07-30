import { useState } from "react";
import "./App.css";

const formArray = [
  {
    id: "name",
    name: "Name",
    placeholder: "Your name..",
    buttonText: "Next",
    buttonType: "text",
  },
  {
    id: "email",
    name: "Email",
    placeholder: "Your email..",
    buttonText: "Next",
    buttonType: "email",
  },
  {
    id: "dob",
    name: "DOB",
    placeholder: "",
    buttonText: "Next",
    buttonType: "date",
  },
  {
    id: "password",
    name: "Password",
    placeholder: "Password..",
    buttonText: "Submit",
    buttonType: "password",
  },
];

function App() {
  const [forms, setForms] = useState(formArray);
  const [index, setindex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });
  const [isSubmited, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (index === forms.length - 1) {
      setIsSubmitted(true);
    } else {
      setindex((indx) => indx + 1);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setindex((prev) => prev - 1);
  };

  const handleOnChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    const copyFormData = { ...formData };
    copyFormData[id] = value;
    setFormData(copyFormData);
  };

  return (
    <div className="app">
      {!isSubmited ? (
        <form action="container" onSubmit={handleSubmit}>
          {index !== 0 && (
            <a onClick={handleBack} href="/">
              back
            </a>
          )}
          <label>{forms[index].name}</label>
          <input
            placeholder={forms[index].placeholder}
            type={forms[index].buttonType}
            id={forms[index].id}
            onChange={handleOnChange}
            value={formData[forms[index].id]}
          />
          <button className="btn">{forms[index].buttonText}</button>
        </form>
      ) : (
        <div>
          <h1>Success</h1>
          <hr />
          <span>Name: {formData["name"]}</span>
          <br />
          <span>Email: {formData["email"]}</span>
          <br />
          <span>DOB: {formData["dob"]}</span>
          <br />
          <span>Password: {formData["password"]}</span>
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
