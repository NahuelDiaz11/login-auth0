import { Layout, Card, Button, Row, Col } from "antd";
import LogoutButton from "../../components/logout";
import Profile from "../../components/profile";
import { useNavigate } from "react-router-dom";


const { Header, Content } = Layout;

const ProfilePage = () => {

    const navigate = useNavigate()

 
    const handleClickOK = () =>{
        navigate("/client")
    }
  return (

      <Content style={{ padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
        <Card style={{ width: 400, borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        
          <Profile />

          <Row justify="center" style={{marginTop:"20px"}}>
            <Col>
                <Button
                    type="primary"
                    onClick={handleClickOK}
                >
                    Ver Tasks
                </Button>
            </Col>
          </Row>
        </Card>
      </Content>
  );
};

export default ProfilePage;
