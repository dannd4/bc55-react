import { useState } from "react";

export default function Form() {
  const [values, setValues] = useState({ username: "", email: "" });
  const [errors, setErrors] = useState({ username: "", email: "" });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // Mặc định form đang hợp lệ
    let isValid = true;
    for (let key in values) {
      // Chứng minh form không hợp lệ
      const bool = validateField(key, values[key]);
      isValid = isValid && bool;
    }

    // Nếu form không hợp lệ return để kết thúc hàm
    if (!isValid) return;

    console.log(values);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleBlur = (evt) => {
    const { name, value } = evt.target;
    validateField(name, value);
  };

  const validateField = (fieldName, fieldValue) => {
    const formErrors = {};
    let isValid = true;

    switch (fieldName) {
      case "username": {
        if (fieldValue.trim() === "") {
          formErrors.username = "Username is required";
          isValid = false;
        } else {
          formErrors.username = "";
        }
        break;
      }
      case "email": {
        if (fieldValue.trim() === "") {
          formErrors.email = "Email is required";
          isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValue)) {
          formErrors.email = "Email is invalid";
          isValid = false;
        } else {
          formErrors.email = "";
        }
        break;
      }
      default:
        break;
    }

    setErrors((currentValues) => {
      return { ...currentValues, ...formErrors };
    });

    return isValid;
  };

  return (
    <div>
      <h1>Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            className="form-control"
            id="username"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.username && (
            <span className="text-danger">{errors.username}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
