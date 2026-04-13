$(function () {

  // Page scroll
  var navHeight = $("header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  // Page-top
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});

// Check the local storage
var theme = localStorage.getItem('theme');
var theme_btn = document.getElementById('theme');
var theme_icon = document.getElementById('theme-icon');

function updateThemeIcon() {
  if (!theme_icon) {
    return;
  }

  if (theme_btn.checked) {
    theme_icon.className = 'bi bi-sun-fill';
  } else {
    theme_icon.className = 'bi bi-moon-fill';
  }
}

if (theme === 'dark') {
  document.documentElement.classList.add('dark-theme');
  theme_btn.checked = true;
}

updateThemeIcon();

// Switch theme (light and dark)
theme_btn.addEventListener("change", () => {
  if (theme_btn.checked == true) {
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }

  updateThemeIcon();
});
