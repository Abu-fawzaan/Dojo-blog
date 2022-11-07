// import { useState,useEffect } from "react";
import React from "react";
import BlogLists from "./blogLists";
import useFetch from "./useFetch";
const Home = () => {
    const {data, isPending,error} = useFetch('http://localhost:8000/blogs');

   
      
    return (
        <div className="home">
          {error && <div>{error}</div> }
          {isPending && <div>Loading...</div>}
          {data && <BlogLists blogs={data} title="All blogs"/>}
        </div>
    );
}
export default Home;