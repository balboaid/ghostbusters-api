module.exports = function detectGhost(data) {
  if (!data.found) {
    return {
      ghostScore: 100,
      verdict: "ghost"
    };
  }

  return {
    ghostScore: 0,
    verdict: "real"
  };
};