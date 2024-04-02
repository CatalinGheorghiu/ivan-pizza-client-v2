export type FieldType = {
  type: "text" | "email";
  elementType: "input" | "textarea";
  name: string;
  placeholder: string;
};

export type StepType = {
  question: string;
  fields: FieldType[];
};

export const steps: StepType[] = [
  {
    question: "What is you first name?",
    fields: [
      {
        type: "text",
        elementType: "input",
        name: "firstName",
        placeholder: "First Name"
      }
    ]
  },
  {
    question: "What is your last name?",
    fields: [
      {
        type: "text",
        elementType: "input",
        name: "lastName",
        placeholder: "Last Name"
      }
    ]
  },
  {
    question: "What is your email?",
    fields: [
      {
        type: "email",
        elementType: "input",
        name: "email",
        placeholder: "Email"
      }
    ]
  },
  {
    question: "Leave us your message",
    fields: [
      {
        type: "text",
        elementType: "textarea",
        name: "message",
        placeholder: "Message"
      }
    ]
  }
];
