"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import Cookies from 'js-cookie';

const DashboardPage = () => {
  // Verify if user is logged in, if true redirect to /dashboard/:id, if false redirect to /login
  const router = useRouter();
  const userId = Cookies.get('userId');
  if (!userId) {
    router.push('/login');
  } else {
    router.push(`/dashboard/${userId}`);
  }
  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage