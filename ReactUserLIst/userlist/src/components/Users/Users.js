import React,{useState} from 'react';
import  {data}  from "../UsersData/RandomUsers.js"
import { UserCard } from '../UsersGrid/UserCard/UserCard.js';
import { UsersGrid } from '../UsersGrid/UsersGrid.js';
//import {RandomUsers} from "../UsersData/RandomUsers"
import { User } from './User/User';
import './Users.css'

// const Users = () => {
//     return (
//         <ul className='Users__list'>
//             {data.results.map(person => <User
//                 key={person.login.uuid}
//                 img={person.picture.thumbnail}
//                 name={person.name.first}
//                 email={person.email}
//                 dob={person.dob.date} />)}
//         </ul>
//     )
// }
export const Users = () => {
  const [selected, setSelected] = useState(false);
  const onClick = () => setSelected(!selected);
  return (
    <div className="Users_list">
      <button onClick={onClick}> Switch view</button>
      {selected
        ? data.map((person, index) => (
   
            data.results.map(person =>
                <Users
                key={person.login.uuid}
                img={person.picture.thumbnail}
                name={person.name.first}
               email={person.email}
               dob={person.dob.date} />)
            
          ))
        : data.results.map((person, index) => (
            <User
              img={person.picture.large}
              name={person.name.first}
              email={person.email}
              dob={person.dob.date}
              key={index}
            />
          ))}
    </div>
  );
};