jQuery(window).on(
  "resize",
  _.debounce(calculateLayout, 150, {
    maxWait: 500
  })
);

function calculateLayout(e) {
  console.log(e);
}

$("#profile-expand-all-div").click(expandAllProfile);
$("#profile-collapse-all-div").click(collapseAllProfile);
$("#expand-all-button-sm").click(expandAllSm);
$("#collapse-all-button-sm").click(collapseAllSm);

function expandAll() {
  $(".collapse").collapse("show");
}

function collapseAll() {
  $(".collapse").collapse("hide");
}

function expandAllSm() {
  expandAll();
  $("#expand-button-div-sm").toggleClass("d-none");
  $("#collapse-button-div-sm").toggleClass("d-none");
}

function collapseAllSm() {
  collapseAll();
  $("#expand-button-div-sm").toggleClass("d-none");
  $("#collapse-button-div-sm").toggleClass("d-none");
}

$(".card-collapse-controller").click(function() {
  $(this)
    .find("i")
    .toggleClass("fa-chevron-down");
  $(this)
    .find("i")
    .toggleClass("fa-chevron-up");
});

function collapseAllProfile() {
  collapseAll();
  $("#profile-expand-all-div").toggleClass("d-none");
  $("#profile-collapse-all-div").toggleClass("d-none");
}

function expandAllProfile() {
  expandAll();
  $("#profile-collapse-all-div").toggleClass("d-none");
  $("#profile-expand-all-div").toggleClass("d-none");
}
