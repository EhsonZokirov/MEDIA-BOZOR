import React from "react";
import { useTranslation } from "react-i18next";

function CardsSMM(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="md:w-[65%] shadow-lg hover:shadow-xl bg-[#ffffff2f] m-auto hover:scale-[1.03] transition-all rounded-xl">
        <img className="rounded-t-xl" src={props.IMG} alt="Adbullo" />
        <div className="text-center p-3">
          <h1 className=" font-semibold text-lg">{props.name}</h1>
          <p className="text-[10px] flex justify-center flex-wrap">
            {props.about}
          </p>
        </div>
        <div className="">
          <button className=" hover:bg-pink-500 border-t border-slate-900 transition-all hover:text-white w-[100%] rounded-b-xl ">
            {t("ПОДРОБНЕЕ")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardsSMM;
