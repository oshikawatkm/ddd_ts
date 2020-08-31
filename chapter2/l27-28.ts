class Money {
  private readonly _amount: number;
  private readonly _currency: string;

  constructor(amount: number, currency: string) {
    if (currency == null) throw new Error("currency cannot be null.");
    
    this._amount = amount;
    this._currency = currency;
  }

  public add (arg: Money): Money {
    if (arg == null) throw new Error("Money cannot be null.");
    if (this._currency != arg._currency) throw new Error(`通貨単位が異なります(this:${this._currency}, arg:${arg._currency})`);

    return new Money(this._amount + arg._amount, this._currency)
  }

}

let myMoney = new Money(1000, "JPY");
let allowance = new Money(3000, "USD")
let result = myMoney.add(allowance);

console.log(result);