import { useState } from "react";

import { Input } from "./Input";
import {
  emailValidationMessage,
  validatePasswordMessage,
  passwordConfirmationMessage,
  validateUsernameMessage,
  validateUsername,
  validateConfirPassword,
  validateEmail,
  validatePassword,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfir: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfir":
        isValid = validateConfirPassword(formState.password.value, value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    register(formState.email.value, formState.username.value, formState.password.value, );
  };

  const isSubmitButtonDisabled = isLoading || 
                                !formState.password.isValid || 
                                !formState.email.isValid ||
                                !formState.passwordConfir.isValid ||
                                !formState.username.isValid;
  return  (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="auth-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <Input
                field="email"
                value={formState.email.value}
                onChangeHandler={handleInputValueChange}
                type="email"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.email.showError}
                validationMessage={emailValidationMessage}
                className="form-control"
              />
              {formState.email.showError && <div className="text-danger">{emailValidationMessage}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <Input
                field="username"
                value={formState.username.value}
                onChangeHandler={handleInputValueChange}
                type="text"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.username.showError}
                validationMessage={validateUsernameMessage}
                className="form-control"
              />
              {formState.username.showError && <div className="text-danger">{validateUsernameMessage}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <Input
                field="password"
                value={formState.password.value}
                onChangeHandler={handleInputValueChange}
                type="password"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.password.showError}
                validationMessage={validatePasswordMessage}
                className="form-control"
              />
              {formState.password.showError && <div className="text-danger">{validatePasswordMessage}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfir" className="form-label">Password Confirmation</label>
              <Input
                field="passwordConfir"
                value={formState.passwordConfir.value}
                onChangeHandler={handleInputValueChange}
                type="password"
                onBlurHandler={handleInputValidationOnBlur}
                showErrorMessage={formState.passwordConfir.showError}
                validationMessage={passwordConfirmationMessage}
                className="form-control"
              />
              {formState.passwordConfir.showError && <div className="text-danger">{passwordConfirmationMessage}</div>}
            </div>
            <button onClick={handleRegister} disabled={isSubmitButtonDisabled} className="btn btn-primary">
              Register
            </button>
          </form>
          <div className="mt-3">
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
              ¿Ya tienes cuenta? <a href="#">¡Inicia sesión acá!</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
