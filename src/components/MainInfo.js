import React, { Fragment, useEffect } from 'react';
import { Card, Container, CardTitle, CardSubtitle, CardText, Row, Col, Jumbotron } from 'reactstrap';
import { connect } from 'react-redux';
import HighCharts from './HighCharts';

const MainInfo = (props) => {
    const data = [];
    for (const key in props.global) {
        data.push(props.global[key].toString().replace(/(.)(?=(\d{3})+$)/g, '$1,'));
    };


    return <Fragment>
        <Container>
            <Row>
                <Col sm="4" className="mb-3">
                    <Card body inverse style={{ backgroundColor: "#333" }}>
                        <CardSubtitle>Global</CardSubtitle>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "bold" }}>Coronavirus cases</CardTitle>
                        <CardText style={{ fontSize: "22px", fontWeight: "bold" }}>{data[0]}</CardText>
                    </Card>
                </Col>
                <Col sm="4" className="mb-3">
                    <Card body inverse style={{ backgroundColor: "#333" }}>
                        <CardSubtitle>Global</CardSubtitle>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "bold" }}>Deaths</CardTitle>
                        <CardText style={{ fontSize: "22px", fontWeight: "bold" }}>{data[1]}</CardText>
                    </Card>
                </Col>
                <Col sm="4" className="mb-3">
                    <Card body inverse style={{ backgroundColor: "#333" }}>
                        <CardSubtitle>Global</CardSubtitle>
                        <CardTitle style={{ fontSize: "20px", fontWeight: "bold" }}>Recovered</CardTitle>
                        <CardText style={{ fontSize: "22px", fontWeight: "bold" }}>{data[2]}</CardText>
                    </Card>
                </Col>
            </Row>

            <h1 className="mt-5" style={{ textAlign: "center", color: "white" }}>20 most infected countries</h1>
            <HighCharts />
        </Container>
    </Fragment>
}

const mapStateToProps = (state) => ({
    global: state.virus_data.global
});


export default connect(mapStateToProps)(MainInfo);
