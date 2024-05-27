const config = {
  API_END_POINT: "http://localhost:8080/",
};

export const fetchData = async () => {
  const service = "getData";
  try {
    const response = await fetch(`${config.API_END_POINT}${service}`);
    const data = await response.json();
    if(data.error){
      throw new Error(data.message)
    }
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
