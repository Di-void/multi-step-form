interface PInfoForm {
  id: "name" | "email" | "telephone";
  field: string;
  placeholder: string;
  type: "text" | "email" | "number";
}

export const PersonalInfoForm: PInfoForm[] = [
  {
    id: "name",
    field: "name",
    placeholder: "e.g. Stephen King",
    type: "text",
  },
  {
    id: "email",
    field: "email address",
    placeholder: "e.g. stephenking@lorem.com",
    type: "email",
  },
  {
    id: "telephone",
    field: "phone number",
    placeholder: "e.g. +1 234 567 890",
    type: "number",
  },
];
