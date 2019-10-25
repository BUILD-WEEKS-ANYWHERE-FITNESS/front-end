import React, { useState, useEffect } from 'react';
import { Card, Input } from 'reactstrap';
import ClassesCard from "./ClassesCard";
import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { data } from '../../data';


const Classes = (props) => {
    //let classes = [];
    //axios.get("https://fitnessanywhere.herokuapp.com/api/classes")
    //.then(response => {
    //  response.forEach(class => {
    //      classes.push(class);
    //  })
    //})
    //Fake data for now since endpoints are not functioning currently.

    const [classList, setClassList] = useState([])
    
    const [search, setSearch] = useState({
    searchTerm: " ",
    duration: "",
    type: "",
    intensity: "",
    })
    const [classes,setClasses] = useState([])
    
      const [searchResults, setSearchResults] = useState([]);

      useEffect(() => {
          const resultSearch = classes.filter(classObj =>
                             classObj.name.toLowerCase().includes(search.searchTerm.toLowerCase())
                                        );
         const resultDuration = resultSearch.filter(classObj =>
                                              classObj.duration.includes(search.duration)
                                              )

         const resultType = resultDuration.filter(classObj =>
                                                 classObj.type.toLowerCase().includes(search.type.toLowerCase())
                                                 )
         const resultIntensity = resultType.filter(classObj =>
                                                 classObj.intensity.toLowerCase().includes(search.intensity.toLowerCase())
                                                 )
         setClassList(resultIntensity);
      },[search])

  useEffect(() =>{
    setClassList(data);
  }, [])
  console.log(classList)

      //Controlled Inputs
      //
      const changeHandler = (e) => {
          setSearch({...search, [e.target.name]: e.target.value})
      }
  return (
    <div className="card-container">
        <Card className="classes">
            <h1> Search Classes </h1>
            <div className="class-search-card">
                <Input className="class-search-bar" type="search" name="searchTerm" id="searchTerm" placeholder="Search" onChange={changeHandler}/>
                <Input className="class-search-drops" type="select" name="duration" id="duration" onChange={changeHandler}>
                  <option value="">Duration</option>
                  <option value="30 mins">30 mins</option>
                  <option value="45 mins">45 mins</option>
                  <option value="60 mins">60 mins</option>
            </Input>
            <Input className="class-search-drops" type="select" name="type" id="type" onChange={changeHandler}>
                  <option value="">Type</option>
                  <option value="Yoga">Yoga</option>
                  <option value="Pilates">Pilates</option>
            </Input>
            <Input className="class-search-drops" type="select" name="intensity" id="intensity" onChange={changeHandler}>
                  <option value="">Intensity</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advances">Advanced</option>
            </Input>

            </div>
            <div className="class-cards-container">
                <h6>{(searchResults.length===0 ) ? `Sorry, can't find anything!` : ''} </h6>
                {searchResults.map(singleClass => (
                        <ClassesCard singleClass={singleClass} />
                    ))}
            </div>
        </Card>
    </div>
  );
}

export default Classes;
