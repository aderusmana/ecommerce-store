import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

interface GalleryTabProps{
    image:ImageType
}

const GalleryTab :React.FC<GalleryTabProps> = ({image}) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
        {({selected}) => (
            <div>
                <span className='absolute h-full wfull aspect-square inset-0 overflow-hidden rounded-md'>
                    <Image
                        src={image.url}
                        alt={image.id}
                        fill
                        className="object-cover object-center"
                    />
                </span>
                <span className={cn(
                    "absolute inset-0 bg-black bg-opacity-40 transition-opacity ring-2 ring-offset-2",
                    selected ? "ring-black opacity-100" : "ring-transparent opacity-0"
                )}>
                </span>
            </div>
        )}
    </Tab>
  )
}

export default GalleryTab