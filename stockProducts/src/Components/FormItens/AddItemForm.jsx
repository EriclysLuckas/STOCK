import style from "./AddItemForm.module.css";
import useBaseContext from "../../hooks/userBaseContext";
import { useState,  useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddItemForm() {
  const { id } = useParams(); // Obtém o ID do produto da URL, se disponível
  const navigate = useNavigate(); // Inicializa useNavigate
  const { addProduct, updateProduct, getProductId  } = useBaseContext();
  
 // Formata a data atual
 const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} | ${hours}:${minutes}`;
};
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
  // Estado para armazenar dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    desc: "",
    date: "",
  });
  const buttonFormText = id ? "Atualizar" : "Salvar"


    // Se um ID for fornecido, busca os dados do produto e preenche o formulário
    useEffect(() => {
      if (id) {
        const fetchProduct = async () => {
          const productsForGet = await getProductId(id); // Busca o produto pelo ID
          if (productsForGet) {
            setFormData({
              name: productsForGet.name || "",
              quantity: productsForGet.quantity || "",
              price: productsForGet.price || "",
              category: productsForGet.category || "",
              desc: productsForGet.desc || "",
              date: productsForGet.date || formattedDate,
            });
          }
        };
        fetchProduct();
      }
    }, [id, getProductId, formattedDate]);
    


    
 
  

  // Atualiza o estado do formulário conforme o usuário digita
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  // Lida com o envio do formulário
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) {
      console.error("Nome é obrigatório");
      return;
    }

    const productData = {
      name: formData.name,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      category: formData.category,
      desc: formData.desc,
      date: formattedDate,
    };


if (id) {
      // Atualiza o produto existente
      await updateProduct(id, productData);
      
    } else {
      // Adiciona um novo produto
      await addProduct(productData);
    }


    setFormData({
      name: "",
      quantity: "",
      price: "",
      category: "",
      desc: "",
      date: "",
    });

    navigate("/produtos/all");
  };

  return (
    <section className={style.formcarryContainer}>
      <form onSubmit={onSubmit}>
        <div className={style.formCarryBlock1}>
          <div className={style.boxinput}>
            <label htmlFor="nameForm">Nome</label>
            <input
              type="text"
              name="name"
              id="nameForm"
              value={formData.name}
              onChange={onChange}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="quantityForm">Quantidade</label>
            <input
              type="number"
              name="quantity"
              id="quantityForm"
              value={formData.quantity}
              onChange={onChange}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="priceForm">Preço</label>
            <input
              type="number"
              name="price"
              id="priceForm"
              value={formData.price}
              onChange={onChange}
              required
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="categoryForm">Categoria do Produto</label>
            <select
              onChange={onChange}
              name="category"
              id="categoryForm"
              value={formData.category}
              required
            >
              <option value="">Selecione a Categoria</option>
              <option value="Categoria1">Categoria 1</option>
              <option value="Categoria2">Categoria 2</option>
              <option value="Categoria3">Categoria 3</option>
              <option value="Categoria4">Categoria 4</option>
            </select>
          </div>
        </div>
        <div className={style.formCarryBlock2}>
          <label htmlFor="descForm">Descrição</label>
          <textarea
            onChange={onChange}
            name="desc"
            id="descForm"
            value={formData.desc}
            required
          ></textarea>
        </div>
        <div className={style.formCarryBlock}>
          <button type="submit">{buttonFormText}</button>
        </div>
      </form>
    </section>
  );
}
