var UserId = /** @class */ (function () {
    function UserId(value) {
        if (value == null)
            throw new Error("value cannot be null.");
        this._value = value;
    }
    return UserId;
}());
var User = /** @class */ (function () {
    function User(id, name) {
        if (id == null)
            throw new Error("id cannot be null.");
        if (name == null)
            throw new Error("name cannot be null.");
        this._id = id;
        this.changeName(name);
    }
    User.prototype.changeName = function (name) {
        if (name === null)
            throw new Error("name cannot be null.");
        if (name.length < 3)
            throw new Error("ユーザー名は３文字以上です。");
        this._name = name;
    };
    User.prototype.equals = function (other) {
        if (null === other)
            return false;
        if (this === other)
            return true;
        this._id === other._id ? true : false;
    };
    return User;
}());
var rightUserId = new UserId("1");
var rightUser = new User(rightUserId, "taro");
var leftUserId = new UserId("2");
var leftUser = new User(leftUserId, "jiro");
if (rightUser.equals(leftUser)) {
    console.log("同一ユーザーです。");
}
else {
    console.log("同一ユーザーではありません");
}
