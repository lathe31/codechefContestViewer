import React from "react";
import ContestCard from "./ContestCard/ContestCard";
import style from "./style.module.css";

const ContestList = ({ DataList }) => {
  return (
    <div id={style.listCon}>
      {DataList.map((item) => {
        return (
          <ContestCard
            ContestData={item}
            key={String(Math.round(Math.random() * 100))}
          />
        );
      })}
    </div>
  );
};

export default ContestList;
