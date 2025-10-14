
import React, { useState, useRef, useEffect, ReactNode } from 'react';

type AnimationType = 'fade-in-up' | 'fade-in' | 'slide-in-left' | 'slide-in-right';

interface FadeInProps {
    children: ReactNode;
    animation?: AnimationType;
    delay?: number;
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
    stagger?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
    children,
    animation = 'fade-in-up',
    delay = 0,
    className = '',
    threshold = 0.1,
    triggerOnce = true,
    stagger,
}) => {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    if (triggerOnce && domRef.current) {
                        observer.unobserve(domRef.current);
                    }
                }
            });
        }, { threshold });

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [threshold, triggerOnce]);

    // Handle staggering for direct children
    if (stagger && React.Children.count(children) > 1) {
        return (
             <div
                ref={domRef}
                className={`${className}`}
            >
                {React.Children.map(children, (child, i) => (
                     <div
                        className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0'} ${
                            !isVisible && animation === 'fade-in-up' ? 'translate-y-5' : ''
                        } ${
                            !isVisible && animation === 'slide-in-left' ? '-translate-x-5' : ''
                        } ${
                            !isVisible && animation === 'slide-in-right' ? 'translate-x-5' : ''
                        }`}
                        style={{ transitionDelay: `${(delay || 0) + i * stagger}ms` }}
                     >
                         {child}
                     </div>
                ))}
            </div>
        )
    }

    return (
        <div
            ref={domRef}
            className={`${className} transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0'} ${
                !isVisible && animation === 'fade-in-up' ? 'translate-y-5' : ''
            } ${
                !isVisible && animation === 'slide-in-left' ? '-translate-x-5' : ''
            } ${
                !isVisible && animation === 'slide-in-right' ? 'translate-x-5' : ''
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeIn;
