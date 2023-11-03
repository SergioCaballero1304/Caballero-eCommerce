import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ItemCounter } from '../ItemCounter/ItemCounter';

function ItemListContainer() {
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
            <Card>
                <Card.Img variant="top" src="img/Matera.png" id='imagen' />
                <Card.Body>
                    <Card.Title>Matera</Card.Title>
                    <Card.Text>
                        $3.000
                    </Card.Text>
                    <Card.Footer>
                        <ItemCounter />    
                    </Card.Footer>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}



export default ItemListContainer