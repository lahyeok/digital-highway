import { memo, useMemo } from "react";
import "./TypeTextStateActive.css";

const TypeTextStateActive = memo(
  ({
    label,
    textFieldData,
    typeTextStateActiveHeight,
    labelFontSize,
    labelLetterSpacing,
    textboxBackgroundColor,
    textboxBorder,
    textboxFlex,
    textFieldDataFontSize,
  }) => {
    const typeTextStateActiveStyle = useMemo(() => {
      return {
        height: typeTextStateActiveHeight,
      };
    }, [typeTextStateActiveHeight]);

    const labelStyle = useMemo(() => {
      return {
        fontSize: labelFontSize,
        letterSpacing: labelLetterSpacing,
      };
    }, [labelFontSize, labelLetterSpacing]);

    const textboxStyle = useMemo(() => {
      return {
        backgroundColor: textboxBackgroundColor,
        border: textboxBorder,
        flex: textboxFlex,
      };
    }, [textboxBackgroundColor, textboxBorder, textboxFlex]);

    const textFieldDataStyle = useMemo(() => {
      return {
        fontSize: textFieldDataFontSize,
      };
    }, [textFieldDataFontSize]);

    return (
      <div className="insta-typetext-stateactive" style={typeTextStateActiveStyle}>
        <div className="insta-label" style={labelStyle}>
          {label}
        </div>
        <div className="insta-textbox1" style={textboxStyle}>
          <div className="insta-text-field-data" style={textFieldDataStyle}>
            {textFieldData}
          </div>
        </div>
      </div>
    );
  }
);

export default TypeTextStateActive;
