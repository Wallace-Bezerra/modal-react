const Modal = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="backdrop">
      <div className="modal">
        {children}
        <button type="button" className="modalClose"></button>
      </div>
    </div>
  );
};

export default Modal;
