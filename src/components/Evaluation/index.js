import React, { Component } from 'react';
import { Radio, RadioGroup, Button, LinearProgress, Paper } from '@material-ui/core';

const title = {
  textAlign: 'center'
};

const selector = {
  display: 'grid', 
  gridTemplateColumns: '1fr 144px 1fr'
};

const leftLabel = {
  textAlign: 'right', 
  padding: '15px 0'
};

const rightLabel = {
  textAlign: 'left',
  padding: '15px 0'
};

const buttonArea = {
  display: 'flex',
};

const button = {
  flex: '1',
};

const progress = {
  position: 'absolute', 
  left: '43%', 
  top: '-0.5em', 
  fontSize: '0.7em', 
  fontWeight: 'bold'
};

const placeholder = `Add any notes you want to share with your team about this solution. Markdown is supported.\n\nThe Entire review is for internal use and won't be shared with the candidate.`;

class Evaluation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      easyness: '5',
      codeStyle: '5',
      maintainability: '5',
      codeStructure: '5',
      defensiveCoding: '5',
    };
  }

  handleChange = (event, selector) => {
    switch (selector) {
      case 'easyness':
        this.setState({easyness: event.target.value});
        break;

      case 'style':
        this.setState({codeStyle: event.target.value});
        break;

      case 'structure':
        this.setState({codeStructure: event.target.value});
        break;

      case 'mantainability':
        this.setState({maintainability: event.target.value});
        break;

      case 'defense':
        this.setState({defensiveCoding: event.target.value});
        break;
    
      default:
        break;
    }
  }

  render() {
    const { easyness, codeStyle, codeStructure, maintainability, defensiveCoding} = this.state;
    const rating = (parseInt(easyness) + parseInt(codeStructure) + parseInt(codeStyle) + parseInt(maintainability) + parseInt(defensiveCoding))*100/50;
    return (
      <Paper elevation={1} square>
        <h3 style={title}>Overall Rating</h3>
        <div style={selector}>
          <span style={{textAlign: 'right'}}>
            Poor
          </span>
          <span style={{position: 'relative'}}>
            <LinearProgress 
              style={{margin: '8px 2px'}}
              variant="determinate"
              value={rating}
            />
            <span style={progress}>{`${rating}%`}</span>
          </span>
          <span style={{textAlign: 'left'}}>
            Great
          </span>
        </div>
        <form>
          <h3 style={title}>Qualities</h3>
          <div style={selector}>
            <span style={leftLabel}>
              Hard to Understand
            </span>
            <RadioGroup
              name="easyness"
              value={easyness}
              row
              onChange={(e) => this.handleChange(e, 'easyness')}
            >
              <Radio value='0'/>
              <Radio value='5'/>
              <Radio value='10'/>
            </RadioGroup>
            <span style={rightLabel}>
              Easy to Read
            </span>
          </div>

          <div style={selector}>
            <span style={leftLabel}>
              Rudimentary Coding Style
            </span>
            <RadioGroup
              name="codeStyle"
              value={codeStyle}
              row
              onChange={(e) => this.handleChange(e, 'style')}
            >
              <Radio value='0'/>
              <Radio value='5'/>
              <Radio value='10'/>
            </RadioGroup>
            <span style={rightLabel}>
              Advanced Grasp of Language
            </span>
          </div>

          <div style={selector}>
            <span style={leftLabel}>
              Hard to Mantain
            </span>
            <RadioGroup
              name="codeMaintain"
              value={maintainability}
              row
              onChange={(e) => this.handleChange(e, 'mantainability')}
            >
              <Radio value='0'/>
              <Radio value='5'/>
              <Radio value='10'/>
            </RadioGroup>
            <span style={rightLabel}>
              Easy to Mantain
            </span>
          </div>

          <div style={selector}>
            <span style={leftLabel}>
              Poorly Structured
            </span>
            <RadioGroup
              name="codeStructure"
              value={codeStructure}
              row
              onChange={(e) => this.handleChange(e, 'structure')}
            >
              <Radio value='0'/>
              <Radio value='5'/>
              <Radio value='10'/>
            </RadioGroup>
            <span style={rightLabel}>
              Well Structured
            </span>
          </div>

          <div style={selector}>
            <span style={leftLabel}>
              Lack of Defensive Coding
            </span>
            <RadioGroup
              name="codeDefense"
              value={defensiveCoding}
              row
              onChange={(e) => this.handleChange(e, 'defense')}
            >
              <Radio value='0'/>
              <Radio value='5'/>
              <Radio value='10'/>
            </RadioGroup>
            <span style={rightLabel}>
              Handles Edge Cases
            </span>
          </div>

          <h3 style={title}>Feedback Notes</h3>
          <textarea 
            name="feedback" 
            cols="60" 
            rows="10" 
            placeholder={placeholder} 
          />
          <div style={buttonArea}>
            <Button style={button}>Add Overall Review</Button>
            <Button style={button}>Close Review Editor</Button>
          </div>
        </form>
      </Paper>
    );
  }
}

export default Evaluation;
