import { writable } from "svelte/store";

interface User {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ORGANIZATION";
}

export const user = writable<User | null>(null);
