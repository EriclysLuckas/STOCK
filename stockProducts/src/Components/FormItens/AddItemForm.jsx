import style from "./AddItemForm.module.css";
import useBaseContext from "../../hooks/userBaseContext";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddItemForm() {
  const { id } = useParams(); // Obtém o ID do produto da URL, se disponível
  const navigate = useNavigate();
  const { addProduct, updateProduct, getProductId } = useBaseContext();

  // Estado para armazenar dados do formulário
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    desc: "",
  });

  const buttonFormText = id ? "Atualizar" : "Salvar";

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const product = await getProductId(id);
        if (product) {
          setFormData({
            name: product.name || "",
            quantity: product.quantity || "",
            price: product.price || "",
            category: product.category || "",
            desc: product.desc || "",
          });
        }
      }
    };
    fetchProduct();
  }, [id, getProductId]);

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
    if (!formData.name) return console.error("Nome é obrigatório");

    const productData = {
      name: formData.name,
      quantity: Number(formData.quantity),
      price: Number(formData.price),
      category: formData.category,
      desc: formData.desc,
    };

    if (id) {
      await updateProduct(id, productData);
    } else {
      await addProduct(productData);
    }

    setFormData({
      name: "",
      quantity: "",
      price: "",
      category: "",
      desc: "",
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
          <button type="submit" className={style.btnFormCarryBlock}>
            {buttonFormText}
          </button>
        </div>
      </form>
    </section>
  );
}
