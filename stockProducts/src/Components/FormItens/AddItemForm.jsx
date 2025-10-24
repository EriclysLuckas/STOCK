import style from "./AddItemForm.module.css";
import useBaseContext from "../../hooks/userBaseContext";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function AddItemForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct, updateProduct, getProductId } = useBaseContext();

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    price: "",
    category: "",
    desc: "",
  });

  const [isLoading, setIsLoading] = useState(false); // 👈 estado de carregamento

  const buttonFormText = isLoading
    ? "Salvando..."
    : id
      ? "Atualizar"
      : "Salvar";

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
      } else {
        setFormData({
          name: "",
          quantity: "",
          price: "",
          category: "",
          desc: "",
        });
      }
    };
    fetchProduct();
  }, [id, getProductId]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return; // 👈 evita múltiplos cliques
    setIsLoading(true);

    try {
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
    } catch (error) {
      console.error("Erro ao salvar produto:", error);
    } finally {
      setIsLoading(false); // 👈 volta ao normal
    }
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
              disabled={isLoading} // 👈 desativa enquanto salva
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
              disabled={isLoading}
            />
          </div>
          <div className={style.boxinput}>
            <label htmlFor="priceForm">Preço</label>
            <input
              type="text" // alterar de number para text
              name="price"
              id="priceForm"
              value={formData.price}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9,]/g, ""); // permite só números e vírgula
                setFormData((prev) => ({ ...prev, price: value }));
              }}
              onBlur={() => {
                // converte vírgula para ponto e formata número
                const numeric = parseFloat(formData.price.replace(",", ".")) || 0;
                setFormData((prev) => ({ ...prev, price: numeric.toFixed(2) }));
              }}
              required
              disabled={isLoading}
            />
          </div>          <div className={style.boxinput}>
            <label htmlFor="categoryForm">Categoria do Produto</label>
            <select
              onChange={onChange}
              name="category"
              id="categoryForm"
              value={formData.category}
              required
              disabled={isLoading}
            >
              <option value="">Selecione a Categoria</option>
              <option value="Categoria 1">Categoria 1</option>
              <option value="Categoria 2">Categoria 2</option>
              <option value="Categoria 3">Categoria 3</option>
              <option value="Categoria 4">Categoria 4</option>
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
            disabled={isLoading}
          ></textarea>
        </div>
        <div className={style.formCarryBlock}>
          <button
            type="submit"
            className={style.btnFormCarryBlock}
            disabled={isLoading} // 👈 botão desativado
          >
            {buttonFormText}
          </button>
        </div>
      </form>
    </section>
  );
}
