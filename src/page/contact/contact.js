const firstNameField = document.getElementById("firstNameField");
const firstNameError = document.getElementById("firstNameError");

const lastNameField = document.getElementById("lastNameField");
const lastNameError = document.getElementById("lastNameError");

const emailAddressField = document.getElementById("emailAddressField");
const emailAddressError = document.getElementById("emailAddressError");

const phoneNumberField = document.getElementById("phoneNumberField");
const phoneNumberError = document.getElementById("phoneNumberError");

const yourMessageField = document.getElementById("yourMessageField");
const yourMessageError = document.getElementById("yourMessageError");
const submitButton = document.getElementById("submitButton");

function setMessage(field, error, isError, message) {
  if (isError) {
    error.textContent = message;
    error.style.color = "red";
    field.style.borderColor = "red";
    return;
  }
  error.textContent = message;
  error.style.color = "green";
  field.style.borderColor = "green";
}

class ValidationController {
  static fieldMustNotEmpty(field) {
    return field.value.trim().length !== 0;
  }

  static minimumNCharLength(length, field) {
    return this.fieldMustNotEmpty(field) && field.value.trim().length >= length;
  }

  static emailFormat(field) {
    const email = field.value.trim();
    const atSymbolIndex = email.indexOf("@");
    if (atSymbolIndex < 1) return false;

    const domainPart = email.slice(atSymbolIndex + 1);
    const dotIndex = domainPart.indexOf(".");
    if (dotIndex < 1 || dotIndex === domainPart.length - 1) return false;
    return true;
  }

  static minimumNWords(length, field) {
    const value = field.value.trim();
    if (value.length === 0) return false;

    let wordCount = 0;
    let inWord = false;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== " ") {
        if (!inWord) {
          wordCount++;
          inWord = true;
        }
      } else {
        inWord = false;
      }
    }
    return wordCount >= length;
  }

  static numberOnly(field) {
    const value = field.value.trim();
    for (let i = 0; i < value.length; i++) {
      if (value[i] < "0" || value[i] > "9") return false;
    }
    return true;
  }
}

class FieldController {
  static FirstNameLogic() {
    if (ValidationController.minimumNCharLength(3, firstNameField)) {
      setMessage(firstNameField, firstNameError, false, "");
    } else {
      setMessage(
        firstNameField,
        firstNameError,
        true,
        "Input must be more than 3 characters!"
      );
    }
  }
  static LastNameLogic() {
    if (ValidationController.minimumNCharLength(3, lastNameField)) {
      setMessage(lastNameField, lastNameError, false, "");
    } else {
      setMessage(
        lastNameField,
        lastNameError,
        true,
        "Input must be more than 3 characters!"
      );
    }
  }
  static EmailFormatLogic() {
    if (ValidationController.emailFormat(emailAddressField)) {
      setMessage(emailAddressField, emailAddressError, false, "");
    } else {
      setMessage(
        emailAddressField,
        emailAddressError,
        true,
        "Not in email format! (ex: testing@gmail.com)"
      );
    }
  }
  static PhoneNumberLogic() {
    if (ValidationController.fieldMustNotEmpty(phoneNumberField)) {
      setMessage(phoneNumberField, phoneNumberError, false, "");
    } else {
      setMessage(
        phoneNumberField,
        phoneNumberError,
        true,
        "phone must not empty!"
      );
    }
  }
  static DescLogic() {
    if (ValidationController.minimumNWords(2, yourMessageField)) {
      setMessage(yourMessageField, yourMessageError, false, "");
    } else {
      setMessage(
        yourMessageField,
        yourMessageError,
        true,
        "two words minimum!"
      );
    }
  }
}

firstNameField.addEventListener("input", () =>
  FieldController.FirstNameLogic()
);

lastNameField.addEventListener("input", () => FieldController.LastNameLogic());
emailAddressField.addEventListener("input", () =>
  FieldController.EmailFormatLogic()
);
phoneNumberField.addEventListener("input", () =>
  FieldController.PhoneNumberLogic()
);

yourMessageField.addEventListener("input", () => FieldController.DescLogic());

submitButton.addEventListener("click", () => {
  FieldController.FirstNameLogic();
  FieldController.LastNameLogic();
  FieldController.EmailFormatLogic();
  FieldController.PhoneNumberLogic();
  FieldController.DescLogic();

  const condition =
    ValidationController.minimumNCharLength(3, firstNameField) &&
    ValidationController.minimumNCharLength(3, lastNameField) &&
    ValidationController.emailFormat(emailAddressField) &&
    ValidationController.fieldMustNotEmpty(phoneNumberField) &&
    ValidationController.minimumNWords(2, yourMessageField);

  if (condition) {
    alert("thank you for the message!");
    location.reload(true);
  }
});
