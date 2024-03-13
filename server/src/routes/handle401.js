const express = require('express');
const router = express.Router()
const axios = require('axios');
const refetchAccessToken = require('../services/tokenService.js');

async function handle401(req, res, next) {
    try {
        if (res.statusCode === 401) {
            await refetchAccessToken();
            console.log('Attempting to refresh token')
        }
        next();
    } catch (error) {
        console.error('Error attempting to refresh token:' error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = {handle401, router}