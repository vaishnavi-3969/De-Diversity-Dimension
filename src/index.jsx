import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = createRoot(document.getElementById("app"));

root.render(
<Auth0Provider
    domain="dev-2mgbgxm3b0scb3xq.us.auth0.com"
    clientId="YvUIW7FQSLwGxVSfM4NwP9Ir1CT1jfrT"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,

);
