import { Header } from "antd/es/layout/layout";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "./login";
import LogoutButton from "./logout";

export default function Header2() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <Header
      style={{
        backgroundColor: "#f0f2f5", 
        color: "#333", 
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        padding: "0 20px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <div
        style={{
          flex: 1,
          textAlign: "left",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        {isAuthenticated ? "Mi Perfil" : "Bienvenido"}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        {isAuthenticated ? (
          <>
            <Button
              type="text"
              style={{ color: "#1890ff", marginRight: "10px" }}
              onClick={() => navigate("/")}
            >
              Ir a Inicio
            </Button>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </Header>
  );
}
