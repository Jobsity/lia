import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#231E20', // Jobsity gray
      white: '#fff'
    },
    secondary: {
      main: '#46A8D8' // Jobsity blue
    },
    status: {
      hidden: '#296b8c' // this is a darker color than secondary.main
    }
  },
  /**
   * @description injectors let us recycle code across our app
   */
  inject: {
    /**
     * @description inject flex properties inside a class.
     */
    flex: ({ dir, justify, alignItems } = {}) => ({
      display: 'flex',
      flexDirection: dir || 'row',
      justifyContent: justify || 'flex-start',
      alignItems: alignItems || 'stretch'
    })
  }
});

export default theme;
