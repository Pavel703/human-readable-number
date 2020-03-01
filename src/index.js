const str_number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
    str_number10_20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    str_number10 = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
module.exports = function toReadable(number) {
    let res = [];
    if (!number) res.push(str_number[number]);
    else if (number <= 9) res.push(str_number [number]);
    else if (number <= 19) res.push(str_number10_20[number - 10]);
    else if (number <= 99) {
        res.push(str_number10[Math.floor(number / 10)]);
        if (number % 10)
            res.push(toReadable(number % 10))
    }
    else {
        res.push(toReadable(Math.floor(number / 100)));
        res.push('hundred');
        if (number % 100)
            res.push(toReadable(number % 100))
    }
    return res.join(' ')
}
