import useBaseContext from "../../hooks/userBaseContext";
import style from "../TableGeneralItens/TableGeneralItens.module.css"
import { ButtonAction } from "../ButtonAction/ButtonAction";

export default function TableGeneralItens() {
  const { base } = useBaseContext()

  return (
    <table className={style.TableGeneralItens}>
      <thead>
        <tr className={style.TableGeneralItensTRhead}>
          <th scope="col">ID  </th>
          <th scope="col" className={style.name}> Nome</th>
          <th scope="col">  Em estoque</th>
          <th scope="col"> Categoria</th>
          <th scope="col"> Ações </th>
        </tr>
      </thead>
      <tbody>
        {base.map((products) => (

          <tr key={products.id} >
            <td>{products.id}</td>
            <td >{products.name}</td>
            <td>{products.quantity}</td>
            <td> {products.category}</td>
            <td className={style.tdBtnAll}>
              {/* <button className={style.btnProducts} onClick = {()=> handleView(products.id)}><FaEye /></button> */}
              <ButtonAction type="view" productId={products.id} />
              <ButtonAction type="update" productId={products.id} />
              <ButtonAction type="delete" productId={products.id} />
            </td>
          </tr>
        ))}


      </tbody>

    </table>
  )
}