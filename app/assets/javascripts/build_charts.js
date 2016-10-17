$(function () {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
        $('#daily').highcharts('StockChart', {
            chart: {
                events: {
                    load: function () {

                        // set up the updating of the chart every 5 seconds
                        var series = this.series[0];
                        setInterval(function () {
                            var x = (new Date()).getTime(), // current time
                                y = Math.round(Math.random() * 500);
                            series.addPoint([x, y], true, true);
                        }, 2000);
                    }
                }
            },
            rangeSelector: {
                allButtonsEnabled: true,
                buttons: [{
                    type: 'day',
                    count: 1,
                    text: '1d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'all',
                    text: 'all'
                }],
                buttonTheme: {
                    width: 60
                },
                selected: 0
            },
            title: {
                text: 'Calls Offered'
            },
            series: [{
                name: 'Calls Offered',
                data: data,
                type: 'areaspline',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            }]
        });
        $('#weekly').highcharts('StockChart', {
            rangeSelector: {
                allButtonsEnabled: true,
                buttons: [{
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'all',
                    text: 'all'
                }],
                buttonTheme: {
                    width: 60
                },
                selected: 0
            },
            title: {
                text: 'Calls Offered'
            },
            series: [{
                name: 'Calls Offered',
                data: data,
                type: 'areaspline',
                threshold: null,
                tooltip: {
                    valueDecimals: 1
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            }],
            xAxis: {
                tickInterval:10,

            }
        });
        $('#monthly').highcharts('StockChart', {
            rangeSelector: {
                allButtonsEnabled: true,
                buttons: [{
                    type: 'month',
                    count: 3,
                    text: '3m'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                }, {
                    type: 'all',
                    text: 'all'
                }],
                buttonTheme: {
                    width: 60
                },
                selected: 0
            },
            title: {
                text: 'Calls Offered'
            },
            series: [{
                name: 'Calls Offered',
                data: data,
                type: 'areaspline',
                threshold: null,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                }
            }]
        });
    })
});