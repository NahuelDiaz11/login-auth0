import { Form, Input, Button, Spin } from 'antd';
import { useNavigate } from 'react-router-dom';

const EditTask = ({ onCreate, task }) => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    
    const onFinish = (values) => {
        if (onCreate) {
            onCreate(values);
        }
        form.resetFields();
    };

    if (!task) {
        return <Spin />;
    }

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
                backgroundColor: "#f0f2f5",
            }}
            initialValues={task}
        >
            <Form.Item
                label="Título"
                name="title"
                style={{
                    width: "100%",
                }}
                rules={[{ required: true, message: 'Ingrese texto' }]}
            >
                <Input
                    placeholder="Ingrese Tarea"
                    style={{
                        borderRadius: "4px",
                        border: "1px solid #d9d9d9",
                    }}
                />
            </Form.Item>

            <Form.Item
                label="Descripción"
                name="description"
                style={{
                    width: "100%",
                }}
                rules={[{ required: true, message: 'Ingrese texto!' }]}
            >
                <Input.TextArea
                    placeholder="Ingrese Descripción"
                    rows={4}
                    style={{
                        borderRadius: "4px",
                        border: "1px solid #d9d9d9",
                    }}
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
                    Editar Tarea
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditTask;
