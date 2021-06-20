import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        color: "#9b9b9b",
        " & .MuiListItem-root.MuiButtonBase-root:hover": {
            backgroundColor: "white",
        },
        "& .MuiTypography-colorTextSecondary": {
            paddingLeft: 10,
        },
        "& .MuiTypography-body2": {
            fontSize: 13,
        },
        "& .MuiListItem-gutters":{
            padding: 0,
        },
        "& .MuiListItemText-root":{
            minWidth: 120,
        }
    },

    
}));

export default useStyles;