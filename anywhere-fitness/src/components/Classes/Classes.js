import React, { useState } from 'react';
import { Input } from 'reactstrap';

const Classes = () => {

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
        </div>

  );
}

export default Classes;
