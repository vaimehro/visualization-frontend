
const config = {
  API_END_POINT: "http://localhost:8080/",
};

export const fetchDataService = async () => {
  const service = "getData";
  const response = await fetch(`${config.API_END_POINT}${service}`);
  return response.json();
};
