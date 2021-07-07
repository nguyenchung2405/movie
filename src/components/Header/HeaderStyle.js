import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,.95) !important",
    boxShadow: "0 0 15px rgb(0 0 0 / 30%) !important",
    "&hover": {
      backgroundColor: "#fff",
    },
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 250,
    "& a": {
      color: "#000",
      marginRight: 20,
      transition: "all .2s",
      fontWeight: 500,
      "&:hover": {
        color: "#fb4226",
      },
    },
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRight: "1px solid",
    paddingRight: 15,
    marginRight: 10,
    color: "#9b9b9b",
    "&:hover": {
      color: "#9b9b9b !important",
    },
  },
  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  sectionMobile: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  wrapdrawer: {
    "& .MuiDrawer-paper": {
      alignItems: "flex-start",
      padding: 10,
    },
  },
  button: {
    "& .MuiButton-label": {
      color: "#9b9b9b",
      textTransform: "capitalize ",
      fontWeight: "400",
      fontSize: "13px",
    },
  },
}));

export default useStyles;
