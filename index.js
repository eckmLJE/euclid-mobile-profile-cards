jQuery(window).on(
  "resize",
  _.debounce(calculateLayout, 150, {
    maxWait: 500
  })
);

function calculateLayout(e) {
  console.log(e);
}

// Individual Card Collapse-Expand + Chevron Controller

$(".card-collapse-controller").click(toggleCardChevron);

function toggleCardChevron() {
  $(this)
    .find("i")
    .toggleClass("fa-chevron-down fa-chevron-up");
}

// Collapse-/Expand- All + Chevrons Controller

$("#profile-expand-all-div").click(expandAllSm);
$("#profile-collapse-all-div").click(collapseAllSm);
$("#expand-all-button-sm").click(expandAllSm);
$("#collapse-all-button-sm").click(collapseAllSm);

function expandAllSm() {
  expandAllCards();
  toggleAllControllers();
  setControllerChevronsExpand();
}

function collapseAllSm() {
  collapseAllCards();
  toggleAllControllers();
  setControllerChevronsCollapse();
}

function expandAllCards() {
  $(".collapse").collapse("show");
}

function collapseAllCards() {
  $(".collapse").collapse("hide");
}

function toggleAllControllers() {
  $("#profile-expand-all-div").toggleClass("d-none");
  $("#profile-collapse-all-div").toggleClass("d-none");
  $("#expand-button-div-sm").toggleClass("d-none");
  $("#collapse-button-div-sm").toggleClass("d-none");
}

function setControllerChevronsCollapse() {
  $("a.card-collapse-controller")
    .find("i")
    .removeClass("fa-chevron-up")
    .addClass("fa-chevron-down");
}

function setControllerChevronsExpand() {
  $("a.card-collapse-controller")
    .find("i")
    .removeClass("fa-chevron-down")
    .addClass("fa-chevron-up");
}
