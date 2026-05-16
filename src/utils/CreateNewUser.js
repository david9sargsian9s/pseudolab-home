export const CreateNewUser = (form) => {
  const {
    firstName: { value: firstName },
    lastName: { value: lastName },
    mail: { value: mail },
    password: { value: password },
    gender,
    PrivacyPolicy: { checked: PrivacyPolicy },
  } = form;

  return {
    auth: crypto.randomUUID(),
    id: crypto.randomUUID(),
    firstName,
    lastName,
    mail,
    password,
    gender: gender?.value ?? null,
    PrivacyPolicy, 
  };
};
