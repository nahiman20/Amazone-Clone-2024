
import React from "react";
import  {catagoryInfos} from './catagoryFullinfos'
import CatagoryCard from "./CatagoryCard";
import classes from "./Category.module.css";

const Category = () => {
  return (
    <section className={classes.catagory_container}>
      {catagoryInfos.map((info) => (
        <CatagoryCard key={info.name} data={info} />
      ))}
    </section>
  );
};

export default Category;
