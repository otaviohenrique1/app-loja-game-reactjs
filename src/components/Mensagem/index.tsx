import { Col, Alert } from "reactstrap";

type ColorTypesMensagem = 'primary' | 'secondary' | 'success' | 'danger' |
  'warning' | 'info' | 'light' | 'dark';

interface MensagemProps {
  mensagem: string;
  color: ColorTypesMensagem;
}

export function MensagemErro(props: MensagemProps) {
  return (
    <Col md={12}>
      <Alert color={props.color}>
        {props.mensagem}
      </Alert>
    </Col>
  );
}
