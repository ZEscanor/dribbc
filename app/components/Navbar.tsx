import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { NavLinks } from '@/constants';
import { getCurrentUser } from '@/lib/session';
import AuthProvider from './AuthProvider';
import {signOut} from 'next-auth/react';
import ProfileMenu from './ProfileMenu';


const Navbar = async () => {
  const session = await getCurrentUser();
  console.log(session)
  return (
    <nav  className='
    flexBetween
    navbar
    '>
        <div className='
        flex1 flexStart gap-10
        '>
            <Link href='/'>
            <Image src='/logo.svg' width={115} height={43} alt='Flex' />
            <h1>Categories</h1>
            <h1>Posts</h1>
            </Link>
            <ul  className='
            xl:flex hidden
            text-small
            gap-7
            '>
            {NavLinks.map((link,) => (
              <Link href={link.href} key={link.key}>
                 {link.text}
              </Link>
            ))}
            </ul>
        </div>

        <div className='
        flexCenter gap-4'>

         {session?.user ? (
          <>
          <ProfileMenu 
          session={session}
          
           />
           <Link href='/create-project'>
            Share Work
            </Link>
            
          </>
         ) : <AuthProvider />}
        </div>

    </nav>
  )
}

export default Navbar