import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between gap-5 w-full">
      
      <h1 className="font-serif font-bold text-2xl my-5">Social Network Media Downloader</h1>
      <div className="tools flex gap-3 w-5/6 ">
        <Link href={'/en/DownloaderImageInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
           Inastagram Image Downloader
        </Link>
        <Link href={'/en/DownloaderReelInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Reel Downloader
        </Link>
        <Link href={'/en/DownloaderVideoInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Video Downloader
        </Link>        
      </div> 

      <div className="tools flex gap-3 w-5/6 ">
        <Link href={'/en/DownloaderStoryInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
           Inastagram Story Downloader
        </Link>
        <Link href={'/en/DownloaderReelInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Reel Downloader
        </Link>
        <Link href={'/en/DownloaderVideoInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Video Downloader
        </Link>        
      </div> 

      <div className="tools flex gap-3 w-5/6 ">
        <Link href={'/en/DownloaderStoryInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
           Inastagram Story Downloader
        </Link>
        <Link href={'/en/DownloaderReelInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Reel Downloader
        </Link>
        <Link href={'/en/DownloaderVideoInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Video Downloader
        </Link>        
      </div>

      <div className="tools flex gap-3 w-5/6 ">
        <Link href={'/en/DownloaderStoryInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
           Inastagram Story Downloader
        </Link>
        <Link href={'/en/DownloaderReelInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Reel Downloader
        </Link>
        <Link href={'/en/DownloaderVideoInstagram'} className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-20 rounded-lg bg-blue-200">
            Inastagram Video Downloader
        </Link>        
      </div>

    </main>
  );
}
