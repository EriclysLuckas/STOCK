import { Outlet } from 'react-router-dom';
import HeaderPage from '../Components/HeaderPage/HeaderPage';

export default function LayoutRoot() {
return(
  <>
  <HeaderPage />
  <Outlet />
  </>
)
}
