import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from '@material-ui/core';
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

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
}));

const SearchBar = ({ placeholder, data }) => {
    const classes = useStyles();

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState();

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    };

    return (
        <>
            <Paper component='form' className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder={placeholder}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={handleFilter}
                    value={wordEntered}
                />
                {filteredData.length === 0 ? (
                    <SearchIcon />
                ) : (
                    <CloseIcon
                        style={{ cursor: 'pointer' }}
                        onClick={clearInput}
                    />
                )}
            </Paper>
            {filteredData.length !== 0 && (
                <div
                    className='dataResults'
                    style={{ overflowY: 'scroll', margin: '20px 0' }}
                >
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <Paper
                                style={{
                                    width: 300,
                                    padding: '4px',
                                    margin: '10px',
                                    backgroundColor: '#969696',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Link
                                    className='dataItem'
                                    href={value.link}
                                    target='_blank'
                                    rel='noreferrer'
                                    style={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textUnderlineOffset: 4,
                                        textDecorationThickness: 2,
                                    }}
                                >
                                    <p className='p_link'>{value.title} </p>
                                </Link>
                            </Paper>
                        );
                    })}
                </div>
            )}
        </>
    );
};
export default SearchBar;
