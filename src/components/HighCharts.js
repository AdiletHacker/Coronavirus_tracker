import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Chart from "react-apexcharts";

const HighCharts = (props) => {
    const countries = props.countries.slice(1, 21);

    const state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: countries.map(el => el.country)
            }
        },
        series: [
            {
                name: "series",
                data: countries.map(el => el.cases)
            }
        ]
    };

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="100%"
        />
    );
};



const mapStateToProps = (state) => ({
    countries: state.virus_data.countries
});


export default connect(mapStateToProps)(HighCharts);



