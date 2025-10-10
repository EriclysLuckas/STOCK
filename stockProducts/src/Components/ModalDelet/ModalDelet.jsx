import styleModal from "./ModalDelet.module.css"
import PropTypes from 'prop-types'
import { FaXmark } from "react-icons/fa6"

export default function ModalDelet({ isOpenModal, onCloseModal, productName, onConfirmDelete }) {
  if (!isOpenModal) return null

  console.log("Modal abriu!") // 👈 Aqui o log funciona corretamente

  return (
    <div className={styleModal.sectionModal}>
      <div className={styleModal.modalContent}>
        <FaXmark className={styleModal.closeModal} onClick={onCloseModal} />
        <span className={styleModal.spanModal}>
          Deseja realmente excluir o produto <strong>{productName}</strong>?
        </span>

        <div className={styleModal.contentButtom}>
          <button
            className={styleModal.btnProductsModal}
            onClick={onCloseModal}
          >
            Cancelar
          </button>

          <button
            className={styleModal.btnProductsModal}
            onClick={onConfirmDelete}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  )
}

ModalDelet.propTypes = {
  isOpenModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onConfirmDelete: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
}
