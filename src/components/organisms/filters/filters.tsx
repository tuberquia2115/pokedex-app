import { useCallback, useEffect, useState } from "react";

import { useDebounce } from "@/hooks";
import { SortMenu } from "@/components/molecules";
import { Image, Input } from "@/components/atoms";
import { setPokemonSearchInputValue, useAppDispatch } from "@/store";
import styles from "./filters.module.css";

export const Filters = () => {
  const [searchValue, setSearchValue] = useState("");

  const { debouncedValue } = useDebounce(searchValue);
  const dispatch = useAppDispatch();

  const handleInputChange = useCallback(() => {
    dispatch(setPokemonSearchInputValue(debouncedValue));
  }, [debouncedValue, dispatch]);

  const onCleanSearchText = () => {
    dispatch(setPokemonSearchInputValue(""));
    setSearchValue("");
  };

  useEffect(() => {
    handleInputChange();
  }, [debouncedValue, handleInputChange]);

  return (
    <div className={styles.container_search_bar}>
      <div className={styles.container_search}>
        <Image src="assets/icons/search.png" alt="search" />
        <Input
          name="searchTerm"
          value={searchValue}
          containerClassName={styles.input}
          className={styles.input}
          placeholder="Search..."
          onChange={({ target }) => setSearchValue(target.value)}
        />
        {searchValue && (
          <button
            type="button"
            className={styles.btn_close}
            onClick={onCleanSearchText}
          >
            <Image src="assets/icons/close.png" alt="close" />
          </button>
        )}
      </div>
      <SortMenu />
    </div>
  );
};
