// Fallback
const fallback = (req, res) => {
  res.json({
    message: "route not set up.",
  });
};

module.exports = fallback;
