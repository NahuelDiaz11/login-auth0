import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/logout";
import ProfilePage from "../pages/Profile/ProfilePage";
import ClientPage from "../pages/Client/ClientPage";
import Layout from "../layouts/Layout";
import CrearTaskPage from "../pages/Client/CrearTaskPage";
import EditTaskPage from "../pages/Client/ClientEditTask";

const rutasAutenticadas = [
  {
    url: "/",
    component: <ProfilePage />,
  },
  {
    url: "/client",
    component: <ClientPage />,
  },
  {
    url: "/task/create",
    component: <CrearTaskPage />,
  },
  {
    url: "/client/:id/edit",
    component: <EditTaskPage />,
  },
  {
    url: "/logout",
    component: <LogoutButton />,
  },
];

const rutasNoAutenticadas = [{}];

export default function RoutesDash() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<Layout />}>
          {rutasAutenticadas.map((ruta, index) => (
            <Route key={index} path={ruta.url} element={ruta.component} />
          ))}

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      ) : (
        <Route element={<Layout />}>
          {rutasNoAutenticadas.map((ruta, index) => (
            <Route key={index} path={ruta.url} element={ruta.component} />
          ))}

          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      )}
    </Routes>
  );
}
