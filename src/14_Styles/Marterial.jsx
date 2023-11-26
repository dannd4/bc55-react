import React from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fb4226",
    },
  },
});

const CustomButton = styled(Button)`
  width: 100%;
  padding: 20px 25px;
`;

export default function Marterial() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Marterial</h1>

      <h3>Buttons</h3>
      <Button variant="text" color="primary">
        Text
      </Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <Button variant="outlined" color="error">
        Outlined
      </Button>

      <CustomButton variant="contained">Custom</CustomButton>
    </ThemeProvider>
  );
}
