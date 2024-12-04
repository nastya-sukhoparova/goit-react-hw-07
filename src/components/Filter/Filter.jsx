import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import styles from "./Filter.module.css";

const Filter = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <label className={styles.filter}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
};

export default Filter;
