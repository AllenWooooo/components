(function() {
  // 获取页面上所有的dropdown
  var dropdownEls = document.querySelectorAll(".dropdown");

  dropdownEls.forEach(function(item) {
    var toggleEl = item.querySelector(".dropdown-toggle");
    var menuEl = item.querySelector(".dropdown-menu");

    // 给按钮添加点击事件
    toggleEl.addEventListener("click", function(evt) {
      evt.preventDefault();
      evt.stopPropagation();

      dropdownEls.forEach(function(item) {
        // 只有当前被点击的元素才能打开
        if (item.contains(evt.target)) {
          // 判断是否已经是open状态
          var isOpen = item.classList.contains("open");
          var action = isOpen ? "remove" : "add";

          item.classList[action]("open");
        } else {
          item.classList.remove("open");
        }
      });
    });

    // dropdown-menu的元素北点击之后要关闭dropdown-menu
    menuEl.addEventListener("click", function(evt) {
      item.classList.remove("open");
    });
  });

  // 当点击dropdown以外的内容时关闭dropdown-menu
  document.addEventListener("click", function(evt) {
    var isDropdownClicked = [].some.call(dropdownEls, function(item) {
      return item.contains(evt.target);
    });

    if (!isDropdownClicked) {
      dropdownEls.forEach(function(item) {
        item.classList.remove("open");
      });
    }
  });
})();
