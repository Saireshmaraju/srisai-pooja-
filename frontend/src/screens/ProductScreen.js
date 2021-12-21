import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'


const ProductScreen = ({match}) => {

    
    return (
        <>

        <main>
            <Header/>
            <Container>
                <Row>
                   <Col>
                   <img src="https://i5.walmartimages.com/asr/bec55455-1d45-45e7-b88e-e021141ff15a.c4d2a38e04738a730e7e5defb3df3edc.jpeg" Height="500"
                      className="d-inline-block align-top w-100"
                      alt="" />  
                   </Col>

         <Col>

          <h1>BRASS DIYA</h1>

           <p>*Tealight Diyas used for decoration during Diwali;<br></br>
  *Diwali: The lighting of diyas forms a part of celebrations and rituals of the important day in the Hindu calendar. Houses are decorated with small diyas placed at boundaries and entrances.[4] In fact, the name of Diwali is derived from the Sanskrit word Deepavali, which means the row of lights ("deep" means Diya and "avali" means row).[5];<br></br>
*Karthikai Deepam: Diyas, also known as deepam in Tamil Nadu, can be lighted, especially during the Karthikai Deepam.</p>
                 
           <div>
<Button variant="primary" size="sm">
             Open
   </Button>{'    '}
      <Button variant="secondary" size="sm">
         Close
             </Button>
        </div>

          </Col>
         </Row>
     </Container>

</main>
        </>
            
      
    )
}

export default ProductScreen