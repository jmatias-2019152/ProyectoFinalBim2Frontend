import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CompareDesktop from "../../assets/img/CompareDesktop.svg"
import SaveDesktop from "../../assets/img/SaveDesktop.svg"
import SearchDesktop from "../../assets/img/SearchDesktop.svg"
import exterior from "../../assets/img/exterior.jpg"
import hotel from "../../assets/img/hotel.jpg"
import hotelexterior from "../../assets/img/hotelexterior.jpg"
import piscina from "../../assets/img/piscina.jpg"

export const Contents = () => {


  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={exterior}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hotel}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={hotelexterior}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={piscina}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Sección 2</h2>
          <p>Contenido de la sección 2.</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Row>
            <Col xs={12} md={4} className="text-center">
              <img src={CompareDesktop} alt="Busca con facilidad" />
              <h3>Busca con facilidad</h3>
              <p>Busca entre 5 millones de hoteles en cuestión de segundos.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={SaveDesktop} alt="Compara con seguridad" />
              <h3>Compara con seguridad</h3>
              <p>Compara precios de hoteles de cientos de webs a la vez.</p>
            </Col>
            <Col xs={12} md={4} className="text-center">
              <img src={SearchDesktop} alt="Ahorra a lo grande" />
              <h3>Ahorra a lo grande</h3>
              <p>Descubre grandes ofertas y reserva en las webs de nuestros colaboradores.</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h2>Acerca de trivago</h2>
          <Row>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className="p-8 border bg-light h-100">
                <h3>trivago: el buscador de hoteles global</h3>
                <p>
                  El buscador de hoteles de trivago permite a los usuarios
                  comparar, en tan solo unos clics, precios de hoteles de cientos
                  de sitios web de reserva para más de 5 millones de hoteles y
                  otros tipos de alojamientos en más de 190 países. Cada año,
                  ayudamos a millones de viajeros a comparar ofertas de hoteles
                  y otros tipos de alojamiento. Además, te aportamos información
                  útil para viajar a ciudades como Madrid o Granada.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className="p-3 border bg-light h-100">
                <h3>Encuentra hoteles baratos en trivago</h3>
                <p>
                  trivago te ayuda a encontrar tu hotel ideal y comparar los
                  precios de numerosas webs. Indica a dónde y en qué fechas
                  quieres viajar, y nuestro buscador de hoteles comparará los
                  precios de los alojamientos por ti.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className="p-3 border bg-light h-100">
                <h3>Las opiniones de otros usuarios te ayudarán a encontrar tu hotel ideal</h3>
                <p>
                  trivago incluye más de 175 millones de opiniones de huéspedes y
                  más de 19 millones de fotografías de hoteles, que te aportarán
                  una información muy valiosa sobre todos aquellos lugares que
                  quieres visitar.
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="mb-4">
              <div className="p-3 border bg-light h-100">
                <h3>Cómo reservar</h3>
                <p>
                  trivago es el buscador de hoteles ideal para comparar entre una
                  gran variedad de precios de numerosos hoteles y webs de reserva.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};