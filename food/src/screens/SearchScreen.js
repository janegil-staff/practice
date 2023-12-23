import React from "react";
import { ScrollView, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {
  const [term, setTerm, searchHandler, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchHandler}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultList results={filterResultByPrice("$")} title="Cost Effective" />
        <ResultList results={filterResultByPrice("$$")} title="Bit pricier" />
        <ResultList results={filterResultByPrice("$$$")} title="Big spender" />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
