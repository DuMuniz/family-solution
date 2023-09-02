'use client'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import lists from '../../data/lists.json'

export default function Lists() {
  return (
    // Componente Container
    <div className='flex gap-8 w-[84vw]'>

      {/* Componente side section */}
      <div className='w-[32vw] p-6'>
        {/* Title */}
        <div className='mb-2'>
          <h2 className='text-4xl font-semibold'>Listas</h2>
          <span className='text-sm'>3 Listas</span>
        </div>
        {/* Componente Card*/}
        <div className='border border-blue-500 rounded-lg bg-blue-500 p-2 flex items-center gap-4'>
          <AiOutlineShoppingCart style={{ fontSize: '28px', color: 'white' }} />
          <div className='flex flex-col items-start justify-center'>
            <h3 className='text-white font-semibold'>Compras</h3>
            <span className='text-white text-sm'>Lista padrão</span>
          </div>
        </div>
      </div>


      {/* Details Section */}
      <div className='w-[52vw] border-s-[1px] border-gray-400 h-full '>

        {/* Title Details*/}
        <div className='h-36 bg-blue-500 w-full flex items-end pb-4 gap-4 px-4'>
          <AiOutlineShoppingCart style={{ fontSize: '28px', color: 'white' }} />
          <h2 className='text-white'>Compras</h2>
        </div>

        {/* Details List */}
        <div className='flex flex-col gap-4'>
          {/* Input */}
          <input type='text' placeholder='Novo item' className='w-[95%] rounded px-2 mt-4 h-8 mx-4 border border-indigo-50 outline-none' />
          {lists[0].compras?.map(({ label, value }) => (

            // InputRadio
            <div key={value} className='flex gap-4 ml-4 w-[95%]'>
              <input type='radio' id={value} />
              <label htmlFor={value}>{label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}