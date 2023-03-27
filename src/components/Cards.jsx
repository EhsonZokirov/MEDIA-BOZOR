import React from "react";
import fozilov from "./img/Fozilov.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
function Cards(props) {
  return (
    <div>
      {/* FOZILOV */}
      <div className="m-auto hover:text-[#CC0909] hover:scale-105 cursor-pointer  rounded-md bg-purple-300 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
        <h1>{props.name}</h1>
        <img
          className=" m-auto md:active:scale-150 transition-all  "
          src={props.img}
          alt="IMG"
        />
        <div className="p-2 flex  justify-evenly">
          <div>
            <InstagramIcon />
            <span className="hidden md:block"> {props.inst}</span>
          </div>
          <div>
            <YouTubeIcon />
            <span className="hidden md:block"> {props.youtube}</span>
          </div>
          <div>
            <LibraryMusicIcon />
            <span className="hidden md:block"> {props.tiktok}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
