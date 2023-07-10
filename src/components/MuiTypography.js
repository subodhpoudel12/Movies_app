import React from "react";
import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1"> h1 headings</Typography>
      <Typography variant="h2"> h2 headings</Typography>
      <Typography variant="h3"> h3 headings</Typography>
      <Typography variant="h4" component='h1' gutterBottom> h4 headings</Typography>
      <Typography variant="h5"> h5 headings</Typography>
      <Typography variant="h6"> h6 headings</Typography>
      <Typography variant="subtitle1"> subtitle1 headings</Typography>
      <Typography variant="subtitle2"> subtitle2 headings</Typography>
      <Typography variant="body1">Lorem Ipsum text are the great text that are essential for the great amount of adding the text that are up to the final end of the text</Typography>
      <Typography variant="body2"> Lorem Ipsum text are the great text that are essential for the great amount of adding the text that are up to the final end of the text</Typography>
    </div>
  );
};

export default MuiTypography;
