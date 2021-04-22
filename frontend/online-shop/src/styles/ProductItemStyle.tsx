import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const productItemStyle = makeStyles((theme: Theme) =>
  createStyles({
    tdStyle: {
      border: "1px solid",
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.fontSize,
    },
  })
);
