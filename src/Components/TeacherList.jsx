import React from 'react';
import '../Styles/TeacherList.css';

const teachers =[
    {
        image: "Image1",
        name: 'prof jhone deo',
        duration:'20 hr lesson',
        cost: '100',
    },
    {
    image: "Image1",
    name: 'prof jhone deo',
    duration:'20 hr lesson',
    cost: '100',
    },
{
image: "Image1",
name: 'prof jhone deo',
duration:'20 hr lesson',
cost: '100',
},
];
const TeacherList = () => {
  return (
    <div className='teacher--list'>TeacherList
      <div className='list--header'>
        <h2>Teachers</h2>
        <select >
            <option value="english">English</option>
            <option value="english">English</option>
            <option value="english">English</option>

        </select>
      </div>
      <div className='list--conatiner'>
        {teachers.map((teacher) => (
          <div className='list'>
            <div  className='teacher--detail'>
            <img src={teacher.image} alt={teacher.name}/>
            <h2>{teacher.name}</h2>
            </div>
            <span>{teacher.duration}</span>
            <span>{teacher.cost}</span>
            <span className='teacher--todo'>:</span>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TeacherList
