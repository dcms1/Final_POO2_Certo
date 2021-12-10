import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container, Action } from "./styles";
import { AiFillDelete } from "react-icons/ai";

interface IExamescreate {
  id: string;
  nome: string;
  tipoexame: string;
  nomeexame: string;
  mesanoexame: string;
  laboratorio: string;
}

export function Dashboard() {
  const [exames, setExames] = useState<IExamescreate[]>([]);

  async function loadData() {
    const dados = await api.get("/exames").then((response) => response.data);
    setExames(dados);
  }
  useEffect(() => {
    loadData();
  }, []);

  function deleteEvent(id: string) {
    api.delete("/exames/" + id);
    loadData();
  }

  function callTotalTipo(filtro1:string){
    let a = exames.filter(exame => exame.tipoexame === filtro1).length
    return a
  }
  function callNomeExame(filtro1:string){
    let a = exames.filter(exame => exame.nomeexame === filtro1).length
    return a
  }
  function callLab(filtro1:string){
    let a = exames.filter(exame => exame.laboratorio === filtro1).length
    return a
  }

  return (
    <>
      <div>
        <h5>Total de Admissional: {callTotalTipo("Admissional")} </h5>
        <h5>Total de Periódico: {callTotalTipo("Periodico")} </h5>
        <h5>Total de Demissional: {callTotalTipo("Demissional")} </h5>

        <h5>Hemograma Completo: {callNomeExame("Hemograma Completo")}</h5>
        <h5>Audiometria: {callNomeExame("Audiometria")}</h5>
        <h5>Acuidade Visual: {callNomeExame("Acuidade Visual")}</h5>

        <h5>Lab Funcional: {callLab("Lab Funcional")}</h5>
        <h5>Lab Medicina: {callLab("Lab Medicina")}</h5>
      </div>

      <Container>
        {exames.map((event) => (
          <div key={event.id} className="event">
            <p>
              <h4>Nome da Pessoa: {event.nome} </h4>
            </p>
            <p>
              <h4>Tipo do Exame: {event.tipoexame}</h4>
            </p>
            <p>
              <h4>Nome do Exame: {event.nomeexame}</h4>
            </p>
            <p>
              <h4>Mesa do Exame: {event.mesanoexame}</h4>
            </p>
            <p>
              <h4>laboratorio: {event.laboratorio}</h4>
            </p>
            <Action>
              <div className="button-container">
                <button
                  onClick={() => {
                    deleteEvent(event.id);
                  }}
                >
                  <AiFillDelete size={35} />
                </button>
              </div>
            </Action>
          </div>
        ))}
      </Container>
    </>
  );
}
