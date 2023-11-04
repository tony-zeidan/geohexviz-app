import clsx from "clsx";
import React from "react";

export interface RangeProps {
  label?: string;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  className?: string;
  onChange?: any;
}

const Range = React.forwardRef<HTMLInputElement, RangeProps>((props, ref) => {
    const { label, min, max, step, className, onChange, ...rest } = props;

    return (
      <div>
        <label htmlFor="hexResRangeInput" className="form-label">
          {label}
        </label>
        <input
          type="range"
          className={clsx("form-range", className)}
          ref={ref}
          id="hexResRangeInput"
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          {...rest}
        />
      </div>
    );
  }
);

export default Range;