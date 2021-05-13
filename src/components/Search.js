import React, {useState} from 'react';


const Search = (insertMain) => {
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefaut();
        if(!value) return;
        insertMain(value);
        setValue('');
    }

    return (
    <form onSubmit={handleSubmit}>
        <input 
        type="text"
        value={value}
        placeholder="Search for a movie"
        onChange={e => setValue(e.target.value)}/>
    </form>
    )
}

export default Search

