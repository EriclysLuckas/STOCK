// eslint-disable-next-line no-unused-vars
import style from "./TableContent.module.css";
import { ButtonAction } from '../ButtonAction/ButtonAction';

import useBaseContext from "../../hooks/userBaseContext";



export default function TableContentF() {
  const  {base} = useBaseContext();

  const filteredProducts = base.filter(product => product.quantity < 5);

  return (
    <div className={style.TableFaltantes}>
      <table>

        <thead>
          <tr>
            <th scope="col">Itens Acabando</th>
            <th scope="col">Qnt</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>

          {filteredProducts.map((product) => (
            <tr key={product._id} className={style.trTableF}>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td><ButtonAction type="view" productId={product._id}  productName={product.name} /></td>
            </tr>
          ))}


        </tbody>

      </table>
    </div>

  )
}




