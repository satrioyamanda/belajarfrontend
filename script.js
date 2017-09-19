var overlay = $('.overlay'),
  menuItem = $('.menu-item-has-children');

menuItem.hover(
  function () {
    overlay.addClass('active');
  }, function () {
    overlay.removeClass('active');
  }
);

var specialLinks = document.querySelectorAll('.menu-item-child-list a');
var itemLink = document.querySelectorAll(".item-link");
var itemImage = document.getElementsByClassName('item-image');
var maxLength = itemLink.length;

for (var x = 0; x < specialLinks.length; x++) {
  specialLinks[x].addEventListener("mouseover", retrieve, true);

  function retrieve(e) {
    for (var i = 0; i < document.querySelectorAll(".item-link").length; i++) {
      itemLink[i].setAttribute('href', e.target.getAttribute("data-url-" + i));
      itemImage[i].setAttribute('src', e.target.getAttribute("data-img-" + i));
    }
  }
}