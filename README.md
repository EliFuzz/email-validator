# Email Validator
___

Available validations:
1. [checks for `NULL`](https://github.com/EliFuzz/email-validator/blob/master/src/emailValidator/emptyInput.js)
2. [RFC Validation](https://github.com/EliFuzz/email-validator/blob/master/src/emailValidator/rfcEmailValidator.js)
3. [DNS check](https://github.com/EliFuzz/email-validator/blob/master/src/emailValidator/domainNameValidator.js)

### Init
```console
make init
```

### Start
```console
make up
```

### Stop
```console
make down
```

### Clean
```console
make clean
```

## Usage
1. `make init`
2. `make up`
3. Go to [http://localhost:3000/validate/test@mail.com](http://localhost:3000/validate/test@mail.com)

---
#### TODO:
- Make safe host validation