import React, { ChangeEvent, useState } from "react";

import { Button, Card } from "@/components/atoms";
import { useAppDispatch } from "../../../store/store";
import { setSortTypeSelected, useAppSelector } from "@/store";
import { TextFormatIcon } from "@/components/atoms/icons/text-format-icon";

import styles from "./sort-menu.module.css";

const menuOptions = [
  { id: "sort-by-id", label: "Number", value: "id" },
  { id: "sort-by-name", label: "Name", value: "name" },
  { id: "sort-by-favorites", label: "Favorites", value: "favorites" },
];

export const SortMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  const { sortTypeSelected } = useAppSelector((state) => state.filters);
  const sortButtonLabels: { [key: string]: string | JSX.Element } = {
    id: "#",
    name: <TextFormatIcon width={20} height={20} />,
    favorites: "❤️",
  };

  const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSortTypeSelected(event.target.value));
    onToggleSortMenu();
  };

  const onToggleSortMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <React.Fragment>
      <Button
        className={styles.sort_button}
        onClick={() => onToggleSortMenu()}
        label={sortButtonLabels[sortTypeSelected]}
      />
      {isMenuOpen && (
        <div className={styles.container_sort}>
          <p className={styles.menu_title}>Sort by:</p>
          <Card classNameContainer={styles.card_menu_options}>
            <form>
              {menuOptions.map((option) => (
                <div className={styles.menu_option} key={option.id}>
                  <input
                    type="radio"
                    id={option.id}
                    name={`sort-menu-${option.value}`}
                    value={option.value}
                    checked={sortTypeSelected === option.value}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor={option.id} className={styles.menu_label}>
                    {option.label}
                  </label>
                </div>
              ))}
            </form>
          </Card>
        </div>
      )}
    </React.Fragment>
  );
};
