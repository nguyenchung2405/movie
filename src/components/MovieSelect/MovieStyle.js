import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "0 0 10px rgb(0 0 0 / 30%)",
        borderRadius: 5,
        height:80,
        backgroundColor: "#fff"
    },
    formControl: {
        minWidth: "100%",
        maxWidth: "100%",
    },
    select:{
        maxWidth: "100%",
        "&.MuiInput-underline:after":{
            borderBottom:"none !important",
        },
        "&.MuiInput-underline:before":{
            borderBottom:"none !important",
        },
        "& .MuiSelect-select.MuiSelect-select":{
            borderRight:"1px solid #dedede",
        }
    },
    boxBtn:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center"
    },
    btnMuaVe:{
        backgroundColor: "#4a4a4a",
        color:"#fff",
        verticalAlign: "middle",
        cursor: "revert",
    }

}));

export default useStyles;