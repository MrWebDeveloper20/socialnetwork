import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="instagram flex flex-col items-center justify-between gap-5 w-full pb-5">
      <h1 className="font-serif font-bold text-2xl my-5">
        Social Network Media Downloader
      </h1>
      <div className="tools flex gap-3 w-5/6 ">
        <Link
          href={'/en/DownloaderVideoInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Video Downloader
        </Link>
        <Link
          href={'/en/DownloaderReelInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Reels Downloader
        </Link>
        <Link
          href={'/en/DownloaderImageInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Photo Downloader
        </Link>
      </div>

      <div className="tools flex gap-3 w-5/6 ">
        <Link
          href={'/en/DownloaderIGTVInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram IGTV Downloader
        </Link>
        <Link
          href={'/en/DownloaderAudioInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Audio Downloader
        </Link>
        <Link
          href={'/en/DownloaderStatusInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Status Downloader
        </Link>
      </div>

      <div className="tools flex gap-3 w-5/6 ">
        <Link
          href={'/en/DownloaderHighlightsInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Highlights Downloader
        </Link>
        <Link
          href={'/en/DownloaderHighlightConversInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Highlight Convers Downloader
        </Link>
        <Link
          href={'/en/DownloaderProfileInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Profile Downloader
        </Link>
      </div>

      <div className="tools flex gap-3 w-5/6 ">
        <Link
          href={'/en/DownloaderCopyCaptionInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Copy Caption Downloader
        </Link>
        <Link
          href={'/en/DownloaderHashtagInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Hashtag Generator
        </Link>
        <Link
          href={'/en/DownloaderDPDownloderInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram DP Downloder (download all Posts)
        </Link>
      </div>

      <div className="tools flex gap-3 w-5/6 ">
        <Link
          href={'/en/DownloaderHashtagsTrendingInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Hashtags Trending
        </Link>
        <Link
          href={'/en/DownloaderProfileAnalyzerInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram Profile Analyzer
        </Link>
        <Link
          href={'/en/DownloaderUserIdInstagram'}
          className="tool1 font-serif text-lg font-bold flex justify-center items-center w-1/3 h-16 rounded-lg bg-blue-200"
        >
          Inastagram User Id Finder
        </Link>
      </div>
    </main>
  )
}
