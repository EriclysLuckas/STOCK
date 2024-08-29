import MenuItensNavav from "../../Components/MenuItensNav/MenuItensNav";
import { Outlet } from 'react-router'

export default function MenuItensGeneralScreen() {


    return (
        <>
            <MenuItensNavav />
            <Outlet />

        </>


    )
}