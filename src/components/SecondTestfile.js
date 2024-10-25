import { useEffect, useState } from "react";
import axios from "axios";

export default function SecondTestfile() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get("api/cars");
        setVehicles(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchVehicles();
  }, []);
  console.log(vehicles);
}
