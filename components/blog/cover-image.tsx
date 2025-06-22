import Image from 'next/image'

interface CoverImageProps {
  src: string
  priority?: boolean
}

export default function CoverImage({ src, priority }: CoverImageProps) {
  const image = src ? (
    <Image
      className="h-auto w-full rounded-lg"
      width={2000}
      height={1000}
      alt="Cover Image"
      src={src}
      sizes="100vw"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: '50%' }} />
  )

  return (
    <div className="shadow-md transition-shadow duration-200 group-hover:shadow-lg sm:mx-0">
      {image}
    </div>
  )
}

