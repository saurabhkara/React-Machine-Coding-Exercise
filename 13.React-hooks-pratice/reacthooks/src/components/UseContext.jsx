import { UserContext } from "../context/AppContext";
import { useContext } from "react";

const Profile = () => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div>
      <h1>Profile</h1>
      <h4>Name: Saurabh</h4>
      <h4>Phone: {context}</h4>
    </div>
  );
};

export default function UseContext() {
  return (
    <div>
      use Context
      <Profile />
    </div>
  );
}
