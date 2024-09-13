import { writable } from "svelte/store";

export const loading = writable(false);
export const menuOpen = writable(false);
export const themeSet = writable(false);