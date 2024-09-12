import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormat = (
  date: Date | string,
  format: string = "DD MMM YYYY"
) => {
  return dayjs(date).format(format);
};
