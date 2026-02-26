import { CustomPicker } from 'react-color';
import { Saturation, Hue, Alpha, EditableInput } from 'react-color/lib/components/common';

const ColorPicker = ({ hex, rgb, hsl, hsv, onChange }) => {
  return (
    <div style={{ width: 240, padding: 12, borderRadius: 12, background: "#fff", boxShadow: "0 4px 14px rgba(0,0,0,0.15)" }}>

      <div style={{ position: "relative", height: 140 }}>
        <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
      </div>

      <div style={{ position: "relative", height: 12, marginTop: 12 }}>
        <Hue hsl={hsl} onChange={onChange} />
      </div>

      <div style={{ position: "relative", height: 12, marginTop: 12 }}>
        <Alpha rgb={rgb} hsl={hsl} onChange={onChange} />
      </div>

      <div style={{ marginTop: 10 }}>
        <EditableInput
          label="HEX"
          value={hex.replace("#", "")}
          onChange={(data) => onChange({ hex: `#${data.hex}` })}
        />
      </div>

      <div
        style={{
          marginTop: 12,
          height: 36,
          borderRadius: 8,
          background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
          border: "1px solid #ddd"
        }}
      />
    </div>
  );
};

export default CustomPicker(ColorPicker);