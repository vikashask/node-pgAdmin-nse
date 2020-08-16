const { check, validationResult } = require("express-validator/check");

module.exports.validateError = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      errors: errors.array(),
    });
  }
};

module.exports.emailValidation = [
  check("emailId")
    .isLength({
      min: 5,
    })
    .isEmail(),
];

module.exports.registerValidation = [
  check("password").isLength({
    min: 3,
  }),
  check("emailId")
    .isLength({
      min: 5,
    })
    .isEmail(),
];

module.exports.slugValidation = [
  check("name").isLength({
    min: 3,
  }),
  check("slug").isLength({
    min: 3,
  }),
  // check('description')
  // .isLength({
  //   min: 5
  // })
];

module.exports.metaTagValidation = [
  check("name").isLength({
    min: 3,
  }),
];

module.exports.slugUpdateValidation = [
  check("name").isLength({
    min: 3,
  }),
  check("slug").isLength({
    min: 3,
  }),
  check("description").isLength({
    min: 5,
  }),
  check("isActive").isLength({
    min: 5,
  }),
];

module.exports.menuValidation = [
  check("name").isLength({
    min: 3,
  }),
  check("type").isLength({
    min: 3,
  }),
  check("isVisibility").isLength({
    min: 1,
  }),
];

module.exports.menuUpdateValidation = [
  check("name").isLength({
    min: 3,
  }),
  check("type").isLength({
    min: 3,
  }),
  check("isVisibility").isLength({
    min: 1,
  }),
  check("id").isLength({
    min: 1,
  }),
];
module.exports.loginValidation = [
  check("password").isLength({
    min: 3,
  }),
  check("emailId")
    .isLength({
      min: 5,
    })
    .isEmail(),
];
