import React from "react";
import "./Price.css";
import Grid from "@mui/material/Grid";
import Items from "./Items";

export default function PriceTable({ arrayName }) {
  return (
    <div className="d-flex align-items-center">
      <Grid container rowSpacing={1} className="price-table">
        {arrayName.map((items, i) => (
          <Grid item xs={12} sm={12} md={12} key={i}>
            <Items itemName={items.name} itemPrice={items.price} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
