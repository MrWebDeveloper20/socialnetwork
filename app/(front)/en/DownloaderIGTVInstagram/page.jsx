'use client'
import React, { useState } from 'react'
import { instagramGetUrl } from '@/actions/index'
import Link from 'next/link'
import Image from 'next/image'

const Tools = () => {
  const [msg, setMsg] = useState('')
  const [empty, setempty] = useState(true)
  const [linkurl, setLinkURL] = useState('')

  const changeURL = (event) => {
    console.log(event.target.value)
    const link = event.target.value
    if (event.target.value) {
      if (link.startsWith('https://www.instagram.com')) {
        console.log('llllll')

        async function test(link) {
          let result = await instagramGetUrl(link)
          return result
        }

        test(link)
          .then((result) => {
            // console.log("Test Videos/Images OK")
            // console.log('res',result.url_list[0])
            setLinkURL(result.url_list[0])
            // console.dir(result, {depth: null})
          })
          .catch((err) => {
            console.error(err)
          })
        setempty(true)
      } else {
        setempty(false)
        setMsg('Please insert a valid link')
      }
    } else {
      setempty(true)
      // setMsg('Please insert a link')
    }
  }
  return (
    <div className="instagram p-3 my-2 flex flex-col justify-center items-center">
      <h1 className='text-xl font-serif font-bold'>Download Instagram Story</h1>
      <input
        onChange={() => {
          changeURL(event)
        }}
        className="ring-2 font-serif rounded-lg p-3 text-left w-1/3 m-5"
        type="text"
        name="search"
        id="search"
        placeholder='Insert Instagram Story link'
      />
      
      {/* <a
        href={linkurl}
        download
        className="font-serif text-xl text-blue-500 my-2"
        target="blank"
      >
        Download
      </a> */}

      <div className="w-96 h-96">
        <video className="h-96 w-auto" src={linkurl} autoplay controls></video>
      </div>

      {!empty && <p className="font-serif text-red-500 p-2 m-2">{msg}</p>}
    </div>
  )
}

export default Tools
