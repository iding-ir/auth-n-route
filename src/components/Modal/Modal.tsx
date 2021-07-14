import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>

      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    minWidth: "240px",
    [theme.breakpoints.up("sm")]: {
      minWidth: "360px",
    },
    [theme.breakpoints.up("md")]: {
      minWidth: "480px",
    },
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

interface IPropsModal {
  open: boolean;
  title: string;
  content: JSX.Element;
  toolbar?: JSX.Element;
  handleClose: () => void;
}

export const Modal = (props: IPropsModal) => {
  const { open, title, content, toolbar, handleClose } = props;
  const { t } = useTranslation();

  const renderToolbar = () =>
    toolbar || (
      <Button autoFocus onClick={handleClose} color="primary">
        {t("modal.close")}
      </Button>
    );

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="dialog-title" open={open}>
        <DialogTitle id="dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>

        <DialogContent dividers>{content}</DialogContent>

        <DialogActions>{renderToolbar()}</DialogActions>
      </Dialog>
    </div>
  );
};
