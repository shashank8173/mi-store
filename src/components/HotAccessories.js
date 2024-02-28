import React from "react";
import HotItemCard from "./HotItemCard";
import "../styles/HotAccessories.css";
const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifeStyle,
  lifeStyleCover,
  mobileAccessoriesCover,
  mobileAccessories,
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifeStyleCover ||
            mobileAccessoriesCover
          }
          alt="Cover"
        />
      </div>

      <div>
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              image={item.image}
              index={index}
              price={item.price}
            />
          ))}

        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              image={item.image}
              index={index}
              price={item.price}
            />
          ))}

        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              image={item.image}
              index={index}
              price={item.price}
            />
          ))}

        {lifeStyle &&
          lifeStyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              image={item.image}
              index={index}
              price={item.price}
            />
          ))}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              image={item.image}
              index={index}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
};

export default HotAccessories;
