export const getEnvVariables = (): Record<string, any> => {
  return {
    ...import.meta.env,
  };
};
