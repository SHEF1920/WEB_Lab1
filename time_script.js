document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('load', function() {
        var loadTime = performance.now();
        console.log('Время загрузки страницы: ' + loadTime + ' мс');

        var element = document.getElementById('loadTimeInfo');
        element.innerHTML = 'Время загрузки страницы: ' + loadTime.toFixed(3) + ' мс';
    });
});