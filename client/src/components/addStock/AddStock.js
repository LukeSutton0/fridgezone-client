import React, { Fragment, useState } from "react";
import classes from './AddStock.module.css'
import StockForm from "./AddStockForm.js";

const addStock = () => {  

  return (
    <Fragment>
      <div className={classes.addStockContainer}>
         <StockForm />
      </div>
    </Fragment>
  )
}


export default addStock;
