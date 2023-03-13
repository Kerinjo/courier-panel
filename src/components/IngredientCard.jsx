import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { useState } from 'react';



const IngredientCard = ({ ingredient }) => {
    const name = ingredient["strIngredient"]

    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img variant="top" src={`https://www.themealdb.com/images/ingredients/${name}.png`} />
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default IngredientCard;
