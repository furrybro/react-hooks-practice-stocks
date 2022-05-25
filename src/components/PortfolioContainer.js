import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, removeStock }) {

  console.log(portfolioStocks, "portfolio stocks")

 
  const renderEachPortfolioStock = portfolioStocks.map((portfolioStock) => {

    function handleClick() {
      removeStock(portfolioStock.id);
    }

    return <Stock key={portfolioStock.id} name={portfolioStock.name} ticker={portfolioStock.ticker} type={portfolioStock.type} price={portfolioStock.price} handleClick={handleClick}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderEachPortfolioStock}
    </div>
  );
}

export default PortfolioContainer;
