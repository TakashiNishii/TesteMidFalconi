import Image from 'next/image'
import React from 'react'

interface HomeTemplateProps extends React.PropsWithChildren {
  title: string
  description: string
}

const HomeTemplate = ({ title, description, children }: HomeTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between w-full bg-base-100">
      <div className="max-w-md flex flex-col justify-center items-center md:items-start w-full p-4 gap-2">
        <Image src="/images/mid_falconi_logo.jpg" alt="Logo" width={100} height={100} />
        <h2 className="text-3xl font-bold text-neutral">{title}</h2>
        <p className="text-neutral">{description}</p>
        {children}
      </div>
      <div
        className="flex-1 w-full justify-center items-center min-w-[50dvw] min-h-[100dvh] hidden md:flex shadow"
        style={{
          backgroundImage: 'url(/images/sign-in-image.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  )
}

export default HomeTemplate