'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home(){
  const { push } = useRouter();

  useEffect(() => {
     push('/learn/jokes/1');
  }, []);
  return <p></p>;
};
