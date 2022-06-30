import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchHouses,
  selectHouses,
  selectStatus,
} from "../../redux/slices/housesSlice";

import styles from "./ReadyHousesPage.module.scss";

import ErrorPopup from "../../components/ErrorPopup";

const ReadyHousesPage = () => {
  const houseList = useSelector(selectHouses);
	const houseReqStatus = useSelector(selectStatus)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const ItemsList = houseList
    .filter((item) => item.isReady)
    .map((obj) => (
      <li className={styles.item} key={obj.id}>
        {obj.title}
      </li>
    ));

  return (
    <main className={styles.houses}>
      <h3 className="header">Готовые дома</h3>

      <p>Список готовых домов:</p>
        
      <ul className={styles.list}>{ItemsList.length !== 0 ? ItemsList : <h4>Готовых домо нет 😔</h4>}</ul>

			{houseReqStatus === "ERROR" ? <ErrorPopup /> : <></>}
    </main>
  );
};

export default ReadyHousesPage;
