import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/LayoutRoot';
import { Home } from './pages/Home/Home';
import ScreenItensGeneral from './pages/ScreenItensGeneral/ScreenItensGeneral';
import TableGeneralItens from './Components/TableGeneralItens/TableGeneralItens';
import FormItens from './Components/FormItens/AddItemForm';
import {TemplateProduct} from './pages/TemplateProduct/TemplateProduct'
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
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
]);

export default router;
