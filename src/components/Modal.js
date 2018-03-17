import react from 'react';
import Proptypes from 'prop-types';

const styles = {
    base:{

    },
}

const Modal = ({isOpen, onClose, children}) => {
    <div>{children}</div>
}

Modal.Proptypes = {
    isOpen.func.isRequired,
    onClose.func
}

export default Modal;
