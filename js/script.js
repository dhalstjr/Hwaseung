$(function () {
  // family site
  $('.family-site select').on('change', function () {
    const linkValue = $(this).val();
    console.log(linkValue);
    window.open(linkValue);
  });
});
