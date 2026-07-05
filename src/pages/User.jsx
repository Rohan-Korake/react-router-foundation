import PageTemplate from "../components/PageTemplate";
import { useParams } from "react-router-dom";

function User() {
  const { username } = useParams();

  const capitalize = (str = "") => str.charAt(0).toUpperCase() + str.slice(1);

  const value = `Hello ${
    username ? capitalize(username) : "Viewer"
  }, this is User`;
  return <PageTemplate title={value} nextPage="/user" nextLabel="user" />;
}

export default User;
