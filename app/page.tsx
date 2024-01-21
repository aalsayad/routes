import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <div className='flex gap-3'>
        <Link href='/auth/login'>Go to Login</Link>
        <Link href='/auth/register'>Go to Register</Link>
      </div>
    </div>
  );
}
