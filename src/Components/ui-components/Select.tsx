import clsx from "clsx";
import React from "react";
import { Map } from "../utils/types.ts";

export interface SelectProps {
  options?: Map<string | number>;
  defaultValue?: string;
  defaultToFirst?: boolean;
  label?: string;
  onChange?: any;
  className?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
    const {
      options,
      defaultValue,
      defaultToFirst,
      label = "",
      onChange,
      className,
      ...rest
    } = props;

    return (
      <div className="form-floating mb-2">
        <select
          className={clsx("form-select", className)}
          id="binningFunctionInput"
          onChange={onChange}
          ref={ref}
          {...rest}
        >
          {Object.entries(options ?? {}).map(([key, value], index) => (
            <option
              selected={(defaultToFirst && index == 0) || defaultValue == value}
              value={key}
            >
              {value}
            </option>
          ))}
        </select>
        <label htmlFor="binningFunctionInput">{label}</label>
      </div>
    );
  }
);

export default Select;