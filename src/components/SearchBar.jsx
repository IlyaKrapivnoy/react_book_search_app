import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const SearchBar = ({ placeholder, data }) => {
    const classes = useStyles();

    return (
        <>
            <Paper component='form' className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <SearchIcon />
            </Paper>
            <div className='dataResults'>
                {data.map((value, key) => {
                    return (
                        <Link
                            className='dataItem'
                            href={value.link}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <p>{value.title} </p>
                        </Link>
                    );
                })}
            </div>
        </>
    );
};
export default SearchBar;
