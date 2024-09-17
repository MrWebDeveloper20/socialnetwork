import React from 'react'
import Link from 'next/link'

const Menutools = () => {
  return (
    <div className='flex flex-col justify-between items-start gap-2 w-full h-fit my-2'>
      <div className="tool1 flex flex-row justify-between items-start gap-2 w-full">
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderReelInstagram'}>Download Insta Reels</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderVideoInstagram'}>Download Insta Video</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderStoryInstagram'}>Download Insta Story</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
      </div>

      <div className="tool2 flex flex-row justify-between items-start gap-2 w-full">
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
        <Link className='font-serif ring-1 px-2 rounded-md bg-yellow-200' href={'/en/DownloaderImageInstagram'}>Download Insta Image</Link>
      </div>
            
    </div>
  )
}

export default Menutools
