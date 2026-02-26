import { useState, useRef } from 'react'
import html2canvas from 'html2canvas';
import ColorPicker from './components/ColorPicker';
import './App.css'

function App() {
    const [rgba, setRgba] = useState({ r: 255, g: 0, b: 0, a: 0.5 });
    const printRef = useRef();

    const handleColorChange = (color) => {
        if (!color?.rgb) return;
        setRgba(color.rgb);
    };

    const handleDownload = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element, {
            backgroundColor: null,
            useCORS: true,
            allowTaint: true
        });

        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = 'image.png';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    };

    return (
        <div className='container'>
            <div className='heading'>
                <div className='title'>AnyColor</div>
                <div className='subtitle'>Download any color png with the opacity that you want</div>
            </div>
            <div className='image-container'>
                <div
                    ref={printRef}
                    className='transparent-layer'
                    style={{ backgroundColor: `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})` }}
                />
                <img
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHNpcW1mM2FsNTN4eGpsMnQ0cHFwczFyN25meWxuenI3andkN3JwMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GzYkQWKKa4idNhpyzQ/giphy.gif"
                    alt="Dummy image"
                    className='image'
                />
            </div>

            <ColorPicker
                color={`rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`}
                onChange={handleColorChange}
            />

            <div
                className='download-button'
                onClick={handleDownload}>
                Download
            </div>
        </div>
    )
}

export default App
