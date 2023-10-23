var defaultMax = Math.exp(6) / 12;  // e⁶ / 12 = 33.5em

// random buffer to give for spacing.
// growth is inverse exponential, so larger is less likely
function buffer(min=0.1, max=defaultMax, mult=1) {
  return Math.min(max, Math.max(min,
    min / 2 + Math.exp(Math.random() * 6) * Math.random() * mult / 12
  ))+"em";
}
function randomize() {
  var posts = document.getElementsByClassName("posts");
  for (var p = 0; p < posts.length; p++) {
    // random buffered margins, ordered: top right bottom left.
    // top is at least 0.1em, right and bottom are at least 0.25em.
    // top and bottom are cut in half to limit lost vertical space.
    posts[p].style.margin = buffer(0.1,  defaultMax, 0.5) + " "
                          + buffer(0.25) + " "
                          + buffer(0.25, defaultMax, 0.5) + " "
                          + buffer();
  }
}