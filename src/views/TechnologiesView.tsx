import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar';

export default function Home() {
    const [count, setCount] = useState<number>(0)

    return (
    <>
      <Navbar />
    <div>
        Technologies
    </div>
    </>
    );
}
