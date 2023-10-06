import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

//to merge tailwind class names
//add be chadcn ui
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
