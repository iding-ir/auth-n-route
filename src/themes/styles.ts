import { Theme } from "@material-ui/core/styles";

export const styles = (theme: Theme) => {
  return {
    "@global": {
      "*": {
        scrollbarColor: `${theme.palette.primary.dark} rgba(0, 0, 0, 0)`,
        scrollbarWidth: "thin",
      },

      "* ::-webkit-scrollbar": {
        width: theme.spacing(1),
      },

      "* ::-webkit-scrollbar-track": {
        background: "rgba(0, 0, 0, 0)",
      },

      "* ::-webkit-scrollbar-thumb": {
        borderRadius: theme.spacing(1),
        background: theme.palette.primary.dark,
        transition: "all ease 0.3s",
      },

      "* ::-webkit-scrollbar-thumb:hover": {
        background: theme.palette.primary.dark,
      },
    },
  };
};
