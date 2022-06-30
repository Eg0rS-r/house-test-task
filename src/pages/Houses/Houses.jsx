import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import {
  fetchHouses,
  selectHouses,
  selectStatus,
  updateHouseStatus,
} from "../../redux/slices/housesSlice";

import styles from "./Houses.module.scss";

import House from "../../components/House";
import ReadyHouse from "../../components/ReadyHouse";
import ErrorPopup from "../../components/ErrorPopup";

const Houses = () => {
  const houseList = useSelector(selectHouses);
  const houseReqStatus = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const [, dropNotReady] = useDrop(() => ({
    accept: "house",
    drop: ({ id }) => dispatch(updateHouseStatus({ id, isReady: false })),
  }));

  const [, dropReady] = useDrop(() => ({
    accept: "house",
    drop: ({ id }) => dispatch(updateHouseStatus({ id, isReady: true })),
  }));

  const ItemsList = houseList
    .filter((item) => !item.isReady)
    .map((obj) => (
      <li className={styles.item} key={obj.id}>
        <House {...obj} />
      </li>
    ));

  return (
    <main className={styles.houses}>
      <h3 className="header">Дома</h3>

      <div className={styles.content}>
        <ul ref={dropNotReady} className={styles.list}>
          {ItemsList}
        </ul>

        <ReadyHouse
          innerRef={dropReady}
          readyHouseList={houseList.filter((item) => item.isReady)}
        />
      </div>

      {houseReqStatus === "ERROR" ? <ErrorPopup /> : <></>}
    </main>
  );
};

export default Houses;
