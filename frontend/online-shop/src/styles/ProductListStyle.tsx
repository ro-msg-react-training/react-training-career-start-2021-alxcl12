import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const productListStyle = makeStyles((theme: Theme) =>
  createStyles({
    tableStyle: {
      width: "750px",
      border: "2px solid",
      borderCollapse: "collapse",
      marginLeft: "40px",
    },
    headingStyle: {
      marginTop: "50px",
      marginLeft: "40px",
      fontFamily: theme.typography.fontFamily,
      display: "inline-block",
    },
    tableHeaderStyle: {
      border: "1px solid",
      borderCollapse: "collapse",
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
    },
    buttonColumnStyle: {
      width: "5px",
    },
    buttonStyle: {
      marginLeft: "50px",
      float: "right",
      marginRight: "400px",
      marginTop: "50px",
    },
  })
);
