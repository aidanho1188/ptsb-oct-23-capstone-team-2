const sendErrorResponse = (error, res) => {
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';
    console.error(error);
  
    if (res && res.statusCode) {
      statusCode = res.statusCode;
      errorMessage = res.statusMessage || errorMessage;
    }
  
    return {
      statusCode,
      errorMessage,
      error: error.message || error
    };
  };
  
  module.exports = sendErrorResponse;
