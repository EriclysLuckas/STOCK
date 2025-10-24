import style from "./DashContent.module.css";
import useBaseContext from "../../hooks/userBaseContext";
import ProductsPieChart from "../DashContente/ProductsPieChart"
import DashFaltantes from "../DashContente/DashFaltantes"

export default function DashContent() {
  const { base } = useBaseContext();

  const totalUnd = base.reduce((count, product) => count + product.quantity, 0);

      console.log(base)

  

  return (
    <div className={style.contentDash}>
      <h1>Dashboard</h1>
      <div className={style.dashboard}>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Variedade de Itens</h3>
            
            <ProductsPieChart />
            
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Total de Itens</h3>
          <p className={style.cardContentResult}>{totalUnd}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Críticos</h3>
          <DashFaltantes/>
        </div>
      </div>
    </div>
  );
}
