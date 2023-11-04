import React from "react";
import clsx from "clsx";

interface InputProps {
  placeholder?: string;
  label?: string;
  type?: "text" | "number";
  onChange?: any;
  className?: string;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      placeholder = "",
      label,
      type = "text",
      onChange,
      className,
      ...rest
    } = props;

    return (
      <div className="form-floating mb-3">
        <input
          ref={ref}
          type={type}
          className={clsx("form-control", className)}
          id="floatingInput"
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        <label htmlFor="floatingInput">{label}</label>
      </div>
    );
  }
);

export default InputGroup;