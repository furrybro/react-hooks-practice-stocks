import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, sendStockup }) {

  const renderEachStock = stocks.map((stock) => {

    function handleClick() {
      sendStockup(stock);
    }

    return <Stock key={stock.id} name={stock.name} ticker={stock.ticker} type={stock.type} price={stock.price} handleClick={handleClick}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {renderEachStock}
    </div>
  );
}

export default StockContainer;
