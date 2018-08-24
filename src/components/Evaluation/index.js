import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Collapse, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTimesCircle, faEdit, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { Typography } from 'material-ui/styles/typography';

import Evaluate from './Evaluate';
import styles from './styles';

class Evaluation extends Component {
  constructor() {
    super();
    this.state = {
      toggleView: false,
      evaluationView: {},
      editable: false,
    };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
    this.hideEvaluation = this.hideEvaluation.bind(this);
  }

  handleDelete() {
    // backend delete method 
    this.setState({
      toggleView: false,
      evaluationView: {}
    });
  }

  handleEdit(ev) {
    this.setState({
      toggleView: true,
      evaluationView: ev,
      editable: true,
    });
  }

  handleAdd() {
    this.setState({
      toggleView: true,
      evaluationView: {},
      editable: true,
    });
  }

  handlePreview(ev) {
    this.setState({
      toggleView: true,
      evaluationView: ev,
      editable: false,
    });
  }

  hideEvaluation() {
    this.setState({
      toggleView: false,
    });
  }
  
  render() {

    // mock server data needed for list of evaluations 
    const evaluationList = [
      {
        id: 1,
        title: 'Evaluation 1',
        rating: {
          overall: 'normal',
          easyness: 'poor',
          codeStyle: 'great',
          maintainability: 'great',
          codeStructure: 'normal',
          defensiveCoding: 'great',
          feedback: ['## Good knowledge', '- uses array methods very well','- handles exceptions'],
        }
      },
      {
        id: 2,
        title: 'Evaluation 2',
        rating: {
          overall: 'great',
          easyness: 'normal',
          codeStyle: 'great',
          maintainability: 'normal',
          codeStructure: 'great',
          defensiveCoding: 'great',
          feedback: ['## Impresive', '- usage of uncommon methos','- styling is amazing', '- Structure off the charts'],
        }
      }
    ];

    const { toggleView, evaluationView, editable } = this.state;
    const { classes } = this.props;

    return (
      <div style={{padding: '0.2em'}}>
        <ul className={classes.list}>
          <li><h3>List of Evaluations</h3></li>
          {evaluationList.map(evaluation => 
            <li key={evaluation.id} className={classes.listItem}>
              <span className={classes.itemTitle}>
                {evaluation.title}
              </span>
              <span>
                <Button size='small' onClick={() => this.handlePreview(evaluation)}><FontAwesomeIcon icon={faEye}/></Button>
                <Button size='small' onClick={() => this.handleEdit(evaluation)}><FontAwesomeIcon icon={faEdit}/></Button>
                <Button size='small' onClick={this.handleDelete}><FontAwesomeIcon icon={faTimesCircle}/></Button>
              </span>
            </li>
          )}
          <li><Button onClick={this.handleAdd}><FontAwesomeIcon icon={faPlusSquare}/>Add Evaluation</Button></li>
        </ul>
        <Collapse in={toggleView}>
          {toggleView&&
          <Evaluate evaluation={evaluationView} editable={editable} hideEvaluation={this.hideEvaluation}/>}
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styles)(Evaluation);