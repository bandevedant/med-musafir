import React from "react";
import group1 from "../../assets/group1.jpg"
import group2 from "../../assets/group2.jpg"
import group3 from "../../assets/group3.jpg"
import group4 from "../../assets/group4.jpg"
import group5 from "../../assets/group5.jpg"
import group6 from "../../assets/group6.jpg"
import group7 from "../../assets/group7.jpg"
import group8 from "../../assets/group8.jpg"
import group9 from "../../assets/group9.jpg"
import group10 from "../../assets/group10.jpg"

const MyImageCarousel = () => {
  const data = [
    {
      imgelink:group1,
    },
    {
      imgelink:group2,
    },
    {
      imgelink:group3,
    },
    {
      imgelink:group4,
    },
    {
      imgelink:group5,
    },
    {
      imgelink:group6,
    },
    {
      imgelink:group7,
    },
    {
      imgelink:group8,
    },
    {
      imgelink:group9,
    },
    {
      imgelink:group10,
    },
  ];
 
  const [active, setActive] = React.useState(group4);
 
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt=""
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyImageCarousel;
