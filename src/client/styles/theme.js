import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#231E20' // Jobsity black
    },
    secondary: {
      main: '#46A8D8' // Jobsity blue
    },
  },
  /**
   * @description injectors let us recycle code across our app
   */
  inject: {
    /**
     * @description inject flex properties inside a class.
     */
    flex: ({dir = 'row'} = {}) => ({
      display: 'flex',
      flexDirection: dir
    })
  }
});

export default theme;
