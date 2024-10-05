/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Image, Input, SortButton } from "@/components/atoms";
import React, { InputHTMLAttributes } from "react";
import styles from "./search-bar.module.css";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}
export const SearchBar: React.FC<SearchBarProps> = (props) => {
  return (
    <div className={styles.container_search_bar}>
      <div className={styles.container_search}>
        <Image src="assets/icons/search.png" alt="search" />
        <Input
          containerClassName={styles.input}
          className={styles.input}
          placeholder={props.placeholder ?? "Search"}
        />
        {props.value && (
          <button type="button">
            <Image src="assets/icons/close.png" alt="close" />
          </button>
        )}
      </div>
      <SortButton label="A" />
    </div>
  );
};
