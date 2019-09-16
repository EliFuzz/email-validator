const dns = require("dns");

const asyncDomainNameValidator = ({ domain }) =>
  new Promise((resolve, _) =>
    dns.resolveMx(domain, function(error, mx) {
      resolve(error || typeof mx === "undefined");
    })
  );

module.exports = asyncDomainNameValidator;
