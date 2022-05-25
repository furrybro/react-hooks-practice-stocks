import React, { useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then((resp) => resp.json())
    .then((data) => setStocks(data));
  }, []);

  function sendStockup(newStock) {
    console.log(newStock, "newstock");
    setPortfolioStocks([...portfolioStocks, newStock]);
  }

  function removeStock(newPortStock) {
    const removedStocks = portfolioStocks.filter((portfolioStock) => portfolioStock.id !== newPortStock);
    setPortfolioStocks(removedStocks);
  }

  function displayByFilter(event) {
    setType(event);
  }

  const filteredType = stocks.filter((stock) => {
    if (type === stock.type) {
      return true;
    }
    if (type === "") {
      return true;
    }
      return false;
  });

  function handleSort(sortType) {
    setSort(sortType);
  }
  
  if (sort === "Alphabetically") {
    filteredType.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
  }

  if (sort === "Price") {
    filteredType.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b. price) {
        return 1;
      }
      return 0;
    })
  }

  return (
    <div>
      <SearchBar displayByFilter={displayByFilter} handleSort={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredType} sendStockup={sendStockup}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} removeStock={removeStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
