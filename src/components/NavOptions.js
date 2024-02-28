import React, { useState, useEffect } from 'react';
import NavCard from './NavCard.js';
import '../styles/NavOptions.css';
import { useLocation } from 'react-router-dom';

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
  const location = useLocation();

  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    const { pathname } = location;

    setMiPhoneToggle(pathname === '/miphones');
    setRedmiPhoneToggle(pathname === '/redmiphones');
    setTvToggle(pathname === '/tv');
    setLaptopToggle(pathname === '/laptops');
    setFitnessToggle(pathname === '/lifestyle');
    setHomeToggle(pathname === '/home');
    setAudioToggle(pathname === '/audio');
    setAccessoriesToggle(pathname === '/accessories');
  }, [location]);

  return (
    <div className="navOptions">
      {miPhoneToggle
        ? miPhones.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {redmiPhoneToggle
        ? redmiPhones.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {tvToggle
        ? tv.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {laptopToggle
        ? laptop.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {fitnessToggle
        ? fitnessAndLifeStyle.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {homeToggle
        ? home.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {audioToggle
        ? audio.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}

      {accessoriesToggle
        ? accessories.map((item) => <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />)
        : null}
    </div>
  );
};

export default NavOptions;
