import { Card, CardBody, CardFooter, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import styled from "styled-components";
import { aplicaDesconto } from "../../utils/utils";
import { BotaoLink } from "../Botao";

interface ItemCardProps {
  id: string;
  src: string;
  alt: string;
  nome: string;
  preco: string;
  descricao: string;
  desconto: number;
}

const CardSubtitleEstilizado = styled(CardSubtitle)`
  span:first-child {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  span:nth-child(2) {
    margin-right: 10px;
  }
  span:last-child {
    text-decoration: line-through;
    font-size: .8rem;
  }
`;

export function ItemCardPromocao(props: ItemCardProps) {
  const valorDesconto = props.desconto;
  const precoComDesconto = aplicaDesconto(valorDesconto, parseFloat(props.preco));
  const precoSemDesconto = props.preco;
  
  return (
    <Card>
      <CardImg top width="100%" src={props.src} alt={props.alt} />
      <CardBody>
        <CardTitle tag="h5">{props.nome}</CardTitle>
        <CardSubtitleEstilizado tag="h6" className="mb-2 text-muted">
          <span>{`-${valorDesconto}%`}</span>
          <span>{`R$${precoComDesconto}`}</span>
          <span>{`R$${precoSemDesconto}`}</span>
        </CardSubtitleEstilizado>
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
