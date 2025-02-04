import React from 'react'
import ProfileHeader from './ProfileHeader';
import '../Styles/Profile.css';
import { BiBlock } from 'react-icons/bi';
const courses =[
  {
    title: 'english',
    duration: '2 hrs',
    icon: <BiBlock />,
  },
  {
    title: 'english',
    duration: '2 hrs',
    icon: <BiBlock />,
  },
  {
    title: 'english',
    duration: '2 hrs',
    icon: <BiBlock />,
  }
]
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader />

      <div className='user--profile'>
        <div className='user--detail'>
          <img src="" alt="" />
          <h3 className='username'>jhon doe</h3>
          <span className='profession'>Teacher</span>
        </div>
        <div className='user-courses'>
          {courses.map((courses) => (
            <div className='courses'>
              <div className="course-detail">
                <div className="course-cover">
                  {courses.icon}
                  <div className="course-name">
                    <h5 className='title'>{courses.title}</h5>
                    <span className="duration">{courses.duration}</span>
                  </div>
                </div>
                <div className="action">:</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile;
