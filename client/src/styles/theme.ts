export const lightTheme = {
    background: "#f5eaf7",
    surfacePrimary: "#e7dee9", //cards and navbar like bigger items
    text: "#000000",
    secondaryText: "#ffff",
    navText: "#fff",
    primary: "#9223a8", // hovers on buttons or selected
    secondary: "#9040a0", // more important elements
    placeholder: "#b2aeb3", //searchbar
};
  
export const darkTheme = {
    background: "#1e161f",
    text: "#ffff",
    secondaryText: "#000000",
    surfacePrimary: "#332b34",
    navText: "#f2f2f2",
    primary: "#332b34",
    secondary: "#ad5bbc",
    placeholder: "#928d93"
};
  
export type ThemeType = typeof lightTheme;
  