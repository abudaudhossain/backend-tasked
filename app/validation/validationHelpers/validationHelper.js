const NotAcceptableError = require("../../exceptions/NotAcceptableError");
const NotFoundError = require("../../exceptions/NotFountError");
const ValidationError = require("../../exceptions/ValidationError");

module.exports = {
    ObjExists: (keys, obj) => {
        // console.log(keys, obj)
        for (let i = 0; i < keys.length; i++) {
            if (!obj.hasOwnProperty(keys[i])) throw new NotFoundError(`${keys[i]} is keys required`);
        }
        true;
    },

    isEmpty: (data) => {
        for (let i = 0; i < data.length; i++) {
            if (!data[i]) throw new ValidationError("All properties are required, can not send empty properties");
            else if (data[i].length === 0) throw new ValidationError("All properties are required, can not send empty properties");
        }
    },
    updateInfoValidation: (keys) => {
        const query = [
            "password",
            "_id",
            "createdBy",
            "socialMediaAccounts"
        ];
        for (let i = 0; i < keys.length; i++) {
            if (!(query.indexOf(keys[i]) === -1))
                throw new NotAcceptableError(
                    `Can't Update ${keys[i]} properties`
                );
        }
    },
}