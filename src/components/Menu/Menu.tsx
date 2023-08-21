import { BiSolidHome, BiSolidCalendar, BiSolidMap, BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsFillPiggyBankFill } from 'react-icons/bs';
import { FaListAlt } from 'react-icons/fa';
import { PiForkKnifeFill } from 'react-icons/pi'
import { GiCookingPot } from 'react-icons/gi'
import { MdPhotoLibrary, MdPermContactCalendar } from 'react-icons/md'
import { AiFillSchedule } from 'react-icons/ai'
import Link from "next/link";


const menuList = [
  { name: 'Atividade', path: '/home' },
  { name: 'Calendário', path: '/calendar' },
  { name: 'Orçamento', path: '/budget' },
  { name: 'Cronograma', path: '/timeline' },
  { name: 'Listas', path: '/lists' },
  { name: 'Refeições', path: '/meals' },
  { name: 'Caixa de receitas', path: '/recipe-box' },
  { name: 'Mapa', path: '/map' },
  { name: 'Mensagens', path: '/messages' },
  { name: 'Galeria', path: '/gallery' },
  { name: 'Contatos', path: '/contacts' },
]

function getIcon(name: string) {
  const icons = {
    'Atividade': <BiSolidHome style={{ color: 'white' }} />,
    'Calendário': <BiSolidCalendar style={{ color: 'white' }} />,
    'Orçamento': <BsFillPiggyBankFill style={{ color: 'white' }} />,
    'Cronograma': <AiFillSchedule style={{ color: 'white' }} />,
    'Listas': <FaListAlt style={{ color: 'white' }} />,
    'Refeições': <PiForkKnifeFill style={{ color: 'white' }} />,
    'Caixa de receitas': <GiCookingPot style={{ color: 'white' }} />,
    'Mapa': <BiSolidMap style={{ color: 'white' }} />,
    'Mensagens': <BiSolidMessageRoundedDetail style={{ color: 'white' }} />,
    'Galeria': <MdPhotoLibrary style={{ color: 'white' }} />,
    'Contatos': <MdPermContactCalendar style={{ color: 'white' }} />,
  }

  return icons[name as keyof typeof icons];
}

export function Menu() {
  return (
    <section className="w-1/6 h-screen bg-slate-500 flex flex-col gap-4 overflow-auto">
      {menuList.map((menu, index) => (
        <Link key={index} href={menu.path} className="flex items-center gap-2 px-4 mt-2">
          {getIcon(menu.name)}
          <span className="text-white font-semibold cursor-pointer">{menu.name}</span>
        </Link>
      ))}
    </section>
  )
}