function main(request, response) {

    const dynamicDate = new Date();

    response.json({
        Date: dynamicDate.getDate(),
        Day: dynamicDate.getDay(),
        FullYear: dynamicDate.getFullYear(),
        Hours: dynamicDate.getHours(),
        Milliseconds: dynamicDate.getMilliseconds(),
        Minutes: dynamicDate.getMinutes(),
        Month: dynamicDate.getMonth(),
        Secounds: dynamicDate.getSeconds(),
        Time: dynamicDate.getTime(),
        TimezoneOffset: dynamicDate.getTimezoneOffset(),
        UTCDate: dynamicDate.getUTCDate(),
        UTCDay: dynamicDate.getUTCDay(),
        UTCFullYear: dynamicDate.getUTCFullYear(),
        UTCHours: dynamicDate.getUTCHours(),
        UTCMilliseconds: dynamicDate.getUTCMilliseconds(),
        UTCMinutes: dynamicDate.getUTCMinutes(),
        UTCMonth: dynamicDate.getUTCMonth(),
        UTCSeconds: dynamicDate.getUTCSeconds()
    })    

}

export default main;
