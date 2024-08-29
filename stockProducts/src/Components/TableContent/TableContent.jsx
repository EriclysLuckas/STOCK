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

          {lastItens.map((products) => (

            <tr key={products.id} >
              <td>{products.name}</td>
              <td><ButtonAction type="view" productId={products.id} />
              </td>

            </tr>
          ))}


        </tbody>

      </table>

    </div>


  )

}




