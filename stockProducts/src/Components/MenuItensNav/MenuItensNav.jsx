import style from "./MenuItensNav.module.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
export default function MenuItensGeneralScreen() {
    const { pathname } = useLocation();


    const linkClass = pathname === "/produtos/all" ? `${style.linkGeneral} ${style.active}` : style.linkGeneral;
    const newItemClass = pathname === "/produtos/newitem" ? `${style.linkGeneral} ${style.active}` : style.linkGeneral;
    // const exportProducts = pathname === "/produtos/export" ? `${style.linkGeneral} ${style.active}` : style.linkGeneral;
    // const importProducts = pathname === "/produtos/importPr" ? `${style.linkGeneral} ${style.active}` : style.linkGeneral;


    return (

        <>
            <h1>STOCK ITENS</h1>
            <div className={style.MenuItensGeneralScreen} >

                <p > <Link to="/produtos/all" className={linkClass}>Todos os Itens </Link></p>
                <p > <Link to="/produtos/newitem" className={newItemClass}> Novo Item</Link></p>
                {/* <p  > <Link to="" className={exportProducts}> Exportar </Link></p>
                <p  > <Link to="" className={importProducts}> Importar </Link></p> */}

            </div>
        </>


    )
}