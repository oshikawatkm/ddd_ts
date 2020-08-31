var User = /** @class */ (function () {
    function User(name) {
        this.changeName(name);
    }
    User.prototype.changeName = function (name) {
        if (name == null)
            throw new Error("name cannot be null.");
        if (name.length < 3)
            throw new Error("ユーザー名は３文字以上です。");
        this._name = name;
    };
    return User;
}());
var user = new User("takashi");
console.log(user);
user.changeName("yamanaka");
console.log(user);
