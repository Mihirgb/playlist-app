import React from 'react'

const happysongs = () => {
  return (
    <div className='flex flex-col m-12 p-12'>
      <h1 className='flex justify-center text-3xl font-bold'> Happy songs playlist</h1>
      <div className='items-center justify-center h-screen p-20 m-12'>
      <iframe className='h-dvh' style={{borderRadius:10}} src="https://open.spotify.com/embed/playlist/4fZT9uptS2BqViLX22BnwG?utm_source=generator" width="100%" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}

export default happysongs