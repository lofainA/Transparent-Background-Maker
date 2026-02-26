import { CustomPicker } from 'react-color';
import { Saturation, Hue, Alpha, EditableInput } from 'react-color/lib/components/common';
import './colorpicker.css';

const ColorPicker = ({ hex, rgb, hsl, hsv, onChange }) => {
    return (
        <div className='color-picker-container'>
            <div className='saturation'>
                <Saturation hsl={hsl} hsv={hsv} onChange={onChange} />
            </div>

            <div className='hue'>
                <Hue hsl={hsl} onChange={onChange} />
            </div>

            <div className='alpha'>
                <Alpha rgb={rgb} hsl={hsl} onChange={onChange} />
            </div>

            <div className='hex'>
                <EditableInput
                    placeholder='Hex Color'
                    value={hex.replace("#", "")}
                    onChange={(data) => onChange({ hex: `#${data.hex}` })}
                />
            </div>
        </div>
    );
};

export default CustomPicker(ColorPicker);