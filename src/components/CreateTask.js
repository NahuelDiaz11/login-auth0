import React from "react";
import { Form, Input, Button } from "antd";

const CreateTask = ({ onCreate }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (onCreate) {
      onCreate(values);
    }
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{
        maxWidth: "400px",
        margin: "0 auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <Form.Item
        label="Título"
        name="title"
        rules={[{ required: true, message: "Ingrese un título" }]}
      >
        <Input
          placeholder="Ingrese Tarea"
          style={{
            borderRadius: "4px",
            border: "1px solid #d9d9d9",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#40a9ff")}
          onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
        />
      </Form.Item>

      <Form.Item
        label="Descripción"
        name="description"
        rules={[{ required: true, message: "Ingrese una descripción!" }]}
      >
        <Input.TextArea
          placeholder="Ingrese Descripción"
          rows={4}
          style={{
            borderRadius: "4px",
            border: "1px solid #d9d9d9",
            transition: "border-color 0.3s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#40a9ff")}
          onBlur={(e) => (e.target.style.borderColor = "#d9d9d9")}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            borderRadius: "4px",
            backgroundColor: "#1890ff",
            borderColor: "#1890ff",
          }}
        >
          Crear Tarea
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateTask;
