export function onInitAnimation() {
  // Variables

  var last_known_scroll_position = 0;
  var ticking = false;

  // Scroll Listener
  // https://developer.mozilla.org/en-US/docs/Web/Events/scroll
  window.addEventListener("scroll", function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        scrollEvent(last_known_scroll_position);
        ticking = false;
      });
    }

    ticking = true;
  });
}

// Handle the functionality
function scrollEvent(scrollPos) {
  var curve = document.getElementById("curve");
  var defaultCurveValue = 350;
  var curveRate = 3;
  var curveValue;

  if (scrollPos >= 0) {
    curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);

    if (curve)
      curve.setAttribute(
        "d",
        "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
      );
  }
}
