import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import ReactMarkdown from 'react-markdown';
import styles from './styles';

const placeholder = `Add any notes you want to share with your team about this candidate. Markdown is supported.\n\nThe Entire review is for internal use and won't be shared with the candidate.`;

class Evaluate extends Component {
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

  componentDidMount() {
    const { evaluation } = this.props;
    if(evaluation) {
      this.setState({
        overall: evaluation.overall,
        easyness: evaluation.easyness,
        codeStyle: evaluation.codeStyle,
        maintainability: evaluation.maintainability,
        codeStructure: evaluation.codeStructure,
        defensiveCoding: evaluation.defensiveCoding,
        feedback: evaluation.feedback,
      });
    }
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
    const { feedback, preview } = this.state;
    if (feedback !== '') {
      this.setState({preview: !preview});
    }
  }

  handleFeedback = event => {
    this.setState({feedback: event.target.value.split('\n')});
  }

  handleSubmit = event => {
    event.preventDefault();
    const { overall, easyness, codeStyle, codeStructure, maintainability, defensiveCoding, feedback } = this.state;

    const evaluation = {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3 style={styles.title}>Overall Rating</h3>
          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Great
            </span>
          </div>
          <h3 style={styles.title}>Qualities</h3>
          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Easy to Read
            </span>
          </div>

          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Advanced Grasp of Language
            </span>
          </div>

          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Easy to Mantain
            </span>
          </div>

          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Well Structured
            </span>
          </div>

          <div style={styles.selector}>
            <span style={styles.leftLabel}>
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
            <span style={styles.rightLabel}>
              Handles Edge Cases
            </span>
          </div>
          <h3 style={styles.title}>Feedback Notes</h3>
          <Button style={{float: 'right'}} onClick={this.togglePreview}><FontAwesomeIcon icon={preview?faEye:faEyeSlash}/> Preview</Button>
          {preview?
            <textarea 
              placeholder={placeholder}
              cols='59'
              rows='10'
              value={feedback?feedback.join('\n'):null}
              onChange={this.handleFeedback}
              />
              :
            <div style={styles.previewDiv}>
              <ReactMarkdown
                source={feedback?feedback.join('  \n'):null}
                />
            </div>
          }
          <div style={styles.buttonArea}>
            <Button style={styles.button} type="submit">Add Overall Review</Button>
            <Button style={styles.button}>Close Review Editor</Button>
          </div>
        </form>
      </div>
    );
  }
}

Evaluate.propTypes = {
  evaluation: PropTypes.shape({
    overall: PropTypes.string,
    easyness: PropTypes.string,
    codeStyle: PropTypes.string,
    maintainability: PropTypes.string,
    codeStructure: PropTypes.string,
    defensiveCoding: PropTypes.string,
    feedback: PropTypes.array,
  })
};

Evaluate.defaultProps = {
  evaluation: {
    overall: 'normal',
    easyness: 'normal',
    codeStyle: 'normal',
    maintainability: 'normal',
    codeStructure: 'normal',
    defensiveCoding: 'normal',
    feedback: '',
  }
};

export default Evaluate;
