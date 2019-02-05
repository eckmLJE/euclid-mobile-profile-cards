jQuery(window).on(
  "resize",
  _.debounce(calculateLayout, 150, {
    maxWait: 500
  })
);

function calculateLayout(e) {
  console.log(e);
}

$("#expand-all-button").click(function() {
  $(".collapse").collapse("show");
});
$("#collapse-all-button").click(function() {
  $(".collapse").collapse("hide");
});
