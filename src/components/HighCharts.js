import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Bar } from 'react-chartjs-2';

const HighCharts = (props) => {
    const countries = props.countries.slice(1, 16);

    const data = {
        labels: countries.map(el => el.country),
        datasets: [{
            backgroundColor: '#2969FF',
            borderColor: '#2969FF',
            borderWidth: 1,
            data: countries.map(el => el.cases)
        }]
    };

    const options = {
        title: {
            display: true,
            text: "15 most infected countries",
            fontSize: 25,
            padding: 20,
            fontColor: "silver",
        },
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: "silver",
                },
                stacked: true
            }],
            yAxes: [{
                ticks: {
                    stepSize: 1000000,
                    beginAtZero: true,
                    fontColor: "silver",
                },
                stacked: true
            }]
        }
    };
    return <Fragment>
        <Bar data={data} options={options} />
    </Fragment>

}

const mapStateToProps = (state) => ({
    countries: state.virus_data.countries
});


export default connect(mapStateToProps)(HighCharts);



