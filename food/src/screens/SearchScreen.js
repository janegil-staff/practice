import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import axios from "axios";
const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const options = {
    method: "GET",
    url: "https://api.yelp.com/v3/businesses/search",
    params: { location: "Bergen", sort_by: "best_match", limit: "20" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer VHdZASGXTZTBOMCmUGe7mH4T8xcn-GLrr4hn5eLG6PAjUopHeOJ_KUPJUoyctg7JHzSj4P9IVjtmLhbVHnOY_dPAmAyazjDoJIryqeSP7A6mkrGeRy0n7z5eLZWGZXYx",
    },
  };
  const searchHandler = () => {
    axios
      .request(options)
      .then(function (response) {
        setResults(response.data.businesses);
      })
      .catch((error) => {
        setErrorMessage("Something went wrong");
      });
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchHandler}
      />
      <Text>{errorMessage}</Text>
      <Text>We have found {results.length}</Text>
    </View>
  );
};

export default SearchScreen;
