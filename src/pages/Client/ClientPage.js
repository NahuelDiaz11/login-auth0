import { Col, Row, Table, Space, Button } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]); 
  const [totalTasks, setTotalTasks] = useState(0); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const columns = [
    {
      title: "Título",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Descripción",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Acciones",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={() => navigate(`/client/${record._id}/edit`)}
          >
            Editar
          </Button>
          <Button type="danger" onClick={() => handleDelete(record._id)}>
            Borrar
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    const fetchTasks = async (page, limit) => {
      try {
        console.log("Página actual:", page);
        console.log("Límite:", limit);
        const response = await axios.get(
          `https://programacion-iii-backend.vercel.app/api/getTasks?page=${page}&limit=${limit}`
        );
        console.log(response.data.docs); // Verifica los datos recibidos
        setTasks(response.data.docs); 
        setTotalTasks(response.data.total); 
      } catch (error) {
        console.error("Error al cargar las tareas", error);
      }
    };
    fetchTasks(currentPage, pageSize);
  }, [currentPage]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://programacion-iii-backend.vercel.app/api/deleteTask/${id}`
      );
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error al borrar la tarea", error);
    }
  };

  const handleCreateTask = () => {
    navigate("/task/create");
  };

  const handleTableChange = (pagination) => {
    console.log("Cambio en la paginación:", pagination);
    setCurrentPage(pagination.current); 
  };

  return (
    <>
      <Row justify="center" style={{ marginTop: "20px" }}>
        <Col style={{ width: "100%", height: "auto" }}>
          <Button onClick={handleCreateTask}>Crear Tarea</Button>
          <Table
            columns={columns}
            dataSource={tasks}
            rowKey={(record) => record._id}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              total: totalTasks,
              onChange: handleTableChange,
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default TaskPage;
