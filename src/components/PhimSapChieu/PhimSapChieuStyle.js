import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        padding: 5,
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
        position: "absolute",
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
    img: {
        width: "100%",
        height: "auto",
        borderRadius: 4
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}))

export default useStyles;
