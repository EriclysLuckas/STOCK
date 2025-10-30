import ProtectedRoute from "../src/Components/ProtectRouter"; // import
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/LayoutRoot";
import LayoutAuth from "./pages/LayouAuth";

import { Home } from "./pages/Home/Home";
import ScreenItensGeneral from "./pages/ScreenItensGeneral/ScreenItensGeneral";
import TableGeneralItens from "./Components/TableGeneralItens/TableGeneralItens";
import FormItens from "./Components/FormItens/AddItemForm";
import { TemplateProduct } from "./pages/TemplateProduct/TemplateProduct";
import LoginAuth from "./pages/Login/LoginAuth";
import CadastroAuth from "./pages/Login/FormCadastroAuth/CadastroAuth";







const router = createBrowserRouter([
  {
    element: <LayoutAuth />,
    children: [
      { index: true, element: <LoginAuth /> },
      { path: "login", element: <LoginAuth /> },
      { path: "cadastro", element: <CadastroAuth /> },
    ],
  },

  {
    element: <ProtectedRoute />, // Todas as rotas abaixo precisam de token
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { path: "home", element: <Home /> },
          {
            path: "produtos",
            element: <ScreenItensGeneral />,
            children: [
              { index: true, element: <TableGeneralItens /> },
              { path: "all", element: <TableGeneralItens /> },
              { path: "newitem", element: <FormItens /> },
              { path: ":id", element: <TemplateProduct /> },
              { path: "update/:id", element: <FormItens /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
