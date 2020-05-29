$("#toggler").click(function () {
  if ($(this).is(":checked")) {
    $("#navList").css("visibility", "visible");
    $("#mainNav").animate({ height: "100vh" }, 500);
    $("#productsBlock").css("display", "none");
  } else {
    $("#navList").css("visibility", "hidden");
    $("#mainNav").animate({ height: "6.1rem" }, 500);
    $("#productsBlock").css("display", "block");
  }
});
