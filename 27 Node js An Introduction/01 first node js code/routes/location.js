const express = require("express");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const router = express.Router();

const url =
  "mongodb+srv://admin:web2mode@cluster0.7trgf.mongodb.net/locations?retryWrites=true&w=majority";

const client = new MongoClient(url);

const locationStorage = {
  locations: [],
};

router.post("/add-location", (req, res, next) => {
  // const id = Math.random();
  client.connect(function (err, client) {
    const db = client.db('locations');
    db.collection("inserts").insertOne(
      {
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
      },
      function (err, r) {
        console.log(r);
        res.json({message: 'Stored location!', locId: r.insertedId});
      }
    );
  });
});

router.get("/location/:lid", (req, res, next) => {
  const locationId = req.params.lid;
  client.connect(function (err, client) {
    const db = client.db('locations');
    db.collection("inserts").findOne(
      {
        _id: new mongodb.ObjectId(locationId)
      },
      function (err, doc) {
        if (!doc) {
          res.status(404).json({ message: "Not found!" });
        }
        res.json({ address: doc.address, coordinates: doc.coords });
      }
    );
  });
});

module.exports = router;
