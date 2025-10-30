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
          <th scope="col">  Qnt</th>
          <th scope="col"> Categoria</th>
          <th scope="col"> Ações </th>
        </tr>
      </thead>
      <tbody>
        {base.map((product) => (

          <tr key={product._id} >
            <td>{product._id}</td>
            <td >{product.name}</td>
            <td>{product.quantity}</td>
            <td> {product.category}</td>
            <td className={style.tdBtnAll}>
              {/* <button className={style.btnproduct} onClick = {()=> handleView(product._id)}><FaEye /></button> */}
              <ButtonAction type="view" productId={product._id}  productName ={product.name} />
              <ButtonAction type="update" productId={product._id} productName ={product.name}  />
              <ButtonAction type="delete" productId={product._id} productName ={product.name} />
            </td>
          </tr>
        ))}


      </tbody>

    </table>
  )
}