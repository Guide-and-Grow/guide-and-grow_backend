const health = async (req, res) => {
  res.json({
    status: "ok",
    message: `सर्वर चल रहा है बॉस | टेन्शन मत लो 🍺`,
  });
};

export default health