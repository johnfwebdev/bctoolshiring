$(function(){$.getJSON("https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?",function(t){$("#daily").highcharts("StockChart",{chart:{events:{load:function(){var t=this.series[0];setInterval(function(){var e=(new Date).getTime(),l=Math.round(100*Math.random());t.addPoint([e,l],!0,!0)},2e3)}}},rangeSelector:{allButtonsEnabled:!0,buttons:[{type:"day",count:1,text:"1d"},{type:"week",count:1,text:"1w"},{type:"all",text:"all"}],buttonTheme:{width:60},selected:0},title:{text:"Calls Offered"},series:[{name:"Calls Offered",data:t,type:"areaspline",threshold:null,tooltip:{valueDecimals:2},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]]}}]}),$("#weekly").highcharts("StockChart",{rangeSelector:{allButtonsEnabled:!0,buttons:[{type:"week",count:1,text:"1w"},{type:"month",count:1,text:"1m"},{type:"all",text:"all"}],buttonTheme:{width:60},selected:0},title:{text:"Calls Offered"},series:[{name:"Calls Offered",data:t,type:"areaspline",threshold:null,tooltip:{valueDecimals:1},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]]}}],xAxis:{tickInterval:10}}),$("#monthly").highcharts("StockChart",{rangeSelector:{allButtonsEnabled:!0,buttons:[{type:"month",count:3,text:"3m"},{type:"month",count:6,text:"6m"},{type:"all",text:"all"}],buttonTheme:{width:60},selected:0},title:{text:"Calls Offered"},series:[{name:"Calls Offered",data:t,type:"areaspline",threshold:null,tooltip:{valueDecimals:2},fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,Highcharts.getOptions().colors[0]],[1,Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get("rgba")]]}}]})})});