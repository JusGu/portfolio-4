import { searchItem } from "./types";

export const searchItems: searchItem[] = [
  {
    text: "GITHUB",
    url: "https://github.com/JusGu",
    autocomplete: true
  },
  {
    text: "LINKEDIN",
    url: "https://www.linkedin.com/in/jusgu/",
    autocomplete: true
  },
  {
    text: "INSTAGRAM",
    url: "https://www.instagram.com/juust_juustin/",
    autocomplete: false
  },
  {
    text: "EMAIL",
    url: "mailto:jjwgu@uwaterloo.ca",
    autocomplete: true,
    blank: false
  }
];

export const autocompleteItems = searchItems.filter((item) => item.autocomplete);
export const getAutocompleteItem = (text: string) => {
  return text !== "" ? autocompleteItems.find((item) => item.text.toLowerCase().startsWith(text.toLowerCase())) : null;
};
