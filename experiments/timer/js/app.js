/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * Website:  http://ershov.pw/ (RU/ENG)
 * Date: 15.03.2016
 * Time: 10:19
 */

var target = new Date('2016-04-30 20:00');

setInterval(tick, 1000);


function tick(){
    var today = new Date();

    updateTimer('.timer-global .timer', today, '2016-04-30 20:00');
    updateTimer('.timer-chapter-1 .timer', today, '2016-03-22 23:59');
    updateTimer('.timer-chapter-2 .timer', today, '2016-03-29 23:59');
    updateTimer('.timer-chapter-3 .timer', today, '2016-04-05 23:59');
    updateTimer('.timer-chapter-4 .timer', today, '2016-04-12 23:59');
    updateTimer('.timer-chapter-5 .timer', today, '2016-04-19 23:59');
    updateTimer('.timer-chapter-6 .timer', today, '2016-04-26 23:59');
}

function updateTimer(selector, today, target){
    var arr = dateDiff( today, target);
    var timer=d3.selectAll(selector).data(arr);
    timer.text(function(d) { return d; });
    timer.exit();
}

function dateDiff( date1, date2 ) {
    date1 = new Date( date1 );
    date2 = new Date( date2 );

    var milliseconds = date2.getMilliseconds() - date1.getMilliseconds();

    if ( milliseconds < 0 ) {
        milliseconds += 1000;
        date2.setSeconds( date2.getSeconds() - 1 );
    }

    var seconds = date2.getSeconds() - date1.getSeconds();

    if ( seconds < 0 ) {
        seconds += 60;
        date2.setMinutes( date2.getMinutes() - 1 );
    }

    var minutes = date2.getMinutes() - date1.getMinutes();

    if ( minutes < 0 ) {
        minutes += 60;
        date2.setHours( date2.getHours() - 1 );
    }

    var hours = date2.getHours() - date1.getHours();

    if ( hours < 0 ) {
        hours += 24;
        date2.setDate( date2.getDate() - 1 );
    }

    var days = date2.getDate() - date1.getDate();

    if ( days < 0 ) {
        days += new Date( date2.getFullYear(), date2.getMonth() - 1, 0 ).getDate() + 1;
        date2.setMonth( date2.getMonth() - 1 );
    }

    var months = date2.getMonth() - date1.getMonth();

    if ( months < 0 ) {
        months += 12;
        date2.setFullYear( date2.getFullYear() - 1 );
    }

    var years = date2.getFullYear() - date1.getFullYear();

    return [ years, months, days, hours, minutes, seconds, milliseconds ];
}
