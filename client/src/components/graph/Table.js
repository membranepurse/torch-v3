import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
   graph: {
     readmin,
     patFall,
     medErr,
     recommend
   }
 }) => {
    return (
      <div className="botBorder">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="hide-sm">Rural TX</th>
              <th className="hide-sm">Benchmark</th>
              <th className="hide-sm">Our Target</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>30-Day Readmission Rate: {readmin} % </td>
            <td>18.2%</td>
            <td>less than 10%</td>
            <td>less than 15%</td>
          </tr>
          <tr>
            <td>Patient Fall Rate: {patFall} % </td>
            <td className="hide-sm">5.0</td>
            <td>6.2/1k pts.</td>
            <td>less than 4.1/qtr.</td>
          </tr>
          <tr>
            <td>Medication Error Rate: {medErr} %</td>
            <td className="hide-sm">10.5%</td>
            <td>less than 5.0</td>
            <td>less than 5.0</td>
          </tr>
          <tr>
            <td>
            Patient Willingness to recommend: {recommend} %
            </td>
            <td className="hide-sm">73.4%</td>
            <td>72.0%</td>
            <td>85.0%</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
}

Table.propTypes = {
  graph: PropTypes.object.isRequired
};
//
// const mapStateToProps = state => ({
// });

export default Table;
