import React from 'react'
import { BiListCheck, BiFile, BiTime, BiHistory } from 'react-icons/bi'

const courses =[
    {
        title: "Total Requirenment",
        duration: '2 ',
        icon: <BiListCheck />
    },
    {
        title: " Total Transcript",
        duration: '8',
        icon: <BiFile />
    },
    {
        title: "Over Due Courses",
        duration: '1',
        icon: <BiTime />
    },
    {
      title: "Courses Expired",
      duration: '1',
      icon: <BiHistory />
  },
];
const Card = () => {
  return (
    <div className='card--container'>
      {courses.map((item) =>(
        <div className='card'>
            <div className='card--cover'>
                {item.icon}</div>
            <div className='card--title'>
                <h2>{item.title}</h2>
                <h2>{item.duration}</h2>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card
