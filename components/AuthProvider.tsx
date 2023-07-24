
"use client";

import { useState, useEffect } from 'react'
import {getProviders, signIn} from 'next-auth/react'
import Button from './Button';

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
  signinUrlParams?: Record<string, string> | null ;
}

type Providers = Record<string, Provider>;


const AuthProvider = () => {

  const [providers, setProviders] = useState<Providers | null>(null);
  


  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      //console.log(res);
      setProviders(res);

    }
    fetchProviders();
  }, [])

  if (providers){
    return (
      <div>
        {
          Object.values(providers).map((provider:Provider, i) => (
            <Button
            key={i} 
            title='Sign in with Google'
            handleClick={() => signIn(provider?.id)}
            />
          )
        )
        }
      </div>
    )
  }
  
  return (
    <div></div>
  )
}

export default AuthProvider