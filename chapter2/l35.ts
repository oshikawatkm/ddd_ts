class ModelNumber {
  private readonly _production: string;
  private readonly _branch: string;
  private readonly _lot: string;

  constructor(production: string, branch: string, lot: string) {
    if () {

    }
    
    this._production = production;
    this._branch = branch;
    this._lot = lot;
  }

  public ToString(): string {
    return this._production + "-" + this._branch + "-" + this._lot;
  }

}