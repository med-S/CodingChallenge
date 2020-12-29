export default class PageHelper {

    static DateDifferenceInDays = (endDate, startDate) => {
        var date1 = new Date(startDate);
        var date2 = new Date(endDate); 
        var Difference_In_Time = date2.getTime() - date1.getTime(); 
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Math.round(Difference_In_Days);
    }

    static NumberInKs = (number) => {
        return Math.abs(number) > 999 ? Math.sign(number) * ((Math.abs(number) / 1000).toFixed(1)) + 'k' : Math.sign(number) * Math.abs(number);
    }
}