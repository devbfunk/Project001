import { Separator } from '@/components/ui/separator'
import React from 'react'
import { SlSocialInstagram } from 'react-icons/sl';
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialLinkedin } from "react-icons/ti";



const Footer = () => {
    return (
        <div className="container mx-auto">
            <Separator className="opacity-50" />
            <div className='flex w-full my-8 justify-between p-4'>

                {/* logo */}
                <div className="text-lg font-extrabold">
                    RUNCMDCREATE
                </div>
                {/* links */}
                <div className="flex gap-8 justify-between w-[450px]">
                    <div className="">
                        <ul className='flex flex-col gap-4'>
                            <p className='font-bold tracking-widest'>Menu</p>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex flex-col gap-4'>
                            <p className='font-bold tracking-widest'>Services</p>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                    <div className="">
                        <ul className='flex flex-col gap-4'>
                            <p className='font-bold tracking-widest'>Company</p>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Separator className="opacity-50" />
            <div className="flex justify-between opacity-50 p-4 my-8">
                <p className=''>&copy; Copyright RunCMDCreate All Rights Reserved</p>
                <div className='flex gap-10'>
                    <TiSocialFacebookCircular size={40} />
                    <TiSocialLinkedin size={40} />
                    <TiSocialGithubCircular size={40} />
                    <SlSocialInstagram size={40} />
                </div>
            </div>
        </div>
    )
}

export default Footer