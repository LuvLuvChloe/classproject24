import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export function Signup(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Form className="mt-4">
                            <h2>Sign up for an account</h2>
                            <Form.Group>
                                <Form.Label className="mt-3">Email</Form.Label>
                                <Form.Control rype="email" placeholder="you@domain.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="mt-3">Password</Form.Label>
                                <Form.Control type="password" placeholder="minimum 6 characters" />
                            </Form.Group>
                            <Button type="submit" variant="dark" className="my-3 mx-auto d-block w-100">
                                Sign up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}