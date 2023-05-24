import { useEffect, useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import { getLearning } from '../api/learning';
import { Seniority} from '../types/Types';
import SeniorityLevel from '../components/SeniorityLevel/SeniorityLevel';
import Navbar from '../components/Navbar';

export default function SeniorityView() {
    const [data, setData] = useState<Seniority[]>([]);

    useEffect(() => {
        getLearning().then((data: Seniority[]) => setData(data));
    }, []);

    return (

        <>
      <Navbar />
        
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold">Learning</h1>
            <div className="flex flex-col items-center justify-center">
                {data.map((item) => <SeniorityLevel key={item.name} seniorityLevel={item} />)}
            </div>
        </div>

        </>
    );

}