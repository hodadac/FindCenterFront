import React from 'react';
import {Link} from "react-router-dom";
import { Outlet } from 'react-router-dom';
import {Map} from "react-kakao-maps-sdk";

function App() {
  return (
    <>
        <p>최상단</p>
        <Link to="/" >
            <button>main</button>
        </Link>
        <Outlet />
    </>
  );
}

export default App;
