import { GiHamburgerMenu } from 'react-icons/gi'

export function TopBar() {
  return (
    <div className="w-full h-20 bg-blue-500 flex">
      <div className='flex items-center justify-start gap-4'>
        <div className='ml-8 bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
          <GiHamburgerMenu style={{width: '24px', height: '24px', color: 'white'}} />
        </div>
        <h2 className='text-white font-semibold'>Family Solution</h2>
      </div>
      <h3 className='m-auto text-white font-semibold text-xl'>Familia Chiquetto Muniz</h3>
    </div>
  )
}