export const signInFileds = [
  {
    name: "email",
    placeholder: "enter your email",
    options: {
      required: "This is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
      }
    }
  },
  {
    name: "password",
    placeholder: "enter your password",
    type: "password",
    options: {
      required: "This is required"
    }
  }
]

export const signUpFileds = [
  {
    name: "displayName",
    placeholder: "enter your display name",
    options: {
      required: "This is required",
      minLength: {
        value: 2,
        message: "Min length is 2"
      }
    }
  },
  {
    name: "email",
    placeholder: "enter your email",
    options: {
      required: "This is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Entered value does not match email format"
      }
    }
  },
  {
    name: "password",
    placeholder: "enter your password",
    type: "password",
    options: {
      required: "This is required",
      minLength: {
        value: 6,
        message: "Min length is 6"
      }
    }
  }
]
