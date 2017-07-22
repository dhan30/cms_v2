var express = require('express');
var router = express.Router();
var events = require('../events');

var Client = require("../models/Client");
var Address = require("../models/Address");

router.get('/client/:clientId', function (req, res) {
    Client.findById(req.params.clientId).populate("address").exec(function (err, client) {
        if (err) {
            console.log("Client not found");
            res.send(err);
        }
        res.json(client);
    })
})

router.get('/clients', function (req, res) {
    Client.find({}).populate("address").exec(function (err, client) {
        if (err) {
            console.log("Client not found");
            res.send(err);
        }
        console.log(events);
        res.send(events);
    })
})

router.post('/address/:clientId', function (req, res) {
    var address = new Address(req.body);

    address.save(function (err, doc) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            Client.findByIdAndUpdate({
                _id: req.params.clientId
            }, {
                $set: {
                    "address": doc._id
                }
            }, {
                new: true
            }, function (err, addr) {
                if (err) {
                    console.log("Something wrong with updating client address", err);
                    res.send(err);
                }
                res.json(addr);
            })
        }
    })
})

router.post('/newClient', function (req, res) {
    var newClient = new Client(req.body);

    newClient.save(function (err, client) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.json(client);
        }
    })
})

router.patch('/address/:clientId', function (req, res) {
    Client.findById(req.params.clientId, function (err, client) {
        if (err) {
            console.log(err);
            res.send(err)
        }
        Address.findByIdAndUpdate(client.address, {
            $set: req.body
        }, {
            new: true
        }, function (err, address) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.json(address);
        })
    })
})

module.exports = router;

