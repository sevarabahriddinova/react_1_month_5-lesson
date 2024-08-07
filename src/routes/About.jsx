import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const About = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios(`https://reqres.in/api/users/${id}`)
      .then(response => setUser(response.data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  return (
    <div>
      {user ? (
        <div className='about__wrapper'>
          <h2>{user.first_name} {user.last_name}</h2>
          <img className='avatarca' src={user.avatar} alt="" />
          <p className='lorem'> Lorem ipsum dolor sit amet consectetur adipisicing elit. At deleniti quasi, maiores molestias amet non necessitatibus adipisci rerum eaque repellat alias est ea reprehenderit, velit, nihil provident vitae iusto! Quo!</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default About;
