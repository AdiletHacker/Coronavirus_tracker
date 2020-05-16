import React, { useState, useEffect, Fragment } from 'react';
import ReactPaginate from 'react-paginate';
import "./Pagination.scss";
import { connect } from 'react-redux';
import { Card, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage] = useState(10);
    const pageCount = Math.ceil(props.searchCountries.length / countriesPerPage);

    const handlePageClick = (e) => {
        setCurrentPage(e.selected);
    };
    const lastCountryIndex = (currentPage + 1) * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountries = props.searchCountries.slice(firstCountryIndex, lastCountryIndex);

    const countryData = currentCountries.map(country => <Col sm="6" className="mb-3">
        <Card body inverse style={{ backgroundColor: "#333", color: "#E2E2E2" }}>
            <CardTitle style={{ fontSize: "22px", fontWeight: "bold", color: "white" }}>{country.country}</CardTitle>
            <CardSubtitle style={{ color: "#E2E2E2" }}>Cases: {country.cases} | Today: {country.todayCases} | Active: {country.active}</CardSubtitle>
            <CardSubtitle style={{ color: "#E2E2E2" }}>Deaths: {country.deaths} | Today: {country.todayDeaths}</CardSubtitle>
            <CardSubtitle style={{ color: "#E2E2E2" }}>Recovered: {country.recovered} | Critical: {country.critical}</CardSubtitle>
        </Card>
    </Col>)


    return <Fragment>
        {countryData}
        <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            initialPage={0}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
    </Fragment>
}

const mapStateToProps = (state) => ({
    countries: state.virus_data.countries
});

export default connect(mapStateToProps)(Pagination);


