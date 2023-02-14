import { createTheme, ThemeOptions, Theme } from "@mui/material";

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5", // the default primary color
    },
    secondary: {
      main: "#f50057", // the default secondary color
    },
  },
}

export const defaultTheme: Theme = createTheme()

export const themeConfig: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        square: true,
        TransitionProps: {
          unmountOnExit: true,
        },
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, .125)",
          boxShadow: "none",
          transition: defaultTheme.transitions.create("margin-left"),
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
          "&.Mui-disabled": {
            marginLeft: 32
          }
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, .125)",
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56
          }
        },
        content: {
          alignItems: "center",
          justifyContent: "space-between",
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        }
      }
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          "& .MuiPaper-root": {
            position: "static",
          },
        },
        paper: {},
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121212",
        },
      }
    }
  }
}

export default createTheme(themeConfig)

import { ThemeOptions as ThemeOptions2} from '@mui/material/styles';

export const themeOptions: ThemeOptions2 = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#5091cd',
    },
    secondary: {
      main: '#03cdce',
    },
    error: {
      main: '#ff6666',
    },
    warning: {
      main: '#ffdf4c',
    },
    success: {
      main: '#00b050',
    },
    info: {
      main: '#d8dce3',
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#689f38',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
    MuiList: {
      dense: true,
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiButton: {
      size: 'small',
    },
    MuiButtonGroup: {
      size: 'small',
    },
    MuiCheckbox: {
      size: 'small',
    },
    MuiFab: {
      size: 'small',
    },
    MuiFormControl: {
      margin: 'dense',
      size: 'small',
    },
    MuiFormHelperText: {
      margin: 'dense',
    },
    MuiIconButton: {
      size: 'small',
    },
    MuiInputBase: {
      margin: 'dense',
    },
    MuiInputLabel: {
      margin: 'dense',
    },
    MuiRadio: {
      size: 'small',
    },
    MuiSwitch: {
      size: 'small',
    },
    MuiTextField: {
      margin: 'dense',
      size: 'small',
    },
    MuiTooltip: {
      arrow: true,
    },
  },
  typography: {
    fontSize: 18,
    fontFamily: 'Assistant',
    htmlFontSize: 18,
    fontWeightBold: 900,
    fontWeightMedium: 700,
    h1: {
      fontSize: '5rem',
      fontWeight: 300,
    },
    h2: {
      fontSize: '4rem',
    },
    h3: {
      fontSize: '3.3rem',
    },
    h4: {
      fontSize: '2.6rem',
    },
    h5: {
      fontSize: '2rem',
    },
    h6: {
      fontSize: '1.6rem',
    },
    subtitle1: {
      fontSize: '1.3rem',
    },
    subtitle2: {
      fontSize: '1.1rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
};

// export default createTheme(themeOptions)
