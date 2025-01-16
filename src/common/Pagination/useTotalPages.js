import { useSelector } from "react-redux";

export const totalPages = 500;

export const useTotalPages = () => {
  const data = useSelector((state) => state.data);

  if (!data) {
    console.error("Invalid data for total pages", data);
    return totalPages;
  }
  return totalPages;
};
