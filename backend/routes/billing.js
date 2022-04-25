const express = require("express");
const fetchuser = require("../middleware/fetchuser");
// const { body, validationResult } = require("express-validator");
const Bill = require("../models/Bill");
const router = express.Router();
router.get(
  //1. Get all the items
  "/",
  fetchuser,
  async (req, res) => {
    try {
      const bills = await Bill.find({ user: req.user.id });
      res.json(bills);
    } catch (error) {
      console.log(error);
      res.status(404).send("internal server error");
    }
  }
);
//2.Add a newItem
router.post(
  "/",
  fetchuser,

  async (req, res) => {
    let success = false;
    // if there are are errors, return bad request and the errors

    try {
      const { ItemName, ItemPrice } = req.body;
      //  const bill= await Bills.find({user:req.user.id})
      const bill = new Bill({
        ItemName,
        ItemPrice,
        ItemQuantity:1,
        user: req.user.id,
      });
      const saveBill = await bill.save();
      res.json(saveBill);
    } catch (error) {
      console.log(error);
      res.status(404).send("internal server error"); 
    }
  }
);
//3 update an existing item
router.put('/:id', fetchuser, async (req, res) => {
  const { ItemQuantity } = req.body;
  try {
      // Create a newNote object
      const newItem = {};
      if (ItemQuantity) {newItem.ItemQuantity = ItemQuantity };

      // Find the note to be updated and update it
      let bill = await Bill.findById(req.params.id);
      if (!bill) { return res.status(404).send("Not Found") }

      if (bill.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }
      bill = await Bill.findByIdAndUpdate(req.params.id, { $set: newItem}, { new: true })
      bill = await Bill.find({ user: req.user.id });
      res.json(bill);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal S Error");
  }
})
//Deleting Item 
router.delete('/:id', fetchuser, async (req, res) => {
  try {
      // Find the note to be delete and delete it
      let bill = await Bill.findById(req.params.id);
      if (!bill) { return res.status(404).send("Not Found") }

      // Allow deletion only if user owns this Note
      if (bill.user.toString() !== req.user.id) {
          return res.status(401).send("Not Allowed");
      }
      bill = await Bill.findByIdAndDelete(req.params.id)
      bill = await Bill.find({ user: req.user.id });
      res.json(bill);
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }
})
module.exports = router;
