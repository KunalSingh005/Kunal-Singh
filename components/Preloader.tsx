// components/Preloader.tsx

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-dark-navy flex flex-col items-center justify-center z-[100]">
            <div className="w-full max-w-lg text-center font-mono text-accent">
                <TypeAnimation
                    sequence={[
                        'Booting up kernel...',
                        1000,
                        'Establishing secure connection...',
                        1000,
                        'Initializing portfolio...',
                        800,
                        'Welcome.',
                        500
                    ]}
                    wrapper="div"
                    cursor={true}
                    speed={50}
                    style={{ fontSize: '1.5em' }}
                />
            </div>
        </div>
    );
};

export default Preloader;