import type { User } from "./user";

export type Course = {
  id: number;
  name: string;
  description: string;
  value: number;
  image: string;
  teacher: User;
  topics?: any[];
  students: User[];
}