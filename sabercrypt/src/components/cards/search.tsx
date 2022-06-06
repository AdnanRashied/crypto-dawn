import React, {useState} from 'react';
import Grid from '@mui/material/Grid';

const SearchBar = (props:any) => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (event: { target: { value: any; }; }) => {
        let lowerCase = event.target.value;
        setInputText(lowerCase.toLowerCase());
    };
   return (
       <div>
       <Grid>
           <div>
           <input
           onChange={props.change}>
           </input>
           </div>
       </Grid>
       </div>
   )
};

export default SearchBar;