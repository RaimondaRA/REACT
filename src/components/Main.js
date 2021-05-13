import React, {useState, useEffect} from 'react';
import Film from './Film';
import Search from './Search';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Main() {
    const [movies, setMovies] = useState([]);

    const [searchWord, setSearchWord] = useState('');
    const [receivedInfo, setReceivedInfo] = useState('');

    useEffect(()=>{
        fetch (`https://www.omdbapi.com/?apikey=e4db3ced&t=${searchWord}`)
        .then(response => response.json())
        .then(json => setReceivedInfo(json))
    }, [searchWord])

    const insertMain = text => {
        const newMain = [{text}]
        setMovies = newMain;
    }
    return (
         <InputGroup className="mb-3 p-5">
                <FormControl placeholder="Search for a movie" aria-label="Movie's title" aria-describedby="basic-addon2"/>
                <InputGroup.Append>
                {/* setSearchWord - ka skliausteliuose jis turi isaugoti??? */}
                <Button onClick={()=> setSearchWord('searchWord')} variant="outline-secondary">Search</Button> 
        </InputGroup.Append>

            {movies.map((movies, index) => (
            <Search key ={index} movies={movies}/>
            ))},

            {/* {receivedInfo.map(movies => {
                return <p>{JSON.stringify()}</p>
            })} */}
            
            
                
                <Film insertMain={insertMain}/>
        </InputGroup>
      
            
        
    )
}

export default Main
