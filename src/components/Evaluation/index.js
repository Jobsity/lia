import React, { Component } from 'react';
import { Radio, RadioGroup, Button, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import ReactMarkdown from 'react-markdown';

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

const previewDiv = {
  maxHeight: '150px',
  overflowY: 'auto',
  width: '100%',
}

const placeholder = `Add any notes you want to share with your team about this candidate. Markdown is supported.\n\nThe Entire review is for internal use and won't be shared with the candidate.`;

class Evaluation extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      overall: 'normal',
      easyness: 'normal',
      codeStyle: 'normal',
      maintainability: 'normal',
      codeStructure: 'normal',
      defensiveCoding: 'normal',
      preview: true,
      feedback: '',
    };
  }

  handleChange = (event, sel) => {
    switch (sel) {
      case 'overall':
        this.setState({overall: event.target.value});
        break;
      
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

  togglePreview = () => {
    let { feedback, preview } = this.state;
    if (feedback !== '') {
      this.setState({preview: !preview});
    }
  }

  handleFeedback = event => {
    this.setState({feedback: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const { overall, easyness, codeStyle, codeStructure, maintainability, defensiveCoding, feedback } = this.state;

    let evaluation = {
      candidate: '',
      evaluator: '',
      rating: {
        overall,
        easyness,
        codeStyle,
        codeStructure,
        maintainability,
        defensiveCoding,
        feedback,
      }
    };

    // API call to add evaluation to backend
    // axios.post(args, evaluation);
    console.log('added evaluation: ', evaluation);
    
  }

  render() {
    const { overall, easyness, codeStyle, codeStructure, maintainability, defensiveCoding, feedback, preview} = this.state;
    return (
      <Paper square>
        <form onSubmit={this.handleSubmit}>
          <h3 style={title}>Overall Rating</h3>
          <div style={selector}>
            <span style={leftLabel}>
              Poor
            </span>
            <RadioGroup
              name="overall"
              value={overall}
              row
              onChange={(e) => this.handleChange(e, 'overall')}
            >
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
            </RadioGroup>
            <span style={rightLabel}>
              Great
            </span>
          </div>
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
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
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
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
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
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
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
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
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
              <Radio value='poor'/>
              <Radio value='normal'/>
              <Radio value='great'/>
            </RadioGroup>
            <span style={rightLabel}>
              Handles Edge Cases
            </span>
          </div>
          <h3 style={title}>Feedback Notes</h3>
          <Button style={{float: 'right'}} onClick={this.togglePreview}><FontAwesomeIcon icon={preview?faEye:faEyeSlash}/> Preview</Button>
          {preview?
            <textarea 
              placeholder={placeholder}
              cols='59'
              rows='10'
              value={feedback}
              onChange={this.handleFeedback}
              />
              :
            <div style={previewDiv}>
              <ReactMarkdown
                source={feedback}
                />
            </div>
          }
          <div style={buttonArea}>
            <Button style={button} type="submit">Add Overall Review</Button>
            <Button style={button}>Close Review Editor</Button>
          </div>
        </form>
      </Paper>
    );
  }
}

export default Evaluation;
