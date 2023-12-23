import { useEffect, useState } from "react";
import axios from "axios";
export default () => {
  const [term, setTerm] = useState("");
  
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const options = {
    method: "GET",
    url: "https://api.yelp.com/v3/businesses/search",
    params: { location: "Bergen", sort_by: "best_match", limit: "20", term },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer VHdZASGXTZTBOMCmUGe7mH4T8xcn-GLrr4hn5eLG6PAjUopHeOJ_KUPJUoyctg7JHzSj4P9IVjtmLhbVHnOY_dPAmAyazjDoJIryqeSP7A6mkrGeRy0n7z5eLZWGZXYx",
    },
  };

  const searchHandler = (searchTerm) => {
    axios
      .request(options)
      .then(function (response) {
        setResults(response.data.businesses);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong");
      });
  };

  useEffect(() => {
    setTerm('pasta');
  }, []);

  return [term, setTerm, searchHandler, results, errorMessage]
}