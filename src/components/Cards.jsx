import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

function Cards(props) {
  return (
    <ul className="" data-aos="fade-up" data-aos-duration="500">
      <li className="m-auto hover:text-[#CC0909] hover:scale-[1.03] cursor-pointer  rounded-md bg-purple-300 md:w-[80%] shadow-md hover:shadow-xl transition-all duration-300 ">
        <h1>{props.name}</h1>
        <img
          className=" m-auto w-[100%] transition-all  "
          src={props.img}
          alt="IMG"
        />
        <div className="p-2 flex justify-evenly">
          <div className="cursor-no-drop" title="INSTAGRAM">
            <InstagramIcon />
            <span className="hidden md:block"> {props.inst}</span>
          </div>
          <div className="cursor-no-drop" title="YOUTUBE">
            <YouTubeIcon />
            <span className="hidden md:block"> {props.youtube}</span>
          </div>
          <div className="cursor-no-drop" title="Tik Tok">
            <LibraryMusicIcon />
            <span className="hidden md:block"> {props.tiktok}</span>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Cards;
