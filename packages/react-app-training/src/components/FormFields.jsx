const loginFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
  },
];

const signupFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    isRequired: true,
    placeholder: "Email address",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    id: "confirm-password",
    name: "passwordConfirm",
    type: "password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

const createMessageFields = [
  {
    id: "title",
    name: "title",
    type: "text",
    isRequired: true,
    placeholder: "Title",
  },
  {
    id: "message",
    name: "message",
    type: "text",
    isRequired: true,
    placeholder: "Message",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
  },
];

const viewMessage = [
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
  },
];

export { loginFields, signupFields, createMessageFields, viewMessage };
