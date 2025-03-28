// @/components/ui/custom/Carousel.tsx

import {
    animate,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
} from "framer-motion"
import { useEffect, useRef } from "react"

export function StyleSheet() {
    return (
        <style>{`
            #carousel {
                width: 100%;
                max-width: 1000px;
                height: auto;
                overflow-y: hidden;
                position: relative;
                overflow-x: hidden; /* Hide overflow to prevent scrollbar during animation */
            }
                
            #carousel .bg {
                stroke: var(--layer);
            }

            #carousel ul {
                display: flex;
                list-style: none;
                height: auto;
                max-height: 220px;
                padding: 20px 0;
                flex: 0 0 auto;
                margin: 0;
                gap: 20px;
                justify-content: flex-start;
                width: max-content; /* Let it be as wide as needed */
            }
            
            /* Add this class via JS for the animation container */
            #carousel .carousel-track {
                display: flex;
                width: max-content;
                will-change: transform;
                transition: transform 0.5s ease-out;
            }

            #carousel ::-webkit-scrollbar {
                height: 5px;
                width: 5px;
                background: #fff3;
                -webkit-border-radius: 1ex;
            }

            #carousel ::-webkit-scrollbar-thumb {
                background: var(--accent);
                -webkit-border-radius: 1ex;
            }

            #carousel ::-webkit-scrollbar-corner {
                background: #fff3;
            }

            #carousel li {
                flex: 0 0 200px;
                min-width: 200px;
                height: 200px;
                position: relative;
                overflow: hidden;
                border-radius: 8px;
                transition: transform 0.3s ease;
            }
            
            #carousel li:hover {
                transform: scale(1.05);
            }
            
            #carousel li .overlay {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 10px;
                transform: translateY(100%);
                transition: transform 0.3s ease;
                text-align: center;
                font-weight: 500;
            }
            
            #carousel li:hover .overlay {
                transform: translateY(0);
            }
        `}</style>
    )
}

// Create a new hook for the infinite carousel functionality
export function useInfiniteCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // Get references after component mounts
        const carousel = carouselRef.current;
        const track = carouselTrackRef.current;
        
        if (!carousel || !track) return;
        
        // Clone the items to create the infinite loop effect
        const setupInfiniteScroll = () => {
            const items = track.querySelector('ul');
            if (!items) return;
            
            // Clone all li elements
            const listItems = items.querySelectorAll('li');
            if (listItems.length === 0) return;
            
            // Clone each item and append to create an infinite loop effect
            listItems.forEach((item: Element) => {
                const clone = item.cloneNode(true);
                items.appendChild(clone);
            });
        };
        
        // Animation variables
        let animationId: number | null = null;
        let scrollPosition = 0;
        const scrollSpeed = 0.5; // pixels per frame - adjust for speed
        
        // Animation function
        const scroll = () => {
            if (!track) return;
            
            // Get the first ul element
            const list = track.querySelector('ul');
            if (!list) return;
            
            // Get original items count
            const originalItemCount = list.querySelectorAll('li').length / 2;
            const itemWidth = 200; // From CSS
            const gapWidth = 20; // From CSS
            
            // Calculate when to reset (after scrolling half the items)
            const resetPoint = ((itemWidth + gapWidth) * originalItemCount);
            
            // Increment scroll position
            scrollPosition += scrollSpeed;
            
            // Reset scroll position when we've scrolled to the clone section
            if (scrollPosition >= resetPoint) {
                scrollPosition = 0;
            }
            
            // Apply the transform
            track.style.transform = `translateX(-${scrollPosition}px)`;
            
            animationId = requestAnimationFrame(scroll);
        };
        
        // Setup our infinite scroll
        setupInfiniteScroll();
        
        // Setup animation handlers
        const startAnimation = () => {
            if (!animationId) {
                animationId = requestAnimationFrame(scroll);
            }
        };
        
        const stopAnimation = () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
                animationId = null;
            }
        };
        
        // Automatically start animation
        startAnimation();
        
        // Add event listeners for pause on hover
        carousel.addEventListener('mouseenter', stopAnimation);
        carousel.addEventListener('mouseleave', startAnimation);
        
        // Cleanup
        return () => {
            stopAnimation();
            carousel.removeEventListener('mouseenter', stopAnimation);
            carousel.removeEventListener('mouseleave', startAnimation);
        };
    }, []);
    
    return { carouselRef, carouselTrackRef };
}

// Rest of your code remains the same
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

export function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    );

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            );
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            );
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            );
        }
    });

    return maskImage;
}