"use client"

import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { User } from '@/lib/utils';

interface MeHeaderProps {
  userId: string
}

const MeHeader = ({ userId }: MeHeaderProps) => {
  const router = useRouter();

  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}`);
        const data = await response.json();
        if (response.status === 200) {
          setUser(data);
        } else {
          setUser(null);
          router.push('/');
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUser();
  }, [router, userId]);

  const handleLogout = () => {
    Cookies.remove('userId');
    router.push('/');
  }


  return (
    <div className='flex flex-row justify-between items-center bg-primary px-4'>
      <Image src="/images/mid_falconi_logo.jpg" alt="logo" width={64} height={64} />
      <div className='flex flex-row items-center text-white gap-4'>
        {/* Rounded avatar with user initials */}
        <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center -mr-2'>
          <p className='text-black'>{user?.firstName.charAt(0)}</p>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">{user?.firstName} {user?.lastName}</label>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><button onClick={handleLogout} className="text-black">Sair</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MeHeader