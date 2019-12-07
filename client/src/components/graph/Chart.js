import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Rest',
		'Good',
		'Excellent'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const Chart = (props) => {
    return (


      <div className="botBorder">
        <h2 className="heading">Overall Patient Satifaction</h2>
        <Doughnut data={data} />
				<p className="descrip"> TX: 34% | US: 76% | Target: 90% </p>
      </div>
    );
}

// Graphs.propTypes = {
// };
//
// const mapStateToProps = state => ({
// });

export default Chart;
