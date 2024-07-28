import type { User } from "./user";

export type Course = {
  id: number;
  name: string;
  description: string;
  value: number;
  image_url: string;
  teacher: User;
  topics?: any[];
  students?: User[];
}