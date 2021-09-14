!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(self,(function(){return t={148:(t,e,r)=>{const{AdDateSanitizer:n}=r(962),o=r(672);t.exports=function(t){t=n(t);const e=new Date("1921-04-13"),r=new Date(t),a=Math.floor((r.getTime()-e.getTime())/864e5);if(a<0)throw new Error("AD Date out of range");return o(a)}},807:(t,e,r)=>{const{bs:n,BsDateSanitizer:o}=r(962),a=r(324);t.exports=function(t){const e=(t=o(t)).split("-"),r=parseInt(e[0]),i=parseInt(e[1]),s=parseInt(e[2]);let c=0;for(let t=1978;t<=r;t++)if(t===r){for(let e=1;e<i;e++)c+=n[t][e];c+=s-1}else for(let e=1;e<=12;e++)c+=n[t][e];return a("1921-04-13",c)}},929:(t,e,r)=>{const{bs:n,BsDateSanitizer:o}=r(962),a=r(944);t.exports=function(t){selectedDate=o(t);const e=selectedDate.split("-"),r=parseInt(e[0]),i=parseInt(e[1]),s=parseInt(e[2]),{currentYear:c,currentMonth:f,currentDay:l}=a();let u={year:0,month:0,day:n[r][i]-s};for(let t=r;t<=c;t++)t===r?l>=s?(u.day=l-s,f>=i?u.month=f-i:(u.month=12-i+f,u.year--)):(u.day+=l,f>i?u.month=f-i-1:(u.month=12-i+f-1,u.year--)):u.year++;return u}},962:t=>{const e=[];function r(t){const e=t.split("-");if(3!==e.length)throw new Error("Date format is invalid");const r=parseInt(e[0]),n=parseInt(e[1]),o=parseInt(e[2]);if(o>32||o<1||!o)throw new Error("Day is invalid.");if(n>12||n<1||!n)throw new Error("Month is invalid.");if(!r||r.toString().length<4)throw new Error("Year is invalid.");return{year:r,month:n,day:o}}e[1978]=[1978,31,31,32,31,31,31,30,29,30,29,30,30],e[1979]=[1979,31,31,32,32,31,30,30,29,30,29,30,30],e[1980]=[1980,31,32,31,32,31,30,30,30,29,29,30,31],e[1981]=[1981,31,31,31,32,31,31,29,30,30,29,30,30],e[1982]=[1982,31,31,32,31,31,31,30,29,30,29,30,30],e[1983]=[1983,31,31,32,32,31,30,30,29,30,29,30,30],e[1984]=[1984,31,32,31,32,31,30,30,30,29,29,30,31],e[1985]=[1985,31,31,31,32,31,31,29,30,30,29,30,30],e[1986]=[1986,31,31,32,31,31,31,30,29,30,29,30,30],e[1987]=[1987,31,32,31,32,31,30,30,29,30,29,30,30],e[1988]=[1988,31,32,31,32,31,30,30,30,29,29,30,31],e[1989]=[1989,31,31,31,32,31,31,30,29,30,29,30,30],e[1990]=[1990,31,31,32,31,31,31,30,29,30,29,30,30],e[1991]=[1991,31,32,31,32,31,30,30,29,30,29,30,30],e[1992]=[1992,31,32,31,32,31,30,30,30,29,30,29,31],e[1993]=[1993,31,31,31,32,31,31,30,29,30,29,30,30],e[1994]=[1994,31,31,32,31,31,31,30,29,30,29,30,30],e[1995]=[1995,31,32,31,32,31,30,30,30,29,29,30,30],e[1996]=[1996,31,32,31,32,31,30,30,30,29,30,29,31],e[1997]=[1997,31,31,32,31,31,31,30,29,30,29,30,30],e[1998]=[1998,31,31,32,31,31,31,30,29,30,29,30,30],e[1999]=[1999,31,32,31,32,31,30,30,30,29,29,30,31],e[2e3]=[2e3,30,32,31,32,31,30,30,30,29,30,29,31],e[2001]=[2001,31,31,32,31,31,31,30,29,30,29,30,30],e[2002]=[2002,31,31,32,32,31,30,30,29,30,29,30,30],e[2003]=[2003,31,32,31,32,31,30,30,30,29,29,30,31],e[2004]=[2004,30,32,31,32,31,30,30,30,29,30,29,31],e[2005]=[2005,31,31,32,31,31,31,30,29,30,29,30,30],e[2006]=[2006,31,31,32,32,31,30,30,29,30,29,30,30],e[2007]=[2007,31,32,31,32,31,30,30,30,29,29,30,31],e[2008]=[2008,31,31,31,32,31,31,29,30,30,29,29,31],e[2009]=[2009,31,31,32,31,31,31,30,29,30,29,30,30],e[2010]=[2010,31,31,32,32,31,30,30,29,30,29,30,30],e[2011]=[2011,31,32,31,32,31,30,30,30,29,29,30,31],e[2012]=[2012,31,31,31,32,31,31,29,30,30,29,30,30],e[2013]=[2013,31,31,32,31,31,31,30,29,30,29,30,30],e[2014]=[2014,31,31,32,32,31,30,30,29,30,29,30,30],e[2015]=[2015,31,32,31,32,31,30,30,30,29,29,30,31],e[2016]=[2016,31,31,31,32,31,31,29,30,30,29,30,30],e[2017]=[2017,31,31,32,31,31,31,30,29,30,29,30,30],e[2018]=[2018,31,32,31,32,31,30,30,29,30,29,30,30],e[2019]=[2019,31,32,31,32,31,30,30,30,29,30,29,31],e[2020]=[2020,31,31,31,32,31,31,30,29,30,29,30,30],e[2021]=[2021,31,31,32,31,31,31,30,29,30,29,30,30],e[2022]=[2022,31,32,31,32,31,30,30,30,29,29,30,30],e[2023]=[2023,31,32,31,32,31,30,30,30,29,30,29,31],e[2024]=[2024,31,31,31,32,31,31,30,29,30,29,30,30],e[2025]=[2025,31,31,32,31,31,31,30,29,30,29,30,30],e[2026]=[2026,31,32,31,32,31,30,30,30,29,29,30,31],e[2027]=[2027,30,32,31,32,31,30,30,30,29,30,29,31],e[2028]=[2028,31,31,32,31,31,31,30,29,30,29,30,30],e[2029]=[2029,31,31,32,31,32,30,30,29,30,29,30,30],e[2030]=[2030,31,32,31,32,31,30,30,30,29,29,30,31],e[2031]=[2031,30,32,31,32,31,30,30,30,29,30,29,31],e[2032]=[2032,31,31,32,31,31,31,30,29,30,29,30,30],e[2033]=[2033,31,31,32,32,31,30,30,29,30,29,30,30],e[2034]=[2034,31,32,31,32,31,30,30,30,29,29,30,31],e[2035]=[2035,30,32,31,32,31,31,29,30,30,29,29,31],e[2036]=[2036,31,31,32,31,31,31,30,29,30,29,30,30],e[2037]=[2037,31,31,32,32,31,30,30,29,30,29,30,30],e[2038]=[2038,31,32,31,32,31,30,30,30,29,29,30,31],e[2039]=[2039,31,31,31,32,31,31,29,30,30,29,30,30],e[2040]=[2040,31,31,32,31,31,31,30,29,30,29,30,30],e[2041]=[2041,31,31,32,32,31,30,30,29,30,29,30,30],e[2042]=[2042,31,32,31,32,31,30,30,30,29,29,30,31],e[2043]=[2043,31,31,31,32,31,31,29,30,30,29,30,30],e[2044]=[2044,31,31,32,31,31,31,30,29,30,29,30,30],e[2045]=[2045,31,32,31,32,31,30,30,29,30,29,30,30],e[2046]=[2046,31,32,31,32,31,30,30,30,29,29,30,31],e[2047]=[2047,31,31,31,32,31,31,30,29,30,29,30,30],e[2048]=[2048,31,31,32,31,31,31,30,29,30,29,30,30],e[2049]=[2049,31,32,31,32,31,30,30,30,29,29,30,30],e[2050]=[2050,31,32,31,32,31,30,30,30,29,30,29,31],e[2051]=[2051,31,31,31,32,31,31,30,29,30,29,30,30],e[2052]=[2052,31,31,32,31,31,31,30,29,30,29,30,30],e[2053]=[2053,31,32,31,32,31,30,30,30,29,29,30,30],e[2054]=[2054,31,32,31,32,31,30,30,30,29,30,29,31],e[2055]=[2055,31,31,32,31,31,31,30,29,30,29,30,30],e[2056]=[2056,31,31,32,31,32,30,30,29,30,29,30,30],e[2057]=[2057,31,32,31,32,31,30,30,30,29,29,30,31],e[2058]=[2058,30,32,31,32,31,30,30,30,29,30,29,31],e[2059]=[2059,31,31,32,31,31,31,30,29,30,29,30,30],e[2060]=[2060,31,31,32,32,31,30,30,29,30,29,30,30],e[2061]=[2061,31,32,31,32,31,30,30,30,29,29,30,31],e[2062]=[2062,31,31,31,32,31,31,29,30,29,30,29,31],e[2063]=[2063,31,31,32,31,31,31,30,29,30,29,30,30],e[2064]=[2064,31,31,32,32,31,30,30,29,30,29,30,30],e[2065]=[2065,31,32,31,32,31,30,30,30,29,29,30,31],e[2066]=[2066,31,31,31,32,31,31,29,30,30,29,29,31],e[2067]=[2067,31,31,32,31,31,31,30,29,30,29,30,30],e[2068]=[2068,31,31,32,32,31,30,30,29,30,29,30,30],e[2069]=[2069,31,32,31,32,31,30,30,30,29,29,30,31],e[2070]=[2070,31,31,31,32,31,31,29,30,30,29,30,30],e[2071]=[2071,31,31,32,31,31,31,30,29,30,29,30,30],e[2072]=[2072,31,32,31,32,31,30,30,29,30,29,30,30],e[2073]=[2073,31,32,31,32,31,30,30,30,29,29,30,31],e[2074]=[2074,31,31,31,32,31,31,30,29,30,29,30,30],e[2075]=[2075,31,31,32,31,31,31,30,29,30,29,30,30],e[2076]=[2076,31,32,31,32,31,30,30,30,29,29,30,30],e[2077]=[2077,31,32,31,32,31,30,30,30,29,30,29,31],e[2078]=[2078,31,31,31,32,31,31,30,29,30,29,30,30],e[2079]=[2079,31,31,32,31,31,31,30,29,30,29,30,30],e[2080]=[2080,31,32,31,32,31,30,30,30,29,29,30,30],e[2081]=[2081,31,31,32,32,31,30,30,30,29,30,30,30],e[2082]=[2082,30,32,31,32,31,30,30,30,29,30,30,30],e[2083]=[2083,31,31,32,31,31,30,30,30,29,30,30,30],e[2084]=[2084,31,31,32,31,31,30,30,30,29,30,30,30],e[2085]=[2085,31,32,31,32,30,31,30,30,29,30,30,30],e[2086]=[2086,30,32,31,32,31,30,30,30,29,30,30,30],e[2087]=[2087,31,31,32,31,31,31,30,30,29,30,30,30],e[2088]=[2088,30,31,32,32,30,31,30,30,29,30,30,30],e[2089]=[2089,30,32,31,32,31,30,30,30,29,30,30,30],e[2090]=[2090,30,32,31,32,31,30,30,30,29,30,30,30],e[2091]=[2091,31,31,32,31,31,31,30,30,29,30,30,30],e[2092]=[2092,30,31,32,32,31,30,30,30,29,30,30,30],e[2093]=[2093,30,32,31,32,31,30,30,30,29,30,30,30],e[2094]=[2094,31,31,32,31,31,30,30,30,29,30,30,30],e[2095]=[2095,31,31,32,31,31,31,30,29,30,30,30,30],e[2096]=[2096,30,31,32,32,31,30,30,29,30,29,30,30],e[2097]=[2097,31,32,31,32,31,30,30,30,29,30,30,30],e[2098]=[2098,31,31,32,31,31,31,29,30,29,30,29,31],e[2099]=[2099,31,32,31,32,31,30,30,30,29,29,30,31],t.exports={bs:e,AdDateSanitizer:function(t){const{year:e,month:n,day:o}=r(t);if(e>2040)throw new Error("AD Date out of range");if(n>31)throw new Error("Month is invalid.");return`${e}-${("0"+n).slice(-2)}-${("0"+o).slice(-2)}`},BsDateSanitizer:function(t){const{year:n,month:o,day:a}=r(t);if(n<1978||n>2099)throw new Error("BS Date out of range");if(a>e[n][o])throw new Error(`No ${a} day exits in this month.`);return`${n}-${("0"+o).slice(-2)}-${("0"+a).slice(-2)}`}}},579:(t,e,r)=>{const n=r(148),o=r(807),a=r(929);t.exports={adToBs:n,bsToAd:o,calculateAge:a}},944:(t,e,r)=>{const n=r(672);t.exports=function(){const t=new Date("1921-04-13"),e=new Date,r=Math.floor((e.getTime()-t.getTime())/864e5);return n(r,!1)}},324:t=>{t.exports=function(t,e){var r=new Date(t);r.setDate(r.getDate()+e);const n=r.getFullYear(),o=r.getMonth()+1,a=r.getDate();return`${n}-${o>9?o:"0"+o}-${a>9?a:"0"+a}`}},672:(t,e,r)=>{const{bs:n}=r(962);t.exports=function(t,e=!0){let r=0,o=0,a=0,i=0,s=!1;for(let e=1978;e<2100&&!s;e++)for(let c=1;c<=12;c++)if(i+=n[e][c],t-i<0){a=t-i+n[e][c]+1,s=!0,r=e,o=c;break}return e?`${r}-${("0"+o).slice(-2)}-${("0"+a).slice(-2)}`:{currentYear:r,currentMonth:o,currentDay:a}}}},e={},function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}(579);var t,e}));