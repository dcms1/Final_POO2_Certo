import { useEffect, useState, FormEvent } from "react";
import { api } from "../../service/api";
import Modal from "react-modal";
import { Container } from "./styles";
import {RiCloseCircleFill} from "react-icons/ri";


interface NewModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalList({ isOpen, onRequestClose }: NewModal) {
    const [nome, setExame] = useState("");
    const [tipoexame, setTipoexame] = useState("");
    const [nomeexame, setNomeExame] = useState("");
    const [mesanoexame, setMesAno] = useState("");
    const [laboratorio, setLab] = useState("");
    let arrayLab = [];
    let arrayNome = [];
    let arrayTipo = [];
    async function Submitdata(events: React.FormEvent) {
      events.preventDefault();
  
      const dados = {
        nome,
        tipoexame,
        nomeexame,
        mesanoexame,
        laboratorio
      };
      arrayLab.push(laboratorio);
      arrayNome.push(nomeexame);
      arrayTipo.push(tipoexame);

      console.log({ dados });
      onRequestClose();
      await api.post("/exames", dados);

      await api.get("/exames")
    }
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <RiCloseCircleFill />
        </button>
  
        <Container onSubmit={Submitdata}>
          <h2>Entre com o novo exame</h2>
  
          <input
            type="text"
            name="nome"
            value={nome}
            placeholder="Nome da Pessoa"
            onChange={(e) => setExame(e.target.value)}
          />
  
          <select value={tipoexame} onChange={(e) => setTipoexame(e.target.value) }>
            <option value="Admissional">Admissional</option>
            <option value="Periódico">Periodico</option>
            <option value="Demissional">Demissional</option>
          </select>
  
          <select value={nomeexame} onChange={(e) => setNomeExame(e.target.value)}>
            <option value="Hemograma Completo">Hemograma Completo</option>
            <option value="Audiometria">Audiometria,</option>
            <option value="Acuidade Visual">Acuidade Visual</option>
          </select>
           
          <select value={laboratorio} onChange={(e) => setLab(e.target.value)}>
            <option value="Lab Funcional">Lab Funcional</option>
            <option value="Lab Medicina">Lab Medicina,</option>
          </select> 
  
          <input
            type="date"
            name="mesa"
            value={mesanoexame}
            placeholder="Horário"
            onChange={(e) => setMesAno(e.target.value)}
          />
  
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    );
  }
  