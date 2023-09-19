
window.onload = function() {
    var endDate = new Date("October 18, 2025 12:00:00").getTime();
    var counting = setInterval(function() {
        var startDate = new Date().getTime();
        var remainDate = endDate - startDate;
        var days = Math.floor(remainDate / (1000 * 3600 * 24));
        var hours = Math.floor((remainDate % (1000 * 3600 * 24)) / (1000 * 3600));
        var minutes = Math.floor((remainDate % (1000 * 3600)) / (1000 * 60));
        var seconds = Math.floor((remainDate % (1000 * 60) / 1000));

        var timerElement = document.getElementById("countTimer");
        if (timerElement) {
            timerElement.innerHTML = days + " Days : " + hours + " Hrs : " + minutes + " Min : " + seconds + " Sec ";
        }
    }, 1000);
};
