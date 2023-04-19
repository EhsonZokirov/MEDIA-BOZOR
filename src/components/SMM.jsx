import React from "react";
import Abdullo from "../components/img/ABDULLO (RUZZKE).jpg";
import Marsu from "../components/img/MARSU.jpg";
import Abunasr from "../components/img/ABUNASR.jpg";
import Nasiba from "../components/img/Nasiba.JPG";
import Parvina from "../components/img/Parvina.jpg";
import Mavzuna from "../components/img/Mavzuna.jpg";
import Akmal from "../components/img/Akmal.jpg";
import Sofia from "../components/img/SOFIA.jpg";
import AminaSMM from "../components/img/AminaSMM.jpg";
import UmedaSmm from "../components/img/Umeda.jpg";
import CardsSMM from "./CardsSMM";
import { useTranslation } from "react-i18next";

function SMM() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="pt-32 m-auto">
        <div className="text-center pb-10 ">
          <h1 className=" md:text-2xl">
            <span className="font-semibold md:text-4xl"> SMM </span> —
            {t("сокращение от social media marketing,")} <br />{" "}
            {t(
              "что в свою очередь переводится как маркетинг в социальных сетях."
            )}
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-[80%] m-auto py-10">
          <CardsSMM name="Abdullo" IMG={Abdullo} about="Gashni4 Ukrob" />
          <CardsSMM name="Marsu" IMG={Marsu} about="Личный блог" />
          <CardsSMM name="Abunasr" IMG={Abunasr} about="Self Development" />
          <CardsSMM name="Nasiba" IMG={Nasiba} about="Блогер | SMM" />
          <CardsSMM name="Parvina" IMG={Parvina} about=" SMM и Медицину" />
          <CardsSMM name="Mavzuna" IMG={Mavzuna} about=" ВАУ-ПАУ контент" />
          <CardsSMM name="Sofia" IMG={Sofia} about="от эстетики до продаж" />
          <CardsSMM name="Akmal" IMG={Akmal} about="ВИДЕМЕЙКЕР" />
          <CardsSMM name="Umeda" IMG={UmedaSmm} about="SMM | REELS" />
          <CardsSMM name="Amina" IMG={AminaSMM} about="Жизнь студентки" />
        </div>
      </section>
    </div>
  );
}

export default SMM;
