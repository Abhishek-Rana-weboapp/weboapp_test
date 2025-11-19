let validPhoneNumber = false;
let errorMessage = "";


const validatePhoneNumber = ({
    inputNumber,
    country,
    isDirty,
    phoneLength,
    state,
  }) => {
    if (isDirty) {
      if (
        inputNumber &&
        inputNumber?.replace(country.dialCode, "")?.trim() === ""
      ) {
        validPhoneNumber = false;
        errorMessage = "Enter a valid phone Number";
        return false;
      } else if (inputNumber.length < phoneLength) {
        validPhoneNumber = false;
        errorMessage = "Enter a valid phone Number";
        return false;
      }
      validPhoneNumber = true;
      errorMessage = "";
      return true;
    }
    validPhoneNumber = false;
    errorMessage = "This field is required";
    return false;
  };