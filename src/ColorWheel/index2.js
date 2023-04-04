import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Wheel.css'
import { setSelectedColor } from '../store/appSlice';

const ColorWheel2 = () => {
    const dispatch = useDispatch();
    let active = false;
    let angle = 0;
    let rotation = 0;
    let startAngle = 0;
    let center = { x: 0, y: 0 };
    const R2D = 180 / Math.PI;
    const rot = document.getElementById('main');

    const init = () => {
        rot?.addEventListener('mousedown', start, false);
        document.addEventListener('mousemove', (event) => {
            if (active === true) {
                event.preventDefault();
                rotate(event);
            }
        });
        document.addEventListener('mouseup', (event) => {
            event.preventDefault();
            stop();
        });
    };

    const start = (e) => {
        e.preventDefault();
        const bb = (e.target).getBoundingClientRect();
        const t = bb.top;
        const l = bb.left;
        const h = bb.height;
        const w = bb.width;
        let x, y;
        center = {
            x: l + w / 2,
            y: t + h / 2,
        };
        x = e.clientX - center.x;
        y = e.clientY - center.y;
        startAngle = R2D * Math.atan2(y, x);
        return (active = true);
    };

    const rotate = (e) => {
        e.preventDefault();
        let x = e.clientX - center.x;
        let y = e.clientY - center.y;
        let d = R2D * Math.atan2(y, x);
        rotation = d - startAngle;
        if (rot) {
            rot.style.webkitTransform = `rotate(${angle + rotation}deg)`;
        }
    };

    const stop = () => {
        angle += rotation;
        return (active = false);
    };

    useEffect(() => {
        init();
    }, [init]);

    const handleColorChange = (selectedColor) => {
        dispatch(setSelectedColor(selectedColor));
    }

    return (
        <center>
            <div className="main" id="main">
                <span className="root color-0" onClick={() => handleColorChange(
                    {
                        id: 1,
                        name: 'Amazonite',
                        hex: '#9c4037',
                        sec: '#ff7c35',
                        locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-11" onClick={() => handleColorChange(
                    {
                        id: 2, name: 'Amber', hex: '#da4900', sec: '#ff7c35', locked: true
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-12" onClick={() => handleColorChange(
                    {
                        id: 3, name: 'Amethyst', hex: '#462f99', sec: '#b1a8d7', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-13" onClick={() => handleColorChange(
                    {
                        id: 4, name: 'Calcite', hex: '#829292', sec: '#e8eeec', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-14" onClick={() => handleColorChange(
                    {
                        id: 5, name: 'Clorophyll', hex: '#736d6f', sec: '#d4d9d3', locked: false
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-15" onClick={() => handleColorChange(
                    {
                        id: 6, name: 'corundum', hex: '#acd18e', sec: '#f8faec', locked: false
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-16" onClick={() => handleColorChange(
                    {
                        id: 7, name: 'Latte', hex: '#937551', sec: '#e5ddd0', locked: false
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-17" onClick={() => handleColorChange(
                    {
                        id: 8, name: 'Amazonite', hex: '#9c4037', sec: '#e0a18a', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-18" onClick={() => handleColorChange(
                    {
                        id: 9, name: 'Amber', hex: '#da4900', sec: '#ff7c35', locked: true,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-1" onClick={() => handleColorChange(
                    {
                        id: 10, name: 'Amethyst', hex: '#462f99', sec: '#b1a8d7', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-21" onClick={() => handleColorChange(
                    {
                        id: 11, name: 'Calcite', hex: '#829292', sec: '#e8eeec', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-22" onClick={() => handleColorChange(
                    {
                        id: 12, name: 'Clorophyll', hex: '#736d6f', sec: '#d4d9d3', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-23" onClick={() => handleColorChange(
                    {
                        id: 13, name: 'corundum', hex: '#acd18e', sec: '#f8faec', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-24" onClick={() => handleColorChange(
                    {
                        id: 14, name: 'Latte', hex: '#937551', sec: '#e5ddd0', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-25" onClick={() => handleColorChange(
                    {
                        id: 15, name: 'Amazonite', hex: '#9c4037', sec: '#e0a18a', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-26" onClick={() => handleColorChange(
                    {
                        id: 16, name: 'Amber', hex: '#da4900', sec: '#ff7c35', locked: true,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-27" onClick={() => handleColorChange(
                    {
                        id: 17, name: 'Amethyst', hex: '#462f99', sec: '#b1a8d7', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
                <span className="root color-28" onClick={() => handleColorChange(
                    {
                        id: 18, name: 'Calcite', hex: '#829292', sec: '#e8eeec', locked: false,
                    }
                )}>
                    <div className="content"></div>
                </span>
            </div>
        </center>

    )
};

export default ColorWheel2;
