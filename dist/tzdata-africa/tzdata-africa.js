(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.tzdataAfrica = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"timezonecomplete":[function(require,module,exports){
module.exports={"zones":{"Africa/Algiers":[["-12.2","-","LMT","-2486678340000"],["-9.35","-","PMT","-1855958400000"],["0","Algeria","WE%sT","-942012000000"],["-60","Algeria","CE%sT","-733276800000"],["0","-","WET","-439430400000"],["-60","-","CET","-212025600000"],["0","Algeria","WE%sT","246240000000"],["-60","Algeria","CE%sT","309744000000"],["0","Algeria","WE%sT","357523200000"],["-60","-","CET",null]],"Atlantic/Cape_Verde":[["94.06666666666668","-","LMT","-1956700800000"],["120","-","CVT","-862617600000"],["120","1:00","CVST","-764121600000"],["120","-","CVT","186112800000"],["60","-","CVT",null]],"Africa/Ndjamena":[["-60.2","-","LMT","-1798848000000"],["-60","-","WAT","308707200000"],["-60","1:00","WAST","321321600000"],["-60","-","WAT",null]],"Africa/Abidjan":[["16.133333333333333","-","LMT","-1798848000000"],["0","-","GMT",null]],"Africa/Bamako":"Africa/Abidjan","Africa/Banjul":"Africa/Abidjan","Africa/Conakry":"Africa/Abidjan","Africa/Dakar":"Africa/Abidjan","Africa/Freetown":"Africa/Abidjan","Africa/Lome":"Africa/Abidjan","Africa/Nouakchott":"Africa/Abidjan","Africa/Ouagadougou":"Africa/Abidjan","Africa/Sao_Tome":"Africa/Abidjan","Atlantic/St_Helena":"Africa/Abidjan","Africa/Cairo":[["-125.15","-","LMT","-2185401600000"],["-120","Egypt","EE%sT",null]],"Africa/Accra":[["0.8666666666666666","-","LMT","-1609545600000"],["0","Ghana","%s",null]],"Africa/Bissau":[["62.333333333333336","-","LMT","-1830384000000"],["60","-","WAT","189216000000"],["0","-","GMT",null]],"Africa/Nairobi":[["-147.26666666666665","-","LMT","-1309737600000"],["-180","-","EAT","-1230854400000"],["-150","-","BEAT","-915235200000"],["-165","-","BEAUT","-284083200000"],["-180","-","EAT",null]],"Africa/Addis_Ababa":"Africa/Nairobi","Africa/Asmara":"Africa/Nairobi","Africa/Dar_es_Salaam":"Africa/Nairobi","Africa/Djibouti":"Africa/Nairobi","Africa/Kampala":"Africa/Nairobi","Africa/Mogadishu":"Africa/Nairobi","Indian/Antananarivo":"Africa/Nairobi","Indian/Comoro":"Africa/Nairobi","Indian/Mayotte":"Africa/Nairobi","Africa/Monrovia":[["43.13333333333333","-","LMT","-2745532800000"],["43.13333333333333","-","MMT","-1604361600000"],["44.5","-","LRT","73526400000"],["0","-","GMT",null]],"Africa/Tripoli":[["-52.733333333333334","-","LMT","-1546387200000"],["-60","Libya","CE%sT","-315705600000"],["-120","-","EET","410140800000"],["-60","Libya","CE%sT","641779200000"],["-120","-","EET","844041600000"],["-60","Libya","CE%sT","875923200000"],["-120","-","EET","1352512800000"],["-60","Libya","CE%sT","1382666400000"],["-120","-","EET",null]],"Indian/Mauritius":[["-230","-","LMT","-1956700800000"],["-240","Mauritius","MU%sT",null]],"Africa/Casablanca":[["30.333333333333332","-","LMT","-1773014400000"],["0","Morocco","WE%sT","448243200000"],["-60","-","CET","536371200000"],["0","Morocco","WE%sT",null]],"Africa/El_Aaiun":[["52.8","-","LMT","-1136073600000"],["60","-","WAT","198288000000"],["0","Morocco","WE%sT",null]],"Africa/Maputo":[["-130.33333333333331","-","LMT","-2109283200000"],["-120","-","CAT",null]],"Africa/Blantyre":"Africa/Maputo","Africa/Bujumbura":"Africa/Maputo","Africa/Gaborone":"Africa/Maputo","Africa/Harare":"Africa/Maputo","Africa/Kigali":"Africa/Maputo","Africa/Lubumbashi":"Africa/Maputo","Africa/Lusaka":"Africa/Maputo","Africa/Windhoek":[["-68.4","-","LMT","-2458166400000"],["-90","-","SWAT","-2109283200000"],["-120","-","SAST","-860968800000"],["-120","1:00","SAST","-845244000000"],["-120","-","SAST","637977600000"],["-120","-","CAT","765331200000"],["-60","Namibia","WA%sT",null]],"Africa/Lagos":[["-13.6","-","LMT","-1588464000000"],["-60","-","WAT",null]],"Africa/Bangui":"Africa/Lagos","Africa/Brazzaville":"Africa/Lagos","Africa/Douala":"Africa/Lagos","Africa/Kinshasa":"Africa/Lagos","Africa/Libreville":"Africa/Lagos","Africa/Luanda":"Africa/Lagos","Africa/Malabo":"Africa/Lagos","Africa/Niamey":"Africa/Lagos","Africa/Porto-Novo":"Africa/Lagos","Indian/Reunion":[["-221.86666666666665","-","LMT","-1848873600000"],["-240","-","RET",null]],"Indian/Mahe":[["-221.8","-","LMT","-2006640000000"],["-240","-","SCT",null]],"Africa/Johannesburg":[["-112","-","LMT","-2458166400000"],["-90","-","SAST","-2109283200000"],["-120","SA","SAST",null]],"Africa/Maseru":"Africa/Johannesburg","Africa/Mbabane":"Africa/Johannesburg","Africa/Khartoum":[["-130.13333333333333","-","LMT","-1199318400000"],["-120","Sudan","CA%sT","947937600000"],["-180","-","EAT",null]],"Africa/Juba":"Africa/Khartoum","Africa/Tunis":[["-40.733333333333334","-","LMT","-2797200000000"],["-9.35","-","PMT","-1855958400000"],["-60","Tunisia","CE%sT",null]]},"rules":{"Algeria":[["1916","only","-","Jun","14",["23","0","0","s"],"60","S"],["1916","1919","-","Oct","Sun>=1",["23","0","0","s"],"0","-"],["1917","only","-","Mar","24",["23","0","0","s"],"60","S"],["1918","only","-","Mar","9",["23","0","0","s"],"60","S"],["1919","only","-","Mar","1",["23","0","0","s"],"60","S"],["1920","only","-","Feb","14",["23","0","0","s"],"60","S"],["1920","only","-","Oct","23",["23","0","0","s"],"0","-"],["1921","only","-","Mar","14",["23","0","0","s"],"60","S"],["1921","only","-","Jun","21",["23","0","0","s"],"0","-"],["1939","only","-","Sep","11",["23","0","0","s"],"60","S"],["1939","only","-","Nov","19",["1","0","0",null],"0","-"],["1944","1945","-","Apr","Mon>=1",["2","0","0",null],"60","S"],["1944","only","-","Oct","8",["2","0","0",null],"0","-"],["1945","only","-","Sep","16",["1","0","0",null],"0","-"],["1971","only","-","Apr","25",["23","0","0","s"],"60","S"],["1971","only","-","Sep","26",["23","0","0","s"],"0","-"],["1977","only","-","May","6",["0","0","0",null],"60","S"],["1977","only","-","Oct","21",["0","0","0",null],"0","-"],["1978","only","-","Mar","24",["1","0","0",null],"60","S"],["1978","only","-","Sep","22",["3","0","0",null],"0","-"],["1980","only","-","Apr","25",["0","0","0",null],"60","S"],["1980","only","-","Oct","31",["2","0","0",null],"0","-"]],"Egypt":[["1940","only","-","Jul","15",["0","0","0",null],"60","S"],["1940","only","-","Oct","1",["0","0","0",null],"0","-"],["1941","only","-","Apr","15",["0","0","0",null],"60","S"],["1941","only","-","Sep","16",["0","0","0",null],"0","-"],["1942","1944","-","Apr","1",["0","0","0",null],"60","S"],["1942","only","-","Oct","27",["0","0","0",null],"0","-"],["1943","1945","-","Nov","1",["0","0","0",null],"0","-"],["1945","only","-","Apr","16",["0","0","0",null],"60","S"],["1957","only","-","May","10",["0","0","0",null],"60","S"],["1957","1958","-","Oct","1",["0","0","0",null],"0","-"],["1958","only","-","May","1",["0","0","0",null],"60","S"],["1959","1981","-","May","1",["1","0","0",null],"60","S"],["1959","1965","-","Sep","30",["3","0","0",null],"0","-"],["1966","1994","-","Oct","1",["3","0","0",null],"0","-"],["1982","only","-","Jul","25",["1","0","0",null],"60","S"],["1983","only","-","Jul","12",["1","0","0",null],"60","S"],["1984","1988","-","May","1",["1","0","0",null],"60","S"],["1989","only","-","May","6",["1","0","0",null],"60","S"],["1990","1994","-","May","1",["1","0","0",null],"60","S"],["1995","2010","-","Apr","lastFri",["0","0","0","s"],"60","S"],["1995","2005","-","Sep","lastThu",["24","0","0",null],"0","-"],["2006","only","-","Sep","21",["24","0","0",null],"0","-"],["2007","only","-","Sep","Thu>=1",["24","0","0",null],"0","-"],["2008","only","-","Aug","lastThu",["24","0","0",null],"0","-"],["2009","only","-","Aug","20",["24","0","0",null],"0","-"],["2010","only","-","Aug","10",["24","0","0",null],"0","-"],["2010","only","-","Sep","9",["24","0","0",null],"60","S"],["2010","only","-","Sep","lastThu",["24","0","0",null],"0","-"],["2014","only","-","May","15",["24","0","0",null],"60","S"],["2014","only","-","Jun","26",["24","0","0",null],"0","-"],["2014","only","-","Jul","31",["24","0","0",null],"60","S"],["2014","only","-","Sep","lastThu",["24","0","0",null],"0","-"]],"Ghana":[["1920","1942","-","Sep","1",["0","0","0",null],"20","GHST"],["1920","1942","-","Dec","31",["0","0","0",null],"0","GMT"]],"Libya":[["1951","only","-","Oct","14",["2","0","0",null],"60","S"],["1952","only","-","Jan","1",["0","0","0",null],"0","-"],["1953","only","-","Oct","9",["2","0","0",null],"60","S"],["1954","only","-","Jan","1",["0","0","0",null],"0","-"],["1955","only","-","Sep","30",["0","0","0",null],"60","S"],["1956","only","-","Jan","1",["0","0","0",null],"0","-"],["1982","1984","-","Apr","1",["0","0","0",null],"60","S"],["1982","1985","-","Oct","1",["0","0","0",null],"0","-"],["1985","only","-","Apr","6",["0","0","0",null],"60","S"],["1986","only","-","Apr","4",["0","0","0",null],"60","S"],["1986","only","-","Oct","3",["0","0","0",null],"0","-"],["1987","1989","-","Apr","1",["0","0","0",null],"60","S"],["1987","1989","-","Oct","1",["0","0","0",null],"0","-"],["1997","only","-","Apr","4",["0","0","0",null],"60","S"],["1997","only","-","Oct","4",["0","0","0",null],"0","-"],["2013","only","-","Mar","lastFri",["1","0","0",null],"60","S"],["2013","only","-","Oct","lastFri",["2","0","0",null],"0","-"]],"Mauritius":[["1982","only","-","Oct","10",["0","0","0",null],"60","S"],["1983","only","-","Mar","21",["0","0","0",null],"0","-"],["2008","only","-","Oct","lastSun",["2","0","0",null],"60","S"],["2009","only","-","Mar","lastSun",["2","0","0",null],"0","-"]],"Morocco":[["1939","only","-","Sep","12",["0","0","0",null],"60","S"],["1939","only","-","Nov","19",["0","0","0",null],"0","-"],["1940","only","-","Feb","25",["0","0","0",null],"60","S"],["1945","only","-","Nov","18",["0","0","0",null],"0","-"],["1950","only","-","Jun","11",["0","0","0",null],"60","S"],["1950","only","-","Oct","29",["0","0","0",null],"0","-"],["1967","only","-","Jun","3",["12","0","0",null],"60","S"],["1967","only","-","Oct","1",["0","0","0",null],"0","-"],["1974","only","-","Jun","24",["0","0","0",null],"60","S"],["1974","only","-","Sep","1",["0","0","0",null],"0","-"],["1976","1977","-","May","1",["0","0","0",null],"60","S"],["1976","only","-","Aug","1",["0","0","0",null],"0","-"],["1977","only","-","Sep","28",["0","0","0",null],"0","-"],["1978","only","-","Jun","1",["0","0","0",null],"60","S"],["1978","only","-","Aug","4",["0","0","0",null],"0","-"],["2008","only","-","Jun","1",["0","0","0",null],"60","S"],["2008","only","-","Sep","1",["0","0","0",null],"0","-"],["2009","only","-","Jun","1",["0","0","0",null],"60","S"],["2009","only","-","Aug","21",["0","0","0",null],"0","-"],["2010","only","-","May","2",["0","0","0",null],"60","S"],["2010","only","-","Aug","8",["0","0","0",null],"0","-"],["2011","only","-","Apr","3",["0","0","0",null],"60","S"],["2011","only","-","Jul","31",["0","0","0",null],"0","-"],["2012","2013","-","Apr","lastSun",["2","0","0",null],"60","S"],["2012","only","-","Jul","20",["3","0","0",null],"0","-"],["2012","only","-","Aug","20",["2","0","0",null],"60","S"],["2012","only","-","Sep","30",["3","0","0",null],"0","-"],["2013","only","-","Jul","7",["3","0","0",null],"0","-"],["2013","only","-","Aug","10",["2","0","0",null],"60","S"],["2013","max","-","Oct","lastSun",["3","0","0",null],"0","-"],["2014","2021","-","Mar","lastSun",["2","0","0",null],"60","S"],["2014","only","-","Jun","28",["3","0","0",null],"0","-"],["2014","only","-","Aug","2",["2","0","0",null],"60","S"],["2015","only","-","Jun","14",["3","0","0",null],"0","-"],["2015","only","-","Jul","19",["2","0","0",null],"60","S"],["2016","only","-","Jun","5",["3","0","0",null],"0","-"],["2016","only","-","Jul","10",["2","0","0",null],"60","S"],["2017","only","-","May","21",["3","0","0",null],"0","-"],["2017","only","-","Jul","2",["2","0","0",null],"60","S"],["2018","only","-","May","13",["3","0","0",null],"0","-"],["2018","only","-","Jun","17",["2","0","0",null],"60","S"],["2019","only","-","May","5",["3","0","0",null],"0","-"],["2019","only","-","Jun","9",["2","0","0",null],"60","S"],["2020","only","-","Apr","19",["3","0","0",null],"0","-"],["2020","only","-","May","24",["2","0","0",null],"60","S"],["2021","only","-","Apr","11",["3","0","0",null],"0","-"],["2021","only","-","May","16",["2","0","0",null],"60","S"],["2022","only","-","May","8",["2","0","0",null],"60","S"],["2023","only","-","Apr","23",["2","0","0",null],"60","S"],["2024","only","-","Apr","14",["2","0","0",null],"60","S"],["2025","only","-","Apr","6",["2","0","0",null],"60","S"],["2026","max","-","Mar","lastSun",["2","0","0",null],"60","S"],["2036","only","-","Oct","19",["3","0","0",null],"0","-"],["2037","only","-","Oct","4",["3","0","0",null],"0","-"]],"Namibia":[["1994","max","-","Sep","Sun>=1",["2","0","0",null],"60","S"],["1995","max","-","Apr","Sun>=1",["2","0","0",null],"0","-"]],"SA":[["1942","1943","-","Sep","Sun>=15",["2","0","0",null],"60","-"],["1943","1944","-","Mar","Sun>=15",["2","0","0",null],"0","-"]],"Sudan":[["1970","only","-","May","1",["0","0","0",null],"60","S"],["1970","1985","-","Oct","15",["0","0","0",null],"0","-"],["1971","only","-","Apr","30",["0","0","0",null],"60","S"],["1972","1985","-","Apr","lastSun",["0","0","0",null],"60","S"]],"Tunisia":[["1939","only","-","Apr","15",["23","0","0","s"],"60","S"],["1939","only","-","Nov","18",["23","0","0","s"],"0","-"],["1940","only","-","Feb","25",["23","0","0","s"],"60","S"],["1941","only","-","Oct","6",["0","0","0",null],"0","-"],["1942","only","-","Mar","9",["0","0","0",null],"60","S"],["1942","only","-","Nov","2",["3","0","0",null],"0","-"],["1943","only","-","Mar","29",["2","0","0",null],"60","S"],["1943","only","-","Apr","17",["2","0","0",null],"0","-"],["1943","only","-","Apr","25",["2","0","0",null],"60","S"],["1943","only","-","Oct","4",["2","0","0",null],"0","-"],["1944","1945","-","Apr","Mon>=1",["2","0","0",null],"60","S"],["1944","only","-","Oct","8",["0","0","0",null],"0","-"],["1945","only","-","Sep","16",["0","0","0",null],"0","-"],["1977","only","-","Apr","30",["0","0","0","s"],"60","S"],["1977","only","-","Sep","24",["0","0","0","s"],"0","-"],["1978","only","-","May","1",["0","0","0","s"],"60","S"],["1978","only","-","Oct","1",["0","0","0","s"],"0","-"],["1988","only","-","Jun","1",["0","0","0","s"],"60","S"],["1988","1990","-","Sep","lastSun",["0","0","0","s"],"0","-"],["1989","only","-","Mar","26",["0","0","0","s"],"60","S"],["1990","only","-","May","1",["0","0","0","s"],"60","S"],["2005","only","-","May","1",["0","0","0","s"],"60","S"],["2005","only","-","Sep","30",["1","0","0","s"],"0","-"],["2006","2008","-","Mar","lastSun",["2","0","0","s"],"60","S"],["2006","2008","-","Oct","lastSun",["2","0","0","s"],"0","-"]]},"version":"2016i"}
},{}]},{},[])("timezonecomplete")
});