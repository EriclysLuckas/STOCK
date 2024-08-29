import { BaseProvider } from "./context/baseContext";
import { RouterProvider } from 'react-router-dom'; // Importa o RouterProvider para gerenciar as rotas
import router from './routes';


function App() {

  return (
    <BaseProvider>
      <RouterProvider router={router} />
    </BaseProvider>


  )

}

export default App
