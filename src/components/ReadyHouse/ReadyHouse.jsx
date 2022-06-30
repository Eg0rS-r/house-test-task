import React from "react";
import { Link } from "react-router-dom";

import styles from "./ReadyHouse.module.scss";

import House from "../House";

const ReadyHouse = ({ innerRef, readyHouseList }) => {
  const ItemsList = readyHouseList.map((obj) => (
    <li className={styles.item} key={obj.id}>
      <House {...obj} />
    </li>
  ));

  return (
    <div ref={innerRef} className={styles.readyHouse}>
      <Link to='/ready-houses' className={`header ${styles.link}`}>Готовые дома:</Link>
      <ul className={styles.list}>{ItemsList}</ul>
    </div>
  );
};

export default ReadyHouse;
