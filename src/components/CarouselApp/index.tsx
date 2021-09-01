import { useRef, useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators,  CarouselCaption, Row, Col } from "reactstrap";
import ReactElasticCarousel from "react-elastic-carousel";
import { items_lista_games } from '../../utils/lista_games';
import styled from 'styled-components';
import { SubTitulo } from '../Titulo';
import { Botao } from '../Botao';
import { ItemCardPromocao } from '../Item';

interface CarouselAppItemProps {
  src: string;
  alt: string;
}

interface CarouselAppProps {
  data: CarouselAppItemProps[];
}

const CarouselEstilizado = styled(ReactElasticCarousel)`
  div.rec.rec-carousel {
    /* width: 400px; */
    width: 100%;
    height: 170px !important;
  }

  div.rec.rec-carousel img {
    height: 160px !important;
  }
`;

export function CarouselDestaques(props: CarouselAppProps) {
  return (
    <Row style={{ width: '100%' }}>
      <Col md={12}>
        <SubTitulo titulo="Destaques" />
      </Col>
      <Col md={12}>
        <CarouselEstilizado
          itemsToShow={3}
          isRTL={false}
        >
          {props.data.map((item, index) => (
            <div key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </CarouselEstilizado>
      </Col>
      <Col md={12} style={{
        textAlign: 'right'
      }}>
        <Botao
          color='info'
          label_button='Veja mais'
          style={{ width: '100px' }}
        />
      </Col>
    </Row>
  );
}

export function CarouselPromocoes() {
  return (
    <Row style={{ marginTop: '50px', width: '100%' }}>
      <Col md={12}>
        <SubTitulo titulo='Promoções' />
      </Col>
      <Col md={12}>
        <Row>
          <Col md={4}>
            <ItemCardPromocao
              src={items_lista_games[0].src}
              alt={items_lista_games[0].alt}
              nome={items_lista_games[0].nome}
              preco={items_lista_games[0].preco}
              descricao={items_lista_games[0].descricao}
              desconto={items_lista_games[0].desconto}
              id={(items_lista_games[0].id).toString()}
            />
          </Col>
          <Col md={4}>
            <ItemCardPromocao
              src={items_lista_games[1].src}
              alt={items_lista_games[1].alt}
              nome={items_lista_games[1].nome}
              preco={items_lista_games[1].preco}
              descricao={items_lista_games[1].descricao}
              desconto={items_lista_games[1].desconto}
              id={(items_lista_games[1].id).toString()}
            />
          </Col>
          <Col md={4}>
            <ItemCardPromocao
              src={items_lista_games[2].src}
              alt={items_lista_games[2].alt}
              nome={items_lista_games[2].nome}
              preco={items_lista_games[2].preco}
              descricao={items_lista_games[2].descricao}
              desconto={items_lista_games[2].desconto}
              id={(items_lista_games[2].id).toString()}
            />
          </Col>
        </Row>
      </Col>
      <Col md={12} style={{
      textAlign: 'right', marginTop: '20px'
      }}>
        <Botao
          color='info'
          label_button='Veja mais'
          style={{ width: '100px' }}
        />
      </Col>
    </Row>
  );
}

export function CarouselApp2() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items_lista_games.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items_lista_games.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items_lista_games} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {items_lista_games.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.alt} />
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
          </CarouselItem>
        );
      })}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export function CarouselApp3() {
  const carouselRef = useRef<any>(null);

  return (
    <ReactElasticCarousel
      itemsToShow={1}
      isRTL={false}
      
      ref={carouselRef}
      onPrevStart={(currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(items_lista_games.length);
        }
      }}
      onNextStart={(currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
          carouselRef.current.goTo(0);
        }
      }}
      disableArrowsOnEnd={false}
    >
      {items_lista_games.map((item, index) => (
        <div key={index}>
          <img src={item.src} alt={item.alt} />
        </div>
      ))}
    </ReactElasticCarousel>
  );
}
