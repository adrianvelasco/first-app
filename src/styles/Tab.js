import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

export const themeTab = createMuiTheme ({
    typography: {
        useNextVariants: true,
    },
    palette:
    {primary:{
    main: '#ff5722',
    }}
 });


