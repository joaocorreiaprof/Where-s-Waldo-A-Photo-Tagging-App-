let waldoArea = {
  xMin: 41.0,
  xMax: 44.0,
  yMin: 17.0,
  yMax: 22.0,
};

let dogArea = {
  xMin: 62.0,
  xMax: 66.0,
  yMin: 70.0,
  yMax: 75,
};

let evilArea = {
  xMin: 62.0,
  xMax: 66.0,
  yMin: 81.0,
  yMax: 93.0,
};

module.exports = {
  validateSelection: async (req, res) => {
    const { x, y, character } = req.body;

    if (character === "waldo") {
      const isInsideX = x >= waldoArea.xMin && x <= waldoArea.xMax;
      const isInsideY = y >= waldoArea.yMin && y <= waldoArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Waldo!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "dog") {
      const isInsideX = x >= dogArea.xMin && x <= dogArea.xMax;
      const isInsideY = y >= dogArea.yMin && y <= dogArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Dog!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
    if (character === "evil") {
      const isInsideX = x >= evilArea.xMin && x <= evilArea.xMax;
      const isInsideY = y >= evilArea.yMin && y <= evilArea.yMax;

      if (isInsideX && isInsideY) {
        return res.json({ message: "🎉 You found Evil Man!", found: true });
      } else {
        return res.json({
          message: "❌ Not quite! Try again.",
          found: false,
        });
      }
    }
  },
};
