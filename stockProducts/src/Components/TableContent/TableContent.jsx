import style from "./TableContent.module.css";
import useBaseContext from "../../hooks/userBaseContext";
import { ButtonAction } from '../ButtonAction/ButtonAction';

export default function TableContent() {
  const  {base} = useBaseContext();
  const lastItens = base.slice(-5)
  return (

    <div className={style.TableRec}>

      <table>

        <thead>
          <tr>
            <th scope="col">Itens Recentes</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody>

          {lastItens.map((product) => (

            <tr key={product._id}             >
              <td>{product.name}</td>
              <td><ButtonAction type="view" productId={product._id} productName ={product.name}  />
              </td>

            </tr>
          ))}


        </tbody>

      </table>

    </div>


  )

}




