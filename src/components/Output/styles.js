const styles = theme => ({
  container: {
    height: '100%',
  },
  passedList: {
    color: '#00FF00',
    backgroundColor: 'background-color: rgba(0, 255, 0, 0.3)',
  },
  failedList: {
    color: '#FF0000',
    backgroundColor: 'background-color: rgba(0, 255, 0, 0.3)',
  },
  error: {
    color: '#FF4800',
    backgroundColor: 'background-color: rgba(255, 72, 0, 0.3)',
  },
  noTestsResults: {
    margin: '1rem'
  },
  expandible: {
    color: '#FFFFFF',
  },
  typography: {
    margin: '1rem',
  },
  progress: {
    margin: '1rem',
  },
  success: {
    margin: '2rem',
    color: '#00FF00',
    textAlign: 'center',
  },
  successText: {
    margin: '1rem',
    color: 'inherit',
  },
});

export default styles;
