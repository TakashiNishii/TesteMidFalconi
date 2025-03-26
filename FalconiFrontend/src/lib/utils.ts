import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileId: string;
  isActive: boolean;
};

export type Profile = {
  id: string;
  name: string;
};

export enum TypesEntities {
  User = "User",
  Profile = "Profile",
}
