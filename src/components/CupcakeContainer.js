import React from "react";
import CupcakeCard from "./CupcakeCard";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function CupcakeContainer({ cupcakes }) {

    const cupcake = cupcakes.map((cupcake) => {
        return (
            <Col key={cupcake.idx}>
                <CupcakeCard key={cupcake.id} cupcake={cupcake} />
            </Col>
        )
    })
    console.log(cupcake)
    return (
        <div className="cupcake-container">
            <Row xs={2} md={3} className="g-4">
                {cupcake}
            </Row>
        </div>
    )
}
export default CupcakeContainer;