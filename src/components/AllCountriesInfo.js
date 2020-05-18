import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import Pagination from './Pagination/Pagination';

const AllCountriesInfo = (props) => {
    const [inputValue, setInputValue] = useState("");
    const countries = props.countries.slice(1);

    const searchCountries = countries.filter(country => {
        const name = country.country.toLowerCase();
        const value = inputValue.toLowerCase();
        return name.indexOf(value) !== -1;
    });

    return <Fragment>
        <Container>
            <InputGroup className="mb-4">
                <Input style={{ backgroundColor: "grey", color: "white" }} value={inputValue} onChange={e => setInputValue(e.target.value)} />
                <InputGroupAddon addonType="append">
                    <InputGroupText>Find country</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <Row>
                <Pagination searchCountries={searchCountries} />
            </Row>
        </Container>
    </Fragment>
}

const mapStateToProps = (state) => ({
    countries: state.virus_data.countries
});

export default connect(mapStateToProps)(AllCountriesInfo);











