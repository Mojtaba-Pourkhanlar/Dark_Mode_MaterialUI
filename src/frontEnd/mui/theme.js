import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#E0E0E0",
          200: "#CACACA",
          300: "#B3B3B3",
          400: "#9D9D9D",
          500: "#868686",
          600: "#707070",
          700: "#5A5A5A",
          800: "#434343",
          900: "#2D2D2D",
        },
        primary: {
          100: "#3F51B5",
          200: "#3949A3",
          300: "#324191",
          400: "#2C397F",
          500: "#26316D",
          600: "#20295B",
          700: "#192048",
          800: "#131836",
          900: "#0D1024",
        },
        error: {
          100: "#F44336",
          200: "#F32314",
          300: "#DB190C",
          400: "#BB160A",
          500: "#9C1208",
          600: "#7D0E07",
          700: "#5E0B05",
          800: "#3E0703",
          900: "#1F0402",
        },
        warning: {
          100: "#FFEB3B",
          200: "#FFE81C",
          300: "#FBE200",
          400: "#DCC500",
          500: "#BCA900",
          600: "#9D8D00",
          700: "#7E7100",
          800: "#5E5500",
          900: "#3F3800",
        },
        success: {
          100: "#4CAF50",
          200: "#449E48",
          300: "#3D8C40",
          400: "#357B38",
          500: "#2E6930",
          600: "#265828",
          700: "#1E4620",
          800: "#173518",
          900: "#0F2310",
        },
        secondary: {
          100: "#9C27B0",
          200: "#8A229C",
          300: "#791E89",
          400: "#671A75",
          500: "#561562",
          600: "#45114E",
          700: "#340D3B",
          800: "#220927",
          900: "#110414",
        },
      }
    : {
        grey: {
          100: "#2D2D2D",
          200: "#434343",
          300: "#5A5A5A",
          400: "#707070",
          500: "#868686",
          600: "#9D9D9D",
          700: "#B3B3B3",
          800: "#CACACA",
          900: "#E0E0E0",
        },
        primary: {
          100: "#0D1024",
          200: "#131836",
          300: "#192048",
          400: "#20295B",
          500: "#26316D",
          600: "#2C397F",
          700: "#324191",
          800: "#3949A3",
          900: "#3F51B5",
        },
        error: {
          100: "#1F0402",
          200: "#3E0703",
          300: "#5E0B05",
          400: "#7D0E07",
          500: "#9C1208",
          600: "#BB160A",
          700: "#DB190C",
          800: "#F32314",
          900: "#F44336",
        },
        warning: {
          100: "#3F3800",
          200: "#5E5500",
          300: "#7E7100",
          400: "#9D8D00",
          500: "#BCA900",
          600: "#DCC500",
          700: "#FBE200",
          800: "#FFE81C",
          900: "#FFEB3B",
        },
        success: {
          100: "#0F2310",
          200: "#173518",
          300: "#1E4620",
          400: "#265828",
          500: "#2E6930",
          600: "#357B38",
          700: "#3D8C40",
          800: "#449E48",
          900: "#4CAF50",
        },
        secondary: {
          100: "#110414",
          200: "#220927",
          300: "#340D3B",
          400: "#45114E",
          500: "#561562",
          600: "#671A75",
          700: "#791E89",
          800: "#8A229C",
          900: "#9C27B0",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            grey: {
              dark: colors.grey[800],
              main: colors.grey[500],
              light: colors.grey[200],
            },
            primary: {
              dark: colors.primary[800],
              main: colors.primary[500],
              light: colors.primary[200],
            },
            error: {
              dark: colors.error[800],
              main: colors.error[500],
              light: colors.error[200],
            },
            warning: {
              dark: colors.warning[800],
              main: colors.warning[500],
              light: colors.warning[200],
            },
            success: {
              dark: colors.success[800],
              main: colors.success[500],
              light: colors.success[200],
            },

            secondary: {
              dark: colors.secondary[800],
              main: colors.secondary[500],
              light: colors.secondary[200],
            },
            background: {
              default: colors.primary[900],
            },
          }
        : {
            // palette values for light mode
            grey: {
              light: colors.grey[200],
              main: colors.grey[500],
              dark: colors.grey[700],
            },
            primary: {
              dark: colors.primary[200],
              main: colors.primary[500],
              light: colors.primary[800],
            },
            error: {
              dark: colors.error[200],
              main: colors.error[500],
              light: colors.error[800],
            },
            warning: {
              dark: colors.warning[200],
              main: colors.warning[500],
              light: colors.warning[800],
            },
            success: {
              dark: colors.success[200],
              main: colors.success[500],
              light: colors.success[800],
            },
            secondary: {
              dark: colors.secondary[200],
              main: colors.secondary[500],
              light: colors.secondary[800],
            },
            background: {
              default: colors.grey[900],
            },
          }),
    },
    typography: {
      fontFamily: "vazir, roboto",
      fontSize: 14,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 18,
      },
      h6: {
        fontSize: 16,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const getTheme = () => {
  const mode = localStorage.getItem("mode");
  if (!mode) {
    localStorage.setItem("mode", "dark");
    return "dark";
  } else {
    return mode;
  }
};

export const useMode = () => {
  const [mode, setMode] = useState(getTheme);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [],
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("mode", mode);
    };
    refreshTheme();
  }, [mode]);

  return [theme, colorMode];
};
