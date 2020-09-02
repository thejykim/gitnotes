import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

export default function Homepage() {
    return (
        <Container>
            <Jumbotron>
                <h1 className="display-4"><strong>Hello</strong>, world!</h1>
                <p className="lead">Today, React is going to change the world.</p>
            </Jumbotron>
        </Container>
    );
}