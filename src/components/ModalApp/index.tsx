import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Botao } from "../Botao";

interface ModalAppProps {
  mensagemTitulo: string;
  mensagemCorpo: string;
}

export function ModalApp(props: ModalAppProps) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>{props.mensagemTitulo}</ModalHeader>
      <ModalBody>{props.mensagemCorpo}</ModalBody>
      <ModalFooter>
        <Botao
          color="info"
          type="button"
          label_button="Fechar"
        />
      </ModalFooter>
    </Modal>
  );
}