let marioArea = {
  xMin: 57.0,
  xMax: 67.0,
  yMin: 3.0,
  yMax: 10.0,
};

let warioArea = {
  xMin: 87.0,
  xMax: 99.0,
  yMin: 87.0,
  yMax: 97.0,
};

let peachArea = {
  xMin: 28.0,
  xMax: 34.0,
  yMin: 32.0,
  yMax: 37.0,
};

module.exports = {
  validateSelection: async (req, res) => {
    const { x, y, character } = req.body;

    if (character === "mario") {
      const isInsideX = x >= marioArea.xMin && x <= marioArea.xMax;
      const isInsideY = y >= marioArea.yMin && y <= marioArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Mario!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "wario") {
      const isInsideX = x >= warioArea.xMin && x <= warioArea.xMax;
      const isInsideY = y >= warioArea.yMin && y <= warioArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Wario!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "peach") {
      const isInsideX = x >= peachArea.xMin && x <= peachArea.xMax;
      const isInsideY = y >= peachArea.yMin && y <= peachArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({
          message: "🎉 You found Princess Peach!",
          found: true,
        });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
  },
};
