const USERNAME_REGEX =
  "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*";
const DOMAIN_REGEX =
  "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

const rfcEmailValidator = ({ email }) => {
  return email.match(`${USERNAME_REGEX}@${DOMAIN_REGEX}`) === null;
};

module.exports = rfcEmailValidator;
