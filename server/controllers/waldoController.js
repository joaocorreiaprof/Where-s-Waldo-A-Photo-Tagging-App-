//waldo area
let waldoArea = {
  xMin: 41.0,
  xMax: 44.0,
  yMin: 17.0,
  yMax: 22.0,
};

module.exports = {
  validateSelection: async (req, res) => {
    const { x, y, character } = req.body;

    //First, checks if user selected different than waldo
    if (character !== "waldo") {
      return res.json({ message: "❌ Wrong choice! Try again.", found: false });
    }

    //Checks if user clicked inside waldo
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
  },
};
