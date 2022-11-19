import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };
  // const handleClick2 = () => {
  //   setModalOpen(false);
  // };
  return (
    <div className="page">
      {/* {modalOpen ? <Modal /> : null} */}
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <p>Wallace Front End</p>
      </Modal>
      <div>
        <button onClick={handleClick}> Abrir Modal </button>
        {/* <button onClick={handleClick2}> fechar Modal </button> */}
      </div>
    </div>
  );
}

export default App;
