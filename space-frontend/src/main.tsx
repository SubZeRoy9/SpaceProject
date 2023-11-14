import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = createRoot(document.getElementById("root")!);

root.render(
  <Auth0Provider
    domain="dev-5sou2dj2ek3adao1.us.auth0.com"
    clientId="lOJ0Rzjs6fl4vgfX4unvTJXvairpG86K"
    authorizationParams={{
      redirect_uri: "http://localhost:5173/home",
    }}
  >
    <App />
  </Auth0Provider>
);
