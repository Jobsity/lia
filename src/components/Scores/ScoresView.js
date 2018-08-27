import React, { Component } from "react";
import { Bar } from "react-chartjs";
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { api } from '../../mockServer';

import styles from "./styles";

class ScoresView extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  render() {
    const { loading, data, classes } = this.props;

    let labels = data.chartData?data.chartData.labels:[];
    let dataValue = data.chartData?data.chartData.data:[];

    const chart = {
      labels,
      datasets: [
        {
          label: "Completed",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: dataValue,
        }
      ]
    };
    

    return(
      <div>
        {loading ? (
          <Typography component="p">
            <CircularProgress 
              classes={{ root: classes.loading }}
              size={150}
              color="secondary"
            />
          </Typography>
        ) : (
          <div>
            <Bar data={chart} ref="barChart"/>
            <table>
              <tr>
                <td>
                  <Typography component="p">
                    Total: 
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {data.total}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">
                    Pass Rate:
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {`${data.passRate}%`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">
                    Min Score: 
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {`${data.minScore}%`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">
                    Max Score: 
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {`${data.maxScore}%`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">
                    Average Score:  
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {`${data.averageScore}%`}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td>
                  <Typography component="p">
                  Standard Deviation:
                  </Typography>
                </td>
                <td>
                  <Typography component="p">
                    {`${data.deviationStd}%`}
                  </Typography>
                </td>
              </tr>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ScoresView);