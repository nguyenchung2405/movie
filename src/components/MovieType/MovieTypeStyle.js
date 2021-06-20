import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        position:"relative",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        paddingLeft:5
    },
    img: {
        width: "100%",
        height:"auto",
        borderRadius: 4
    },
    rating: {
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: 4,
        padding: 2,
        color: "#fff",
        fontSize: 16,
        width: 54,
        textAlign: "center",
        position: "absolute",
        top: 20,
        right: 12,
        position:"absolute",
        lineHeight: 0
      },
      ageType: {
        fontSize: 10,
        backgroundColor: "#00ac4d",
        borderRadius: 4,
        color: "#fff",
        minWidth: 33,
        textAlign: "center",
        display: "inline-block",
        marginRight: 8,
        padding: 2,
        position:"absolute",
        bottom: 30,
        left: 10
      },
      date:{
        fontSize: 16,
        backgroundColor: "rgba(12,27,54,.8)",
        border: "1px solid #1f2e46",
        borderRadius: 4,
        padding:2,
        color: "#fff",
        position: "absolute",
        bottom: 30,
        right: 12
    },
      sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
      },
}));

export default useStyles;