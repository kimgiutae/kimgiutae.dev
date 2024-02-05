import type { FC } from 'react'
import getFinalClassName from '@/utils/getFinalClassName'

const List: FC<ListProps> = ({ as: Wrapper = 'ul', children, className, itemClassName }) => {
  const Item = Wrapper === 'div' ? 'div' : 'li'
  const items = Array.isArray(children) ? children : [children]
  const wrapperFinalClassName = getFinalClassName(
    'flex list-none flex-wrap items-start justify-start',
    className
  )
  const itemFinalClassName = getFinalClassName('block', itemClassName)
  return (
    <Wrapper className={wrapperFinalClassName}>
      {items.map((item, index) => (
        <Item key={item.key ?? index} className={itemFinalClassName}>
          {item}
        </Item>
      ))}
    </Wrapper>
  )
}

type ListProps = {
  as?: 'ol' | 'ul' | 'div'
  children: JSX.Element | JSX.Element[]
  className?: string
  itemClassName?: string
}

export default List
export type { ListProps }
