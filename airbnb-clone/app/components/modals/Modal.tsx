
interface ModalProps {
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    title?: string;
    body?: string;
    footer?: string;
    actionLabel: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryLabel?: string;
}


const Modal = () => {
    return ( 
        <div>

        </div>
     );
}
 
export default Modal;