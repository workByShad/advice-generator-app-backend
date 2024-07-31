const setData = async (docRef, adviceText) => {
  await docRef.set({
    adviceText,
  });
};

module.exports = { setData };
