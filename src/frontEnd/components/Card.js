import { Box, Typography, useTheme } from "@mui/material";
import me from "../images/01.JPG";

const Card = () => {
  const theme = useTheme();
  const colors = theme.palette;

  const bgDesign = {
    backgroundColor:
      colors.mode === "dark" ? colors.primary.main : colors.grey.main,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mt: "150px",
    width: "700px",
    borderRadius: "10px",
    overflow: "hidden",
  };

  return (
    <Box align="center">
      <Box sx={bgDesign}>
        <img src={me} alt="me" width="250px" />
        <Typography variant="h2" mx="20px">
          Mojtaba Pourkhanlar
        </Typography>
      </Box>
    </Box>
  );
};

export default Card;
