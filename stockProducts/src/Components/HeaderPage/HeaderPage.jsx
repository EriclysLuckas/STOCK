import style from "./HeaderPage.module.css";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function HeaderPage() {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/home")
  }

  return (

    <div className={style.compHeader}>
      <div className={style.ContentHeader}>
        <div className={style.TitleHeader}>
          <h1 onClick={onClick}>
            Stock
          </h1>
        </div>
        <div className={style.navHeader}>
          <p > <Link to="/home" >Inicio</Link></p>
          <p > <Link to="/produtos/all"> Produtos</Link></p>
          <p > <Link to=""> Despacho</Link></p>
        </div>
      </div>
    </div>


  )
}




