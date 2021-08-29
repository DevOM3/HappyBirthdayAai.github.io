party.confetti(runButton, {
  shapes: ["star", "roundedSquare", "rectangle", "circle", "roundedRectangle"],
  count: party.variation.range(40, 100),
});

window.onload = () => {
  document.body.click();
};
