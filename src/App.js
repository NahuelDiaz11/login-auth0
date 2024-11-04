import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import axios from "axios";
function App() {
  const { isAuthenticated } = useAuth0();

  console.log("isAuthenticated:", isAuthenticated);

  const handleSubmit = async (values) => {
    const { name, description } = values;
    await axios.post("https://back-programacion-iii.vercel.app/api/task", {
      name,
      description,
    });
  };

  return <></>;
}

export default App;
