import style from "./DashContent.module.css";
import useBaseContext from "../../hooks/userBaseContext";
// import ProductsPieChart from "../DashContente/ProductsPieChart"


export default function DashContent() {
  const { base } = useBaseContext();

  // Produtos com quantidade menor que 5
  const filteredProducts = base.filter(product => product.quantity < 5);
  const filteredProductsTotal = filteredProducts.length;

  // Total de unidades e total de produtos
  const totalUnd = base.reduce((count, product) => count + product.quantity, 0);
  // const totalProducts = base.length;

  console.log(base)


  const totalProducts = base.length;

  return (
    <div className={style.contentDash}>
      <h1>Dashboard</h1>
      <div className={style.dashboard}>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Variedade de Itens</h3>

          <p className={style.cardContentResult}>{totalProducts}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Total de Itens</h3>
          <p className={style.cardContentResult}>{totalUnd}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Acabando</h3>
          <p className={style.cardContentResult}>{filteredProductsTotal}</p>
        </div>
      </div>
    </div>
  );
}
