import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  // Use the URLSearchParams API to extract the query parameters
  // useLocation().search will have the query parameters eg: ?foo=bar&a=b
  return new URLSearchParams(useLocation().search);
}

const Search = () => {
  const query = useQuery();

  const term = query.get("term");

  const inputRef = useRef(null);
  const navigate = useNavigate();

  const formSubmitHandler = (e) => {
    //prevent the default form submission
    e.preventDefault();

    //extract search term using refs.
    const searchValue = inputRef.current.value;
    navigate(`?term=${searchValue}`);
  };

  return (
    <div>
      <form action="" onSubmit={formSubmitHandler}>
        <input type="text" name="term" style={{borderRadius:15,height:35,fontSize:21}} ref={inputRef} />
        <br></br><br></br>
        <input type="submit" style={{color:'black',fontSize:21,borderRadius:15,height:35}} value="Search" />
        {/* Display the search term if it is present */}
        {term && <h2 style={{color:'white',fontSize:21}}>Results for '{term}'</h2>}
      </form>
    </div>
  );
};

export default Search;
