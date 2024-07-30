const setData = async (docRef, adviceId, adviceText) => {
  await docRef.set({
    adviceId,
    adviceText,
  });
};

module.exports = { setData };
