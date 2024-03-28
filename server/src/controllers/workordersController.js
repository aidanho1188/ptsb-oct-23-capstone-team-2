const express = require("express");
const axios = require("axios");
const getAccessToken = require("../utils/getAccessToken.js");
const saveUpdatedWorkOrder = require("../utils/saveUpdatedWorkOrder.js");
const {
  fetchData,
  sendStatusUpdateRequest,
  fetchWorkOrder,
} = require("../services/apiService.js");
const getupdateWorkOrders = require("../utils/getUpdatedWorkOrder.js");

const open = async (req, res, next) => {
  try {
    const data = await fetchData(
      "workorders",
      "Id,LocationId,Trade,Status",
      "Status/Primary eq 'OPEN'"
    );
    console.log("data1: open workorders");
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const onSite = async (req, res, next) => {
  try {
    const data = await fetchData(
      "workorders",
      "Id,LocationId,Trade,Status",
      "Status/Extended eq 'ON SITE'"
    );
    console.log("data2: on site workorders");
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};
const awaitingQuote = async (req, res, next) => {
  try {
    const data = await fetchData(
      "workorders",
      "Id,LocationId,Trade,Status",
      "Status/Extended eq 'WAITING FOR QUOTE'"
    );
    console.log("data3: awaiting quote workorders");
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const incomplete = async (req, res, next) => {
  try {
    const data = await fetchData(
      "workorders",
      "Id,LocationId,Trade,Status",
      "Status/Extended eq 'INCOMPLETE'"
    );
    console.log("data4: incomplete workorders");
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const completed = async (req, res, next) => {
  try {
    const data = await fetchData(
      "workorders",
      "Id,LocationId,Trade,Status",
      "Status/Primary eq 'COMPLETED'"
    );
    console.log("data5: completed workorders");
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateWorkOrderStatus = async (req, res, next) => {
  try {
    const primary = req.body.status.split("/")[0];
    const extended = req.body.status.split("/")[1];
    const response = await sendStatusUpdateRequest(
      req.params.workOrderId,
      primary,
      extended
    );
    console.log("data6: workorder update");
    // check if status is updated
    console.log(response);
    // console.log(req.body.status)
    if (response.result !== "") {
      console.log("Saving updated work order...");
      saveUpdatedWorkOrder(response);
    }
    res.json(response);
  } catch (error) {
    res.json(error);
    console.log(error);
  }
};

const getRecentsWorkorders = async (req, res, next) => {
  try {
    const data = await getupdateWorkOrders(req, res);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const getWorkOrder = async (req, res, next) => {
  console.log("Getting work order by id");
  try {
    const data = await fetchWorkOrder(req.params.workOrderId);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

const getGPSRadius = async (req, res, next) => {
  try {
    const data = await fetchGPSRadius(req.params.workOrderId);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  open,
  onSite,
  incomplete,
  awaitingQuote,
  completed,
  updateWorkOrderStatus,
  getWorkOrder,
  getRecentsWorkorders,
  getGPSRadius,
};
