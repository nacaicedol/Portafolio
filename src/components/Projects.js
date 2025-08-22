import { Container, Row, Col, Card } from 'react-bootstrap';

function Projects() {
  const proyectos = [
    { titulo: "Sistema de Reservas", descripcion: "Gestión de reservas hoteleras con descuentos." },
    { titulo: "Dashboard Petrodecol", descripcion: "Visualización de estadísticas y gestión de pedidos." },
    { titulo: "Flowchart App", descripcion: "Aplicación de diagramas interactivos en React y JointJS." }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Mis Proyectos</h2>
        <Row>
          {proyectos.map((p, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4 shadow-sm">
                <Card.Body>
                  <Card.Title>{p.titulo}</Card.Title>
                  <Card.Text>{p.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
