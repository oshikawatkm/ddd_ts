var FullNmae = /** @class */ (function () {
    function FullNmae(firstName, lastName) {
        if (firstName == null)
            throw new Error("firstName cannot be null");
        if (lastName == null)
            throw new Error("lastName cannot be null");
        if (!this.ValidationName(firstName))
            throw new Error("firstName must be alpabet");
        if (!this.ValidationName(lastName))
            throw new Error("lastName must be alpabet");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    FullNmae.prototype.ValidationName = function (value) {
        var rgexp = new RegExp(/^[0-9a-zA-Z]*$/);
        return rgexp.test(value);
    };
    return FullNmae;
}());
console.log(new FullNmae("hoge", "hoge"));
