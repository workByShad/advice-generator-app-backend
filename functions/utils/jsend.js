function jsendSuccess(data) {
  return {
    status: "success",
    data: data,
  };
}

function jsendFail(data) {
  return {
    status: "fail",
    data: data,
  };
}

function jsendError(message, code) {
  return {
    status: "error",
    message,
    code,
  };
}

module.exports = {
  jsendSuccess,
  jsendFail,
  jsendError,
};
