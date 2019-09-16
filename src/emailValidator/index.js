const emptyInput = require("./emptyInput");
const rfcEmailValidator = require("./rfcEmailValidator");
const asyncDomainNameValidator = require("./asyncDomainNameValidator");
const responseEmail = require("./responseEmail");

const validate = async ({ email }) => {
  if (emptyInput({ data: email }) || rfcEmailValidator({ email })) {
    return responseEmail({ validInput: false, validDomain: false });
  }

  if (await asyncDomainNameValidator({ domain: email.split("@")[1] })) {
    return responseEmail({ validInput: true, validDomain: false });
  }

  return responseEmail({ validInput: true, validDomain: true });
};

module.exports = validate;
