import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/esm/CardGroup"
import { ItemCounter } from '../ItemCounter/ItemCounter';

function Matera() {
    return (
        <CardGroup id='cards'>   
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
    )
}


export default Matera

