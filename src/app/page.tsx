import CounterView from '@/Counter'
import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-5 p-24">
      <div className='text-lg font-bold'>Counter App-</div>
      <CounterView/>
    </main>
  )
}
