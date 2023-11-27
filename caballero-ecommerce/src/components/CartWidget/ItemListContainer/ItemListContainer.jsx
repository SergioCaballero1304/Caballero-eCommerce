import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Detalle } from '../Detalle/Detalle';
import { DetalleLlav } from '../DetalleLlav/DetalleLlav';


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
                           <DetalleLlav/>
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
                        <Detalle />
                    </Card.Footer>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}



export default ItemListContainer