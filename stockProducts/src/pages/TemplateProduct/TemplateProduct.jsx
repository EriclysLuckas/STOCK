import useBaseContext from "../../hooks/userBaseContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styleProductView from "../TemplateProduct/TemplateProduct.module.css";
import { ButtonAction } from '../../Components/ButtonAction/ButtonAction';
export const TemplateProduct = () => {

  const { id } = useParams()                                  //UTILIZA O ID COMO PARAMS
  const { getProductId } = useBaseContext()                   //CHAMA A FUNÇÃO QUE RETORNA O PRODUTO PELO ID
  const [productid, setProductid] = useState({})            // CRIEI UM STATE PARA ARMAZENAR O PRODUTO

  useEffect(() => {
    const fethcproductid = async () => {
      const productsview = await getProductId(id)             // inicio uma const que aguarda o retorno do ID
      setProductid(productsview)                             //armazeno os produtos por id no state
    }
    fethcproductid()                                         //executo minha função

  }, [id, getProductId])


  return (
    <div className={styleProductView.contentProductView}>
      <div className={styleProductView.headerProductView}>
        <div className={styleProductView.NameProductView}>
          <span > {productid.name} </span>

        </div>
        {productid && productid._id ? (
          <div className={styleProductView.actionHeaderProductView}>
            <ButtonAction type="update" productId={productid._id} productName={productid.name} />
            <ButtonAction type="delete" productId={productid._id} productName={productid.name} />
          </div>
        ) : (
          null
        )}
      </div>

      <div className={styleProductView.bodyProductView}>
        <div className={styleProductView.contentCardsProductView}>
          <div className={styleProductView.cardsProductView}> <strong>Categoria: </strong> {productid.category}</div>
          <div className={styleProductView.cardsProductView}><strong>Quantidade em estoque: </strong> {productid.quantity}</div>
          <div className={styleProductView.cardsProductView}>
            <strong>Preço: </strong>
            {productid.price !== undefined && productid.price !== null
              ? new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(productid.price)
              : "R$ 0,00"
            }
          </div>

        </div>
        <div className={styleProductView.descProductView}>
          <span ><strong>Descrição: </strong> </span> <span>{productid.desc}</span>
        </div>

      </div>

      <span className={styleProductView.date}>Ultima Atualização: {new Date(productid.updatedAt).toLocaleString()}</span> <br />

      <span className={styleProductView.date}>Data de Criação: {new Date(productid.createdAt).toLocaleString()}</span>


    </div>
  )
}