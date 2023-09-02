'use client'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import lists from '../../data/lists.json'
import {
  Card,
  Container,
  DetailsList,
  DetailsSection,
  InputList,
  InputRadio,
  SideSection,
  Title,
  TitleDetails
} from '@/components'

export default function Lists() {
  return (
    <Container>
      <SideSection>
        <Title
          label='Listas'
          value='3 Listas'
        />
        <Card
          Icon={<AiOutlineShoppingCart />}
          title='Compras'
          subtitle='Lista padrão'
        />
      </SideSection>

      <DetailsSection >
        <TitleDetails
          Icon={<AiOutlineShoppingCart />}
          title='Compras'
        />
        <DetailsList>
          <InputList placeholder='Novo Item' />
          {lists[0].compras?.map(({ label, value }) => (
            <InputRadio
              key={value}
              label={label}
              value={value}
            />
          ))}
        </DetailsList>
      </DetailsSection>
    </Container>
  )
}