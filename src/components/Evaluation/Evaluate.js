import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
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
    const { evaluation, editable } = this.props;
    if(evaluation.id) {
      this.setState({
        overall: evaluation.rating.overall,
        easyness: evaluation.rating.easyness,
        codeStyle: evaluation.rating.codeStyle,
        maintainability: evaluation.rating.maintainability,
        codeStructure: evaluation.rating.codeStructure,
        defensiveCoding: evaluation.rating.defensiveCoding,
        feedback: evaluation.rating.feedback,
        preview: editable,
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

      case 'maintainability':
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
    const { overall, easyness, codeStyle, maintainability, codeStructure, defensiveCoding, feedback, preview} = this.state;
    const { editable, hideEvaluation } = this.props;
    
    const qualities = [
      {
        tag: 'easyness',
        leftLbl: 'Hard to Understand',
        rightLbl: 'Easy to Read',
        value: easyness,
      },
      {
        tag: 'style',
        leftLbl: 'Rudimentary Coding Style',
        rightLbl: 'Advanced Grasp of Language',
        value: codeStyle,
      },
      {
        tag: 'maintainability',
        leftLbl: 'Hard to Mantain',
        rightLbl: 'Easy to Mantain',
        value: maintainability,
      },
      {
        tag: 'structure',
        leftLbl: 'Poorly Structured',
        rightLbl: 'Well Structured',
        value: codeStructure,
      },
      {
        tag: 'defense',
        leftLbl: 'Lack of Defensive Coding',
        rightLbl: 'Handles Edge Cases',
        value: defensiveCoding,
      },
    ];

    return (
      <div>
        <h3>Evaluation</h3>
        <form onSubmit={this.handleSubmit}>
          <Button size='small' onClick={hideEvaluation} style={{float: 'right'}}><FontAwesomeIcon icon={faTimesCircle}/></Button>
          <h3 style={styles.title}>Overall Rating</h3>
          <div style={styles.selector}>
            <span style={styles.leftLabel}>
              Poor
            </span>
            <RadioGroup
              name="overall"
              value={overall}
              row
              onChange={(e) => editable?this.handleChange(e, 'overall'):null}
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
          {qualities.map(quality => 
            <div style={styles.selector}>
              <span style={styles.leftLabel}>
                {quality.leftLbl}
              </span>
              <RadioGroup
                name={quality.tag}
                value={quality.value}
                row
                onChange={(e) => editable?this.handleChange(e, quality.tag):null}
              >
                <Radio value='poor'/>
                <Radio value='normal'/>
                <Radio value='great'/>
              </RadioGroup>
              <span style={styles.rightLabel}>
                {quality.rightLbl}
              </span>
            </div>
          )}
          <h3 style={styles.title}>Feedback Notes</h3>
          {editable&&
          <Button style={{float: 'right'}} onClick={this.togglePreview}><FontAwesomeIcon icon={preview?faEye:faEyeSlash}/> Preview</Button>}
          {preview?
            <textarea 
              placeholder={placeholder}
              cols='59'
              rows='10'
              value={feedback?feedback.join('\n'):null}
              onChange={editable?this.handleFeedback:null}
              />
              :
            <div style={styles.previewDiv}>
              <ReactMarkdown
                source={feedback?feedback.join('  \n'):null}
                />
            </div>
          }
          {editable&&
          <div style={styles.buttonArea}>
            <Button style={styles.button} type="submit">Add Overall Review</Button>
            <Button style={styles.button} onClick={hideEvaluation}>Close Review Editor</Button>
          </div>}
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
  }),
  editable: PropTypes.bool,
};

Evaluate.defaultProps = {
  evaluation: {
    overall: 'normal',
    easyness: 'normal',
    codeStyle: 'normal',
    maintainability: 'normal',
    codeStructure: 'normal',
    defensiveCoding: 'normal',
    feedback: [],
  },
  editable: true,
};

export default Evaluate;
