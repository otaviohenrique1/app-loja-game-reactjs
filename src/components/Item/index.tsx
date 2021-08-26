import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

interface ItemCardProps {
  src: string;
  alt: string;
  nome: string;
  preco: string;
  descricao: string;
}

export function ItemCard(props: ItemCardProps) {
  return (
    <Card>
      <CardImg top width="100%" src={props.src} alt={props.alt} />
      <CardBody>
        <CardTitle tag="h5">{props.nome}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {`R$ ${props.preco}`}
        </CardSubtitle>
        <CardText>{props.descricao}</CardText>
        <Button>Comprar</Button>
      </CardBody>
    </Card>
  );
}