import style from "./DashContent.module.css";
import useBaseContext from "../../hooks/userBaseContext";

//CONVERTE A DATA DO PRODUTO PARA OBJETO DATE PARA QUE SEJA POSSÍVEL FILTRAR OS ADICIONADOS RECENTES
const parseDate = (dateString) => {
  const [datePart, timePart] = dateString.split(' | ');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hours, minutes] = timePart.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes);
};

const filterItemsFromLast5Days = (items) => {
  const today = new Date();
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(today.getDate() - 5);

  return items.filter(item => {
    const itemDate = parseDate(item.date);
    return itemDate >= fiveDaysAgo && itemDate <= today;
  });
};
export default function DashContent() {
  const  {base} = useBaseContext();

  const filteredProducts = base.filter(product => product.quantity < 5);
  const filteredProductsTotal = filteredProducts.length;
  const recentProducts = filterItemsFromLast5Days(base);
  const recentProductsTotal = recentProducts.length;
  const totalUnd = base.reduce((count, product) => count + product.quantity, 0);
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
          <h3 className={style.pcardContent}>Itens Recentes</h3>
          <p className={style.cardContentResult}>{recentProductsTotal}</p>
        </div>
        <div className={style.cardContentDash}>
          <h3 className={style.pcardContent}>Itens Acabando</h3>
          <p className={style.cardContentResult}>{filteredProductsTotal}</p>
        </div>
      </div>
    </div>
  );
}

