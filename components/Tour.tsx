// components/Tour.tsx

import { useContext, useEffect } from 'react';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import './tour-styles.css'; // Hum yeh file agle step mein banayenge

// Tour ke steps
const steps = [
  {
    id: 'step-1',
    text: 'Desktop par is photo par hover karein, ya mobile par click karein!',
    attachTo: { element: '#about img', on: 'left' },
    buttons: [{ text: 'Next', action: () => tour?.next() }],
  },
  {
    id: 'step-2',
    text: 'In cards par click karke dekhein, yeh flip hote hain aur certificate dikhate hain!',
    attachTo: { element: '.flip-card', on: 'bottom' },
    buttons: [{ text: 'Next', action: () => tour?.next() }],
  },
  {
    id: 'step-3',
    text: 'Yahaan se mere social media profiles check karein.',
    attachTo: { element: '.fixed.bottom-0.left-6', on: 'right' },
    buttons: [{ text: 'Done', action: () => tour?.complete() }],
  },
];

// Yeh function tour ko start karega
function TourController() {
  const tour = useContext(ShepherdTourContext);

  useEffect(() => {
    // Thoda delay dekar tour start karega taaki sab kuch load ho jaaye
    const timer = setTimeout(() => {
      // Yeh check karega ki tour pehle chala hai ya nahi
      if (!localStorage.getItem('shepherd-tour-seen')) {
        tour?.start();
        localStorage.setItem('shepherd-tour-seen', 'true');
      }
    }, 1500); // 1.5 second ka delay
    
    return () => clearTimeout(timer);
  }, [tour]);

  return null;
}

const Tour: React.FC = () => {
  return (
    <ShepherdTour steps={steps}>
      <TourController />
    </ShepherdTour>
  );
};

export default Tour;