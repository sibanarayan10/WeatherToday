import { useState, useEffect } from "react";

export const useApi = (api) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiFetch = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching API:", error);
        setData(null);
      }
    };

    apiFetch();
  }, [api]);

  return data;
};
