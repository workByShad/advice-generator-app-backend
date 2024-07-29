// Controllers

const getAllAdvice = (req, res) => {
  res.send("Get all advice");
};
const postAdvice = (req, res) => {
  res.send("Create an advice");
};

const getAdvice = (req, res) => {
  res.send("Get an advice");
};
const deleteAdvice = (req, res) => {
  res.send("Delete an advice");
};

module.exports = { getAllAdvice, postAdvice, getAdvice, deleteAdvice };
