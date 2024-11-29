'use client'

import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LinkIcon, LocateFixedIcon, MenuIcon } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioDark() {

  const Projects = [
    {
      name: 'ImageCraft',
      description: 'Uses Cloudinary SDK to allow users to enhance images and extract content from them.',
      href: 'https://image-craft-zeta.vercel.app',
      technologies: ['NextJs', 'Cloudinary SDK', 'Prisma', 'Clerk', 'ShadCn', 'Daisy Ui']
    },
    {
      name: 'Spectrum',
      description: 'Enables Spotify Premium users to host rooms and share playlists.',
      href: 'https://spectrum-delta-one.vercel.app',
      technologies: ['NextJs', 'Spotify API', 'Prisma', 'AuthJs v5']
    },
    {
      name: 'Smile Token Crypto X Ai',
      description: 'A Solidity DApp that rewards ETH based on smile ratings.',
      href: 'https://smile-cryto-x-ai.vercel.app',
      technologies: ['Solidity', 'NextJs', 'Gemini LLM', 'Metamask', 'Cloudinary']
    }
  ];

  const Social = [
    {
      name: 'Github',
      href: 'https://github.com/sumukhj1219'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/SumukhJ224454'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sumukh-joshi-262515292/'
    }
  ]

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
     

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 p-4">
        {/* Left Sidebar */}
        <div className={` hidden md:block md:col-span-3 space-y-4`}>
          <Card>
            <CardHeader>
              <CardTitle>Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {Social.map((platform, index) => (
                  <li key={index}>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex gap-x-2 text-sky-500"
                    >
                    <LinkIcon size={18}/>
                      {platform.href}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'React', 'Next.js', 'Solidity', 'Gen Ai', 'Node.js', 'Prisma', 'MongoDB', 'Drizzle'].map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hobbies</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['Coding', 'Watching Anime', 'Exploring Blockchain', 'Music', 'Watching Cricket'].map((hobby, index) => (
                  <li key={index} className="text-gray-300">{hobby}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-6 space-y-6">
          <Card>
            <CardHeader />
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="size-20 ring-2 ring-white ">
                  <AvatarImage src="/sumukh.jpeg" className="object-cover object-top" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-lg font-semibold">Sumukh जोशी</h2>
                  <p className="text-md">Passionate developer from India.</p>
                  <p className="text-muted-foreground text-xs flex items-center gap-2">
                    <LocateFixedIcon className="mt-0.5" size={12} />
                    Bengaluru, Karnataka
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-extrabold underline">Projects</CardTitle>
            </CardHeader>
            <CardContent>
              {Projects.map((project, index) => (
                <div key={index} className="p-4 border-b border-gray-700">
                  <h3 className="font-semibold mb-2">{project.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{project.description}</p>
                  <Link href={project.href} className="text-blue-400 hover:underline text-sm">
                    {project.href}
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block md:col-span-3 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>GitHub Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>Total Repositories: 30</p>
                <p>Stars Earned: 150</p>
                <p>Contributions Last Year: 500+</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trending Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {['React', 'Next.js', 'Blockchain'].map((skill, index) => (
                  <li key={index} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
