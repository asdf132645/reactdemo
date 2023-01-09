import React from "react";
import Book from "./Book";

function Library(props){
    return (
        <div>
            <Book name="처음 1" numOfPage={300}/>
            <Book name="처음 2" numOfPage={400}/>
            <Book name="처음 3" numOfPage={500}/>
        </div>
    )
}

export default Library;