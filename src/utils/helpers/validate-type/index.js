export const validateType = (type) => {
  // Check if type is empty
  if (!type?.trim()) {
    return "User type is required.";
  }

  return "";
};
