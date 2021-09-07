import { Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import styled from "styled-components";
import { BotaoLink } from "../Botao";
import { Preco } from "../Preco";

interface ItemCardProps {
  id: string;
  src: string;
  alt: string;
  nome: string;
  preco: number;
  descricao: string;
  desconto: number;
}

export function ItemCardPromocao(props: ItemCardProps) {
  return (
    <Card>
      <CardImg top width="100%" src={props.src} alt={props.alt} />
      <CardBody>
        <CardTitle tag="h5">{props.nome}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2">
          <Preco
            desconto={props.desconto}
            preco={props.preco}
          />
        </CardSubtitle>
        <CardText>{props.descricao}</CardText>
      </CardBody>
      <CardFooterEstilizado>
        <BotaoLinkEstilizado
          rota='/dashboard'
          label_button='Comprar'
          color="info"
          style={{ marginRight: '10px' }}
        />
        <BotaoLinkEstilizado
          rota={`/game/${props.id}`}
          label_button='Detalhes'
          color="primary"
        />
      </CardFooterEstilizado>
    </Card>
  );
}
const CardFooterEstilizado = styled(CardFooter)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const BotaoLinkEstilizado = styled(BotaoLink)`
  width: 100px;
`;
