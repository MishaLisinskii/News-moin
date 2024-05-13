function showNews(country) {
    var newsSections = document.querySelectorAll('.news');
    newsSections.forEach(function(section) {
        section.classList.remove('active');
    });
    var selectedNews = document.getElementById(country);
    selectedNews.classList.add('active');
}