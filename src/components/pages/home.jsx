import React, { useEffect, useRef } from 'react';
import PoalroidComp from '../polaroid';

const Home = () => {
    const imgSectionRef = useRef(null);

    const images = [
        { src: 'https://i.pinimg.com/1200x/dd/88/72/dd8872932e3b55c174738f6a0a511c26.jpg', description: 'The first date of the summer. 💗', top: '-6%', left: '48%'},
        { src: 'https://i.pinimg.com/736x/f8/f8/19/f8f819c4958e1c6e29f559b9cb003b0e.jpg', description: 'Him goofing around when he was 2.', top: '79%', left: '89%'},
        { src: 'https://i.pinimg.com/1200x/d7/11/d7/d711d700794e1f4d8d84d8929fed6fde.jpg',description: "Her 2nd birthday and at her grandparent's home. 🥹 She grew up too fast.", top: '93%', left: '51%'},
        { src: 'https://i.pinimg.com/736x/ed/d9/4c/edd94caedf504df394626e6893af03eb.jpg', description: "A half marathon with the boys !! 🐦‍🔥", top: '83%', left: '13%'},
        { src: 'https://i.pinimg.com/1200x/50/b8/77/50b877330ff2b35e91790aead8017fe9.jpg', description: 'The dirtbike competition at texas, 🥇', top: '3%', left: '19%'},
        { src: 'https://i.pinimg.com/736x/d7/1c/e2/d71ce2982ee7a0a3d6a3168c9e964c21.jpg', description: 'Her 4th birthday, My sweet sweet Tangerine. 🫠', top: '13%', left: '84%'},        
        { src: 'https://i.pinimg.com/1200x/d6/7f/07/d67f079f90c15182fb7228ce14cf5f5d.jpg', description: 'Uni graduation ceremony 2016, what a jam, what classic mates.🫕', top: '10%', left: '48%'},
        { src: 'https://i.pinimg.com/736x/25/06/c9/2506c909c706c6fcbaaf686aafc5032e.jpg', description: 'The day she had the photoshoot, quite the diva - Diva 😽', top: '79%', left: '89%'},
        { src: 'https://i.pinimg.com/736x/a5/6d/a4/a56da4ae77f7d77a3ad438291326e257.jpg', description: 'The summit of Mt. Taranaki, the NZ trip experiences. ⛰️', top: '93%', left: '51%'},
        { src: 'https://i.pinimg.com/1200x/f9/0b/ec/f90becbd4b6bf30ef79aaf30b02ea3a7.jpg', description: 'My lovely boys and a pair of caring brothers. Love you kids.', top: '83%', left: '13%'},
        { src: 'https://i.pinimg.com/1200x/7a/51/cd/7a51cd1159698d6f392b4dce8f222ab0.jpg', description: 'Playing the long game of adventure. 🗺️', top: '3%', left: '19%'},
        { src:'https://i.pinimg.com/736x/c0/d0/91/c0d091e5e52f63e6deb661017a7356a8.jpg', description: 'That one train ride through the alps, Alps2022. ⛺', top: '17%', left: '86%'}
    ];

    // useEffect(() => {
    //     const cards = imgSectionRef.current?.querySelectorAll('.imgContainer');

    //     cards?.forEach(card => {
    //         const images = card.querySelectorAll('.image');
    //         let maxHeight = 0;

    //         images.forEach(image => {
    //             // image.style.width = '350px';
    //             if (image.complete) {
    //                 maxHeight = Math.max(maxHeight, image.offsetHeight);
    //             } else {
    //                 image.addEventListener('load', () => {
    //                     maxHeight = Math.max(maxHeight, image.offsetHeight);
    //                     card.style.height = `${maxHeight}px`;
    //                 });
    //             }
    //         });

    //         card.style.height = `${maxHeight}px`;
    //     });
    // }, []);

    return (
        <main>
            <div className="heroContainer relative w-full h-screen flex flex-col align-middle justify-center items-center">
                <div className="idealCnt h-screen flex max-sm:p-4 max-lg:flex-col lg:gap-28 items-center ">
                    <div className="coalition flex flex-col flex-1 align-middle justify-center lg:gap-4">
                        <div className="heroTitle w-full flex justify-center max-md:pt-16">
                            <div className="relative inline-block">
                                <span className="text-5xl lg:text-7xl font-bold text-neutral-50 relative z-10">Memento</span>
                                <span className="halo absolute inset-0 -inset-x-6 -inset-y-20 z-0 blur-[25px] rounded-full bg-pink-600 opacity-40 pointer-events-none"></span>
                            </div>
                        </div>
                        <div className='heroSct w-full flex flex-col align-middle justify-center items-center mt-4 lg:pl-1.5'>
                            <div className="description w-full flex gap-2 flex-col justify-center items-center lg:place-items-start">
                                <p className='text-[12px] lg:text-[16px] font-medium italic text-neutral-400'>a digital memoir of your life.</p>
                                <div className="heroBtn w-fit h-fit backdrop-blur-md bg-white/5 border border-white/30 text-pink-600 font-medium text-[14px] lg:text-xl px-6 py-2 rounded-md  hover:bg-neutral-50/20 hover:border-pink-200 transition-all flex align-middle justify-center z-10 shadow-md cursor-pointer" onClick={()=>console.log('clicked')}>Preserve a Moment</div>
                            </div>
                        </div>
                    </div>
                    <div className="imgStorage relative inline-block">
                        <span className="halo absolute inset-0 -inset-x-6 -inset-y-10 -z-10 blur-[125px] rounded-full bg-pink-600 opacity-30 pointer-events-none translate-x-[300px]"></span>
                        <div className="imgSct w-fit h-[55vh] md:max-h-[530px] lg:h-[65vh] bg-white overflow-hidden md:border-16 lg:border-32 border-white md:outline-8 outline-neutral-200 ">
                            <div className="imgSection columns-2 md:columns-4 gap-4 justify-center align-middle overflow-hidden">
                                {images.map((image, i)=>(
                                    <div className="imgContainer" key={i}>
                                        <div className="imgCard">
                                            <div className="front">
                                                <img
                                                    src={image.src}
                                                    className="image max-md:max-w-[140px] lg:max-w-[200px] max-h-fit mb-4 break-inside-avoid shadow-md w-full cursor-pointer card-flip"
                                                    alt={`polaroid-${i}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="footer sticky bottom-0 py-2 lg:py-5 flex items-center justify-center md:justify-end italic text-[14px] text-neutral-500 lg:text-pink-600">
                            <p>"remember what might fade away."</p>
                        </div>
                    </div>
                </div>

                {/* <div className="footer sticky w-[100vw] bottom-0 p-5 flex items-center justify-center italic text-[14px] text-neutral-200 lg:text-neutral-400 bg-neutral-50/30 backdrop-blur-lg backdrop-saturate-150 border-t border-white/20">
                    <p>"remember what might fade away."</p>
                </div> */}
            </div>
        </main>
    );
};

export default Home;
