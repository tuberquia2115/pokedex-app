import { useCallback, useEffect, useState } from "react";

import { useDebounce } from "@/hooks";
import { Input } from "@/components/atoms";
import { SortMenu } from "@/components/molecules";
import { SearchIcon, CloseIcon } from "@/components/atoms/icons";
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
        <SearchIcon className={styles.search_icon} />
        <Input
          name="searchTerm"
          value={searchValue}
          containerClassName={styles.input}
          className={styles.input}
          placeholder="Search..."
          onChange={({ target }) => setSearchValue(target.value)}
        />
        {searchValue && (
          <button type="button" onClick={onCleanSearchText}>
            <CloseIcon className={styles.close_icon} />
          </button>
        )}
      </div>
      <SortMenu />
    </div>
  );
};
