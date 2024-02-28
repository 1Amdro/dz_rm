import { useEffect, useState } from "react";
import { fetchLocations } from "../../api";

function useLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchLocations();
      setLocations(data.results);
    })();
  }, []);

  return { locations };
}

export default useLocations;
