import React, {  useState } from "react";
import "./Price.css";
import PriceTable from "./PriceTable";
import Grid from "@mui/material/Grid";
import Cart from "../Cart/Cart";

export default function Price(props) {
  const [show, setShow] = useState(null);

  const handleClickSteam = () => {
    setShow("steam");
  };
  const handleClickWash = () => {
    setShow("wash");
  };
  const handleClickFold = () => {
    setShow("fold");
  };
  const handleClickDry = () => {
    setShow("dry");
  };
  return (
    <>
    <div className="price d-flex">
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        style={{ width: "50%", marginRight: "auto" }}
      >
        <Grid item xs={12} className="gridItem flex-column">
          <div className="h3Class mb-4" onClick={handleClickSteam}>
            <h3>Steam Press</h3>
          </div>
          <div className={show === "steam" ? "active" : "steamPress"}>
            <PriceTable arrayName={SteamPress} />
          </div>
        </Grid>
        <Grid item xs={12} className="gridItem flex-column">
          <div className="h3Class mb-4 " onClick={handleClickWash}>
            <h3>Wash & Press</h3>
          </div>
          <div className={show === "wash" ? "active" : "steamPress"}>
            <PriceTable arrayName={WashPress} />
          </div>
        </Grid>
        <Grid item xs={12} className="gridItem flex-column">
          <div className="h3Class mb-4" onClick={handleClickFold}>
            <h3>Wash & Fold</h3>
          </div>
          <div className={show === "fold" ? "active" : "steamPress"}>
            <PriceTable arrayName={WashFold} />
          </div>
        </Grid>
        <Grid item xs={12} className="gridItem flex-column">
          <div className="h3Class mb-4" onClick={handleClickDry}>
            <h3>Dry Cleaning</h3>
          </div>
          <div className={show === "dry" ? "active" : "steamPress"}>
            <PriceTable arrayName={DryCleaning} />
          </div>
        </Grid>
      </Grid>
      <div className=" d-flex align-items-center cart1 ps-5 " >
       <Cart/>
      </div>
    </div>  
      </>
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
