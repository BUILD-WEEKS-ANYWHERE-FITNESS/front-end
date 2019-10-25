import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import  ClassesCard  from './ClassesCard'
import { data } from '../../data'
import axios from 'axios';

const Classes = (props) => {
  const [classList, setClassList] = useState([])
  

  useEffect(() =>{
    setClassList(data);
  }, [])
  console.log(classList)

  
  // useEffect(() => {
  //   axiosWithAuth()
  //   .get(`https://fitnessanywhere.herokuapp.com/api/classes`, classList)
  //   .then(res =>  
  //     setClassList(res.data)) 
  //   .catch(err => console.log(err))
  // }, [])


  return (
    <div className="card-container">
    <div className="classes">
        <h1> Search Classes </h1>
        <div className="class-search-card">
            <Input className="class-search-bar" type="search" name="search" id="search" placeholder="Search" />
            <Input className="class-search-drops" type="select" name="select" id="select">
              <option>Duration</option>
              <option>30 mins</option>
              <option>45 mins</option>
              <option>60 mins</option>
        </Input>
        <Input className="class-search-drops" type="select" name="select" id="select">
              <option>Type</option>
              <option>Yoga</option>
              <option>Pilates</option>
        </Input>

            </div>
            </div>
            <div>{classList.map(e=> (
              <ClassesCard singleClass={e} />
            ))
            }
            </div>
        </div>

  );
}

export default Classes;
