const UserToken = require("../models/UserTokenSchema.js");
const sendErrorResponse = require("../utils/errorHandler.js");

async function getAccessToken(tokenType) {
  try {
    const accessToken = await UserToken.findOne({ tokenType: tokenType });
    return accessToken.accessToken;
  } catch (error) {
    const errorResponse = sendErrorResponse(error);
    console.error("Error:", errorResponse);
  }
}

module.exports = getAccessToken;
