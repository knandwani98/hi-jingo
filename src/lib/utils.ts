import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { VAL } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getRandomTicketNumbers = (ticketLength: number): any => {
  const randomTicketArr: number[] = [];

  for (let i = 0; i < ticketLength; i++) {
    const randomNumber = getRandomNumberTill(VAL.MAX_NUMBER);

    if (!randomTicketArr.includes(randomNumber)) {
      randomTicketArr.push(randomNumber);
    } else i--;
  }

  return randomTicketArr;
};

export const emptyArrayTill = (num: number) => {
  return Array.apply(null, Array(num));
};

export const getRandomNumberTill = (till: number) => {
  return Math.ceil(Math.random() * till);
};

export const uniqueRandomNumber = (arr: unknown[]): number => {
  const randomNumber = getRandomNumberTill(VAL.MAX_NUMBER);

  if (arr.includes(randomNumber)) {
    return uniqueRandomNumber(arr);
  } else {
    return randomNumber;
  }
};
