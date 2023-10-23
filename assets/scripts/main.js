var defaultMax = Math.exp(6) / 12;  // e⁶ / 12 = 33.5em

// random buffer to give for spacing.
// growth is inverse exponential, so larger is less likely
function buffer(min=1, max=defaultMax, mult=1) {
  return Math.min(max, Math.max(min,
    min / 2 + Math.exp(Math.random() * 6) * Math.random() * mult / 12
  ))+"em";
}
function randomize() {
  var keyword = document.getElementsByClassName("keyword");
  for (var p = 0; p < keyword.length; p++) {
    // random buffered margins, ordered: top right bottom left.
    // top is at least 0.1em, right and bottom are at least 0.25em.
    // top and bottom are cut in half to limit lost vertical space.
    keyword[p].style.padding = buffer(1) + " "
                          + buffer(1) + " "
                          + buffer(1, defaultMax, 0.5) + " "
                          + buffer(1);
    keyword[p].style.width = buffer(1);
    keyword[p].style.height = buffer(0);
  }
}