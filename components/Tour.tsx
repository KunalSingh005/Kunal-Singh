// components/Tour.tsx

import React from 'react';
import Joyride, { Step } from 'react-joyride';

const Tour: React.FC = () => {
    const steps: Step[] = [
        {
            target: '#about img', // About section ki image
            content: 'Desktop par is photo par hover karein, ya mobile par click karein!',
            disableBeacon: true,
        },
        {
            target: '.flip-card', // Pehla certificate card
            content: 'In cards par click karke dekhein, yeh flip hote hain aur certificate dikhate hain!',
        },
        {
            target: '.fixed.bottom-0.left-6', // Side wala social media bar
            content: 'Yahaan se mere social media profiles check karein.',
        },
    ];

    return (
        <Joyride
            steps={steps}
            continuous
            showProgress
            showSkipButton
            styles={{
                options: {
                    primaryColor: '#64ffda', // Aapke theme ka accent color
                    textColor: '#ccd6f6',
                    arrowColor: '#0a192f',
                    backgroundColor: '#0a192f',
                },
            }}
        />
    );
};

export default Tour;