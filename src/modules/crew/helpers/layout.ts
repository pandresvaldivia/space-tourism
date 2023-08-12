export const getDescriptionWidth = (text: string) => {
  const numberOfCharacters = text.length;

  if (numberOfCharacters <= 180) {
    return "28.625rem";
  }

  if (numberOfCharacters <= 210) {
    return "33.5rem";
  }

  return "37rem";
};
