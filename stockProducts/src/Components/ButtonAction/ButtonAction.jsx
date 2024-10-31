import btnStyle from "../ButtonAction/ButtonAction.module.css";
import { FaTrashAlt, FaPencilAlt, FaEye } from "react-icons/fa";
import useBaseContext from "../../hooks/userBaseContext";
import PropTypes from 'prop-types'; 
import {  useState } from "react";
import { useNavigate} from "react-router-dom";
import  ModalDelet  from '../ModalDelet/ModalDelet';

export const ButtonAction = ({ type, productId, productName}) => {
  const { deleteProducts, } = useBaseContext();

const [modalOpen,setModal] = useState(false)
   const navigate = useNavigate();



  const handleAction = () => {

    if (type === 'delete') {
      setModal(true)
      // deleteProducts(productId);
      // navigate(`/produtos`); 

    } else if (type === 'update') {

      navigate(`/produtos/update/${productId}`)
    }
      else if (type === 'view') {

        navigate(`/produtos/${productId}`); 
     }
  }



  const handleConfirmeDeleteModal = async () => {
    await deleteProducts(productId);
    setModal(false)
    navigate(`/produtos`); 

  }
  const handleCloseModal = () => {
    setModal(false); // Fecha o modal
  };

  return (<>
    <button className={`${btnStyle.btnProducts} ${type === 'delete' ? btnStyle.trash : type === 'update' ? btnStyle.edit : type === 'view' ? btnStyle.view : null}`} onClick={handleAction}>
      {
        type === 'delete' ? <FaTrashAlt /> :
          type === 'update' ? <FaPencilAlt /> :
            type === 'view' ? <FaEye /> :
              null
      }
    </button>
    <ModalDelet 
    isOpenModal={modalOpen}
    onCloseModal={handleCloseModal}
    onConfirmDelete={handleConfirmeDeleteModal}
    productId={productId}
    productName = {productName}
    />
    </>
  );
};

ButtonAction.propTypes = {
  type: PropTypes.oneOf(['delete', 'update', 'view']).isRequired,
  productId: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired

};