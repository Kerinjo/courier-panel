import { Row, Col } from 'react-bootstrap'
import { ingredientsArray } from '../ingredients'
import IngredientCard from '../components/IngredientCard'

const Store = () => {
    return (
      <>
        <h1 align="center" className='p-3'>Store</h1>
        <Row xs={1} md={3} className="g-4">
          {ingredientsArray.map((ingredient, idx) => (
            <Col align ="center" key={idx}>
              <IngredientCard ingredient={ingredient} />
            </Col>
          ))}
        
        </Row>
      </>
    )
  }
  
  export default Store
  