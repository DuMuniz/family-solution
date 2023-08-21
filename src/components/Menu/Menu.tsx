
const menuList = [
  { name: 'Atividade' },
  { name: 'Calendário' },
  { name: 'Orçamento' },
  { name: 'Cronograma' },
  { name: 'Listas' },
  { name: 'Refeições' },
  { name: 'Caixa de receitas' },
  { name: 'Mapa' },
  { name: 'Mensagens' },
  { name: 'Galeria' },
  { name: 'Contatos' },
]

function getIcon(name: string){
  //Recebe o nome do menu e retorna um icon de acordo com esse nome
}

export function Menu() {
  return (
    <section className="w-1/6 h-screen bg-slate-500 flex flex-col gap-2">
      {menuList.map((menu, index) => (
        <span key={index} className="px-2 text-white font-semibold cursor-pointer border border-solid h-[8vh]">{menu.name}</span>
      ))}
    </section>
  )
}