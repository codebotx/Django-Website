google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Free');
    data.addColumn('number', 'used');
    data.addColumn('number', 'Reserved');

    data.addRows([
        [1,  37, 80, 41],
        [2,  30, 69, 32],
        [3,  25, 57, 25],
        [4,  11, 18, 10],
        [5,  11, 17, 10],
        [6,   8, 13,  7],
        [7,   7, 12,  9],
        [8,  12, 29, 10],
        [9,  16, 42, 14],
        [10, 12, 30, 11],
        [11,  5,  7,  4],
        [12,  6,  8,  5],
        [13,  4,  6,  3],
        [14,  4,  6,  3]
    ]);

    var options = {
        width: 900,
        height: 400
    };

    var chart = new google.charts.Line(document.getElementById('weeklyUsed'));

    chart.draw(data, google.charts.Line.convertOptions(options));
}