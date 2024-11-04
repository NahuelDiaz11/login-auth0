import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Card, Skeleton, Typography } from "antd";

const { Title, Paragraph } = Typography;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {

    return <Skeleton active avatar paragraph={{ rows: 2 }} />;
  }

  return (
    isAuthenticated && (
      <Card
        style={{ width: 300, margin: "0 auto", textAlign: "center", borderRadius: "10px" }}
        cover={<img src={user.picture} alt={user.name} style={{ borderRadius: "10px 10px 0 0", maxWidth: "100%" }} />}
      >
        <Title level={2}>Bienvenido</Title>
        <Title level={3}>{user.name}</Title>
        <Paragraph>{user.email}</Paragraph>
      </Card>
    )
  );
};

export default Profile;
