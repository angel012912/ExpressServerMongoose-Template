/*
Author: Jose Angel Garcia Gomez
Date: 13-04-2023
Description: Program that implements the controllers to be used in the routes
*/

const Sample = require("../models/SampleModel");

exports.getSample = async (req, res) => {
    try {
        const sample = await Sample.find();
        res.status(200).json({
            status: "success",
            results: sample.length,
            data: {
                sample
            }
        });
    } catch (e) {
        res.status(404).json({
            status: "fail",
            message: e
        });
    }
};

exports.postSample = async (req, res) => {
    try {
        const newSample = new Sample({
            field: req.body.field,
            field2: req.body.field2
        });
        await newSample.save();
        res.status(201).json({
            status: "success",
            data: {
                newSample
            }
        });
    } catch (e) {
        res.status(400).json({
            status: "fail",
            message: e
        });
    }
};

exports.getSampleExtendedPath = async (req, res) => {
    try {
        const sample = await Sample.find();
        res.status(200).json({
            status: "success",
            results: sample.length,
            data: {
                "retrieved from extended path": sample
            }
        });
    } catch (e) {
        res.status(404).json({
            status: "fail",
            message: e
        });
    }
};

exports.getSampleParameter = async (req, res) => {
    try {
        const sample = await Sample.find({_id: req.params.id});
        res.status(200).json({
            status: "success",
            data: {
                sample
            }
        });
    } catch (e) {
        res.status(404).json({
            status: "fail",
            message: e
        });
    }
};

