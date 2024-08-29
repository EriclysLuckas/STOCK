import btnStyle from "../ButtonAction/ButtonAction.module.css";
import { FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
import useBaseContext from "../../hooks/userBaseContext";
import PropTypes from 'prop-types'; 
import { useNavigate } from "react-router-dom";

export const ButtonAction = ({ type, productId }) => {
  const { deleteProducts, } = useBaseContext();


   const navigate = useNavigate();



  const handleAction = () => {

    if (type === 'delete') {
      deleteProducts(productId);
      navigate(`/produtos`); 

    } else if (type === 'update') {

      navigate(`/produtos/update/${productId}`)
    }
      else if (type === 'view') {

        navigate(`/produtos/${productId}`); 
     }
  }
  return (
    <button className={`${btnStyle.btnProducts} ${type === 'delete' ? btnStyle.trash : type === 'update' ? btnStyle.edit : type === 'view' ? btnStyle.view : null}`} onClick={handleAction}>
      {
        type === 'delete' ? <FaTrashAlt /> :
          type === 'update' ? <FaPencilAlt /> :
            type === 'view' ? <FaEye /> :
              null
      }
    </button>
  );
};

ButtonAction.propTypes = {
  type: PropTypes.oneOf(['delete', 'update', 'view']).isRequired,
  productId: PropTypes.string.isRequired,

};