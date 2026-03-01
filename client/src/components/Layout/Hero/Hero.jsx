import { useState, useEffect, useRef } from 'react';
import styles from './Hero.module.scss';

export default function Hero() {
    const baseImages = [
        { src: 'https://res.cloudinary.com/duhqyfbk1/image/upload/v1772032181/IMG-20240914-WA0006_fub10r.jpg', alt: 'Lucky student after giving the Cadet College Admission Test in 2023. [Batch: 2024]' },
        { src: 'https://res.cloudinary.com/duhqyfbk1/image/upload/v1772032182/Cadet_Final_Ads_uz6tp0.jpg', alt: 'Meritious Cadet Students' },
        { src: 'https://res.cloudinary.com/duhqyfbk1/image/upload/v1772032184/IMG-20250104-WA0037_ntvq5f.jpg', alt: 'Teachers in the Cadet College' },
        { src: 'https://res.cloudinary.com/duhqyfbk1/image/upload/v1772032180/IMG-20231221-WA0037_x3aag8.jpg', alt: 'Prize Ceremony for Annual Academic Excellence' }
    ];
    const [images, setImages] = useState(() => {
        const paddedArray = [
            
            baseImages[baseImages.length - 2],
            baseImages[baseImages.length - 1],
            ...baseImages,
            baseImages[0],
            baseImages[1]
        ];
        return paddedArray.map((img) => ({ ...img, id: crypto.randomUUID() }));
    });

    const trackRef = useRef(null);
    const isAnimatingRef = useRef(false);

    const handleNext = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        
        const track = trackRef.current;
        track.classList.add(styles.transitioning);
        track.classList.add(styles.shiftLeft);

        setTimeout(() => {
            track.classList.remove(styles.transitioning);
            track.classList.remove(styles.shiftLeft);
            
            setImages(prev => {
                const newArray = [...prev];
                newArray.push(newArray.shift()); 
                return newArray;
            });
            
            isAnimatingRef.current = false;
        }, 500); 
    };

    const handlePrev = () => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;
        
        const track = trackRef.current;
        track.classList.add(styles.transitioning);
        track.classList.add(styles.shiftRight);

        setTimeout(() => {
            track.classList.remove(styles.transitioning);
            track.classList.remove(styles.shiftRight);
            
            setImages(prev => {
                const newArray = [...prev];
                newArray.unshift(newArray.pop()); 
                return newArray;
            });
            
            isAnimatingRef.current = false;
        }, 500);
    };

    useEffect(() => {
        const autoPlayTimer = setInterval(() => {
            handleNext();
        }, 3000);
        return () => clearInterval(autoPlayTimer);
    }, []);

    return (
        <div className={styles.heroWrapper}>
            <div className={styles.heroContainer}>
                
                <div className={styles.clickZoneLeft} onClick={handlePrev} />
                
                <button className={`${styles.navButton} ${styles.left}`} onClick={handlePrev}>
                    &#10094;
                </button>

                <div className={styles.carouselViewport}>
                    <div className={styles.carouselTrack} ref={trackRef}>
                        {images.map((img) => (
                            <div key={img.id} className={styles.slide}>
                                <img src={img.src} alt={img.alt} />
                            </div>
                        ))}
                    </div>
                </div>

                <button className={`${styles.navButton} ${styles.right}`} onClick={handleNext}>
                    &#10095;
                </button>

                <div className={styles.clickZoneRight} onClick={handleNext} />
            </div>
        </div>
    );
}