import React from 'react';
import {
    Link
  } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="nomatch">
            <h1>404<span> <span>-</span> page not found</span></h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NoMatch