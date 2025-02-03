let mikeArea = {
  xMin: 63.0,
  xMax: 67.0,
  yMin: 61.0,
  yMax: 64.0,
};

let leonardoArea = {
  xMin: 59.0,
  xMax: 63.0,
  yMin: 40.0,
  yMax: 44.0,
};

let obelixArea = {
  xMin: 30.0,
  xMax: 34.0,
  yMin: 43.0,
  yMax: 47.0,
};

module.exports = {
  validateSelection: async (req, res) => {
    const { x, y, character } = req.body;

    if (character === "mike") {
      const isInsideX = x >= mikeArea.xMin && x <= mikeArea.xMax;
      const isInsideY = y >= mikeArea.yMin && y <= mikeArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Mike!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "leonardo") {
      const isInsideX = x >= leonardoArea.xMin && x <= leonardoArea.xMax;
      const isInsideY = y >= leonardoArea.yMin && y <= leonardoArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Leonardo!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "obelix") {
      const isInsideX = x >= obelixArea.xMin && x <= obelixArea.xMax;
      const isInsideY = y >= obelixArea.yMin && y <= obelixArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Obelix!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
  },
};
