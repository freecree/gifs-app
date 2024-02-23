export const appNavigationStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '50px',
};

export const settingButtonStyles = {
  backgroundColor: '#fff',
  color: 'primary.main',
  '&:hover': {
    backgroundColor: '#fff',
  },
};

export const buttonGroupStyles = {
  '@media only screen and (max-width:400px)': {
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    boxShadow: 'none',
    '& .MuiButton-root': {
      borderRadius: '4px',
    }
  },
};
