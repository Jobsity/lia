import React, { Component } from "react";
import { Bar } from "react-chartjs";
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from "./styles";

class ScoresView extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { loading, data, classes } = this.props;

    const dataa = {
      labels: ['0%','10%','20%','30%','40%','50%','60%','70%','80%','90%','100%'],
      datasets: [
        {
          label: "Completed",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [0,0,0,1,0,0,0,0,0,0,8]
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
            <Bar data={dataa} />
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