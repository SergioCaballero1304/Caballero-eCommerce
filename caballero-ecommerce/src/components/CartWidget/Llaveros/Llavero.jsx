import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/esm/CardGroup"
import { ItemCounter } from '../ItemCounter/ItemCounter';

function Llavero() {
    return (
        <CardGroup id='cards'>
            <Card>
                <Card.Img variant="top" src="/img/Llavero.png" id='imagen' />
                <Card.Body>
                    <Card.Title>Llavero</Card.Title>
                    <Card.Text>
                        $1.000
                    </Card.Text>
                    <Card.Footer>
                        <ItemCounter />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </CardGroup>
    )
}


export default Llavero