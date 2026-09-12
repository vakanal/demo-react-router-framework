export const avatarText = (fullName: string) =>
  fullName
    .split(" ")
    .map((text) => text.charAt(0).toUpperCase())
    .join("");
