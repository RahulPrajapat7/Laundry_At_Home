import React from "react";
import "./Price.css";
import PriceTable from "./PriceTable";
import Grid from "@mui/material/Grid";

export default function Price() {
  return (
    <div className="price">
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid item xs={12} sm={6} md={3} className="gridItem flex-column">
          <div className="h3Class1 mb-4 ">
          <h3>Steam Press</h3>
           </div>
          <PriceTable arrayName={SteamPress} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="gridItem flex-column">
          <div className="h3Class2 mb-4 ">
          <h3>Wash & Press</h3>
          </div>
          <PriceTable arrayName={WashPress} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="gridItem flex-column">
          <div className="h3Class1 mb-4">
            <h3>Wash & Fold</h3>
          </div>
          <PriceTable arrayName={WashFold} />
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="gridItem flex-column">
          <div className="h3Class2 mb-4">
          <h3>Dry Cleaning</h3>
          </div>
          <PriceTable arrayName={DryCleaning} />
        </Grid>
      </Grid>
    </div>
  );
}
const SteamPress = [
  {
    name: "Shirt",
    price: "12",
  },
  {
    name: "T-shirt",
    price: "12",
  },
  {
    name: "Jeans",
    price: "12",
  },
  {
    name: "Pant",
    price: "12",
  },
  {
    name: "jacket",
    price: "12",
  },
  {
    name: "Kurta",
    price: "15",
  },
  {
    name: "Pajjama",
    price: "12",
  },
  {
    name: "coat/Blejar",
    price: "45.00",
  },
  {
    name: "Short",
    price: "10",
  },
  {
    name: "Socks pair",
    price: "12",
  },
  {
    name: "Handkerchief",
    price: "12",
  },
  {
    name: "Safari Suit",
    price: "30",
  },
  {
    name: "Pagdi",
    price: "18",
  },
];
const WashPress = [
  {
    name: "Shirt",
    price: "25",
  },
  {
    name: "T-shirt",
    price: "25",
  },
  {
    name: "Jeans",
    price: "25",
  },
  {
    name: "Pant",
    price: "25",
  },
  {
    name: "jacket",
    price: "35",
  },
  {
    name: "Kurta",
    price: "25",
  },
  {
    name: "Pajjama",
    price: "25",
  },
  {
    name: "coat/Blejar",
    price: "80",
  },
  {
    name: "Short",
    price: "20",
  },
  {
    name: "Socks pair",
    price: "20",
  },
  {
    name: "Handkerchief",
    price: "10",
  },
  {
    name: "Safari Suit",
    price: "80",
  },
  {
    name: "Pagdi",
    price: "40",
  },
];
const WashFold = [
  {
    name: "Shirt",
    price: "18",
  },
  {
    name: "T-shirt",
    price: "18",
  },
  {
    name: "Jeans",
    price: "18",
  },
  {
    name: "Pant",
    price: "18",
  },
  {
    name: "jacket",
    price: "50",
  },
  {
    name: "Kurta",
    price: "18",
  },
  {
    name: "Pajjama",
    price: "18",
  },
  {
    name: "coat/Blejar",
    price: "60",
  },
  {
    name: "Short",
    price: "14",
  },
  {
    name: "Socks pair",
    price: "16",
  },
  {
    name: "Handkerchief",
    price: "12",
  },
  {
    name: "Safari Suit",
    price: "60",
  },
  {
    name: "Pagdi",
    price: "25",
  },
];
const DryCleaning = [
  {
    name: "Blanket Double Bed Heavy",
    price: "450",
  },
  {
    name: "Sweater Light",
    price: "80",
  },
  {
    name: "Jacket Full Heavey",
    price: "200",
  },
  {
    name: "Shirt",
    price: "45",
  },
  {
    name: "T-Shirt",
    price: "50",
  },
  {
    name: "Kurta",
    price: "45",
  },
  {
    name: "Pajjama",
    price: "45",
  },
  {
    name: "coat/Blejar",
    price: "180",
  },
  {
    name: "Short",
    price: "30",
  },
  {
    name: "Socks pair",
    price: "10",
  },
  {
    name: "Handkerchief",
    price: "10",
  },
  {
    name: "Safari Suit",
    price: "120",
  },
  {
    name: "Pagdi",
    price: "70",
  },
];
