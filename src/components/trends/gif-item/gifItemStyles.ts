export const gifItemStyles = {
  height: '200px',
  flexBasis: 'calc(33.333333% - 7px)',
  boxSizing: 'border-box',
  position: 'relative',
  '@media only screen and (max-width:500px)': {
    flexBasis: 'calc(50% - 5px)',
  },
  '& img': {
    height: '200px',
    width: '100%',
  },
};
