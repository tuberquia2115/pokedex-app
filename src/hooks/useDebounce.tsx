import { useEffect, useState } from "react";

type DebounceType = string | undefined | null;

interface UseDebounceReturnType<Debounce extends DebounceType = string> {
  debouncedValue: Debounce;
}

export const useDebounce = <Debounce extends DebounceType = string>(
  valueToDebounce: Debounce,
  delay: number = 500,
  initialValue = "" as Debounce
): UseDebounceReturnType<Debounce> => {
  const [debouncedValue, setDebouncedValue] = useState<Debounce>(initialValue);

  useEffect(() => {
    const debounceTimer = setTimeout(
      () => setDebouncedValue(valueToDebounce),
      delay
    );

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [valueToDebounce, delay]);

  return { debouncedValue };
};
