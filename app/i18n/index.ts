import "server-only";
export const dictionaries = {
  sk: () => import("./sk.json").then(m => m.default),
  cz: () => import("./cz.json").then(m => m.default),
  en: () => import("./en.json").then(m => m.default),
};
export const getDictionary = async (locale: string) =>
  (dictionaries as any)[locale]?.() ?? dictionaries.sk();
