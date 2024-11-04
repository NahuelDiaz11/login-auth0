import { useParams } from "react-router-dom";
import EditTask from "../../components/EditTask";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditTaskPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  const getTask = async () => {
    try {
      const response = await axios.get(
        `https://programacion-iii-backend.vercel.app/api/getTask/${id}`
      );

      setTask(response.data);
    } catch (e) {
      console.error("Error al obtener la tarea", e);
    }
  };

  const onFinish = async (values) => {
    const { name, description } = values;
    const response = await axios.put(
      `https://programacion-iii-backend.vercel.app/api/updateTask/${id}`,
      { name, description }
    );
    navigate("/client");
  };

  useEffect(() => {
    getTask();
  }, [id]);

  return <EditTask task={task} onCreate={onFinish} />;
};

export default EditTaskPage;
