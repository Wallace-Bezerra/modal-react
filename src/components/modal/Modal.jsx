import { useEffect } from "react";

const Modal = ({ isOpen, setIsOpen, children }) => {

  if (!isOpen) return null;

  useEffect(() => {
    const keyDownEvent = (event) => {

      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", keyDownEvent);

    return () => {
      window.removeEventListener("keydown", keyDownEvent);
    }
  }, [])


  return (
    <div className="backdrop" onClick={(event) => {
      if (event.currentTarget === event.target) {
        setIsOpen(false);
      }
    }}>
      <div className="modal">
        {children}
        <button type="button" className="modalClose" onClick={() => { setIsOpen(false) }}></button>
      </div>
    </div>
  );
};

export default Modal;
