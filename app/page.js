"use client"

import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from 'react';
import { LocateFixedIcon } from 'lucide-react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function PortfolioDark() {

  const Projects = [
    {
      name: 'ImageCraft',
      description: 'Uses Cloudinary SDK to allow users to enhance images and extract content from them.',
      href: 'https://image-craft-zeta.vercel.app',
      technologies: ['NextJs', 'Cloudinary SDK', 'Prisma', 'Clerk', 'ShadCn', 'Daisy Ui'],
      image: '/image-craft.png'
    },
    {
      name: 'Spectrum',
      description: 'Enables Spotify Premium users to host rooms and share playlists.',
      href: 'https://spectrum-bice.vercel.app',
      technologies: ['NextJs', 'Spotify API', 'Prisma', 'AuthJs v5'],
      image: '/spectrum.png'
    },
    {
      name: 'Smile Token Crypto X Ai',
      description: 'A Solidity DApp that rewards ETH based on smile ratings.',
      href: 'https://smile-cryto-x-ai.vercel.app',
      technologies: ['Solidity', 'NextJs', 'Gemini LLM', 'Metamask', 'Cloudinary'],
      image: '/ether-joy.png'
    }
  ];

  const SocialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/sumukhj1219',
      icon: <FaGithub size={24} />
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sumukh-joshi-262515292/',
      icon: <FaLinkedin size={24} />
    },
    {
      name: 'Twitter',
      href: 'https://x.com/SumukhJ224454',
      icon: <FaTwitter size={24} />
    }
  ];

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 flex justify-center items-center">
      <div className="container mx-auto max-w-3xl grid grid-cols-1 gap-6 p-4">
        {/* Main Content */}
        <div className="space-y-6">
          <Card>
            <CardHeader />
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Profile Image: Rounded full circle */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                  <Image
                    src="/sumukh.jpeg"
                    alt="Sumukh"
                    width={160}
                    height={160}
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>

                {/* Profile Content */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h2 className="text-2xl font-semibold">Sumukh जोशी</h2>
                  <div className="border-l-4 border-yellow-400 pl-4 mt-2 mb-4">
                    <p className="text-md text-gray-400">
                      Passionate Full-stack Developer from India. 
                      <br />
                      | 2X Hackathon Winner | Web3 enthusiast  
                    </p>
                  </div>

                  <p className="text-muted-foreground text-xs flex items-center gap-2 justify-center md:justify-start mb-4">
                    <LocateFixedIcon className="mt-0.5" size={12} />
                    Bengaluru, Karnataka
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-6 justify-center md:justify-start">
                    {SocialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition-all duration-300"
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
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
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Image with 50% width */}
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="rounded-lg object-cover w-full md:w-1/2"
                    />
                    {/* Content with 50% width */}
                    <div className="w-full md:w-1/2">
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
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
