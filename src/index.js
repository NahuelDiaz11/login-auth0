import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import RoutesDash from './dashboard/routes';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-r0f7htrq3fobe5i0.us.auth0.com"
    clientId="ZoZh0Cdyy5S5p49ztzWAltS7bgkWUG5A"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <RoutesDash />
    </BrowserRouter>
  </Auth0Provider>,
);