"use client";
import React, { useState, useEffect } from 'react';
import Loading from '../../../components/Loading';

const dhh = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after a delay
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className='bg-[#005E3D] min-h-screen flex flex-col'>
        <div className='flex flex-col m-10 p-10  '>
        <h1 className='flex justify-center text-3xl font-bold'>DHH playlist</h1>
      <h2 className='m-4 flex justify-center text-l'>This is a happy mood playlist where you can just chill and do your chores (or code) without any worries. </h2>
      
      <div className='items-center justify-center h-screen pl-32 pr-32 m-12'>
        {isLoading ? ( // Show loader while loading
          <Loading />
        ) : (
          <iframe 
            className='h-dvh' 
            style={{ borderRadius: 10 }} 
            src="https://open.spotify.com/embed/playlist/18QhPBaxnpeKlOnZfl2JK1?utm_source=generator" 
            width="100%" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy" 
            sandbox="allow-scripts">
          </iframe>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default dhh;
