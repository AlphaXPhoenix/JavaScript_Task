//Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."


function printForecast(rec){
    for(let i of rec){
        console.log(`${i}oC in ${rec.indexOf(i)+1} days`);
    }
}
printForecast([17, 21, 23]);