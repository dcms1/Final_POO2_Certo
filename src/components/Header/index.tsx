import { useState } from "react";
import logo from "../../assets/the_best_language.jpg"
import { ModalList } from "../Modal";
import { Container } from "./styles";
import {GrBar} from "react-icons/gr"


interface HeaderProps {
    OpenModal: () => void;
}


export function Header() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false)

  function handleOpenNewModal() {
      setIsNewModalOpen(true)
  }

  function handleCloseNewModal() {
    setIsNewModalOpen(false)
  }

    return (
      <Container>
          <img src={logo} alt="Python" />
          <button onClick={handleOpenNewModal}>
            Add
          </button>
          
          <ModalList
            isOpen={isNewModalOpen}
            onRequestClose={handleCloseNewModal} /> 
      </Container>
    );
  }