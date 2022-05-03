$(document).ready(() => {
  const open = $("#open");
  const close = $("#close");
  const container = $(".container");

  open.click(() => {
    container.addClass("show");
  });
  close.click(() => {
    container.removeClass("show");
  });
});
