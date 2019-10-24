import React, { useState, useEffect } from 'react';
import { Card, Input } from 'reactstrap';
import ClassesCard from "./ClassesCard";
import axios from "axios";


const Classes = (props) => {
    //Fake data, for now
    const [search, setSearch] = useState({
    searchTerm: " ",
    duration: "",
    type: "",
    intensity: "",
    })
    const [classes,setClasses] = useState([
        {
        name: 'Intro to Yoga',
        duration: '30 mins',
        type: "yoga",
        intensity: 'beginner'
        },
        {
          name: 'Intense Pilates',
          duration: '60 mins',
          type: "pilates",
          intensity: 'intermediate'
        },
        {
          name: 'Masterclass: Yoga',
          duration: '45 mins',
          type: "yoga",
          intensity: 'advanced'
        },
        {
          name: 'Intro to Pilates',
          duration: '30 mins',
          type: "pilates",
          intensity: 'beginner'
        }
      ])

      let notFound = false;
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

                setSearchResults(resultIntensity);
                console.log(searchResults.length);


      }, [search]);

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
