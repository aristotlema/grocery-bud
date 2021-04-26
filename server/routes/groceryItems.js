const express = require('express');
const router = express.Router();
const GroceryItem = require('../models/groceryItem');

// GET - ALL
router.get('/', async (req, res) => {
    try {
        const groceryItems = await GroceryItem.find();
        res.json(groceryItems);
    } catch (err) {
        res.status(500).json({ message: err });
    }
});

// POST - Create
router.post('/', async (req, res) => {
    const groceryItem = new GroceryItem({
        name: req.body.name
    });
    try {
        const newGroceryItem = await groceryItem.save();
        res.status(201).json(newGroceryItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete
router.delete('/:id', getGroceryItem, async (req, res) => {
    try {
        await res.groceryItem.remove();
        res.json({ message: "deleted grocery item"});
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

async function getGroceryItem(req, res, next) {
    let groceryItem;
    try {
        groceryItem = await GroceryItem.findById(req.params.id);
        if(groceryItem == null) {
            return res.status(404).json({ message: "Could not find grocery item with that ID "});
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.groceryItem = groceryItem;
    next();
}


module.exports = router;