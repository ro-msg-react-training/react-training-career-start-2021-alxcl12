import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const productDetailStyle = makeStyles((theme: Theme) =>
  createStyles({
    headingStyle: {
      marginTop: "50px",
      marginLeft: "40px",
      fontFamily: theme.typography.fontFamily,
      display: "inline-block",
    },
    buttonStyle: {
      float: "right",
      marginTop: "50px",
      marginRight: "300px",
    },
  })
);
