import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "18rem", marginRight: "345px" }}>
            <Card.Img
              variant="top"
              src="https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/animaux/chat/education-chat/apprendre-la-proprete-a-un-chat/711041-4-fre-FR/apprendre-la-proprete-a-un-chat.jpg"
            />
            <Card.Body>
              <Card.Title>beau chat</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">achetez ce chat</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder=" email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>mot de passe</Form.Label>
              <Form.Control type="password" placeholder="mot de passe" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="laisse moi connecté" />
            </Form.Group>
            <Button variant="primary" type="submit">
              se connecter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
