var Money = /** @class */ (function () {
    function Money(amount, currency) {
        if (currency == null)
            throw new Error("currency cannot be null.");
        this._amount = amount;
        this._currency = currency;
    }
    Money.prototype.add = function (arg) {
        if (arg == null)
            throw new Error("Money cannot be null.");
        if (this._currency != arg._currency)
            throw new Error("\u901A\u8CA8\u5358\u4F4D\u304C\u7570\u306A\u308A\u307E\u3059(this:" + this._currency + ", arg:" + arg._currency + ")");
        return new Money(this._amount + arg._amount, this._currency);
    };
    return Money;
}());
var myMoney = new Money(1000, "JPY");
var allowance = new Money(3000, "USD");
var result = myMoney.add(allowance);
console.log(result);
