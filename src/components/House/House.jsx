import React from "react";
import { useDispatch } from "react-redux";
import { useDrag } from "react-dnd";

import { updateHouseStatus } from "../../redux/slices/housesSlice";

import styles from "./House.module.scss";

const House = ({ id, title, isReady }) => {
  const dispatch = useDispatch();

  const [, drag] = useDrag(() => ({
    type: "house",
    item: { id },
  }));

  const handleClick = (e) => {
    e.preventDefault();

    dispatch(updateHouseStatus({ id, isReady: !isReady }));
  };

  return (
    <button ref={drag} onClick={handleClick} className={styles.house}>
      <p>{title}</p>
    </button>
  );
};

export default House;
