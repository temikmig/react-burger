import React, { FC } from 'react';
import css from './burger-constructor-item.module.css';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'; 
import { useDispatch } from "react-redux";
import { delIngredient } from "../../../services/actions/burger-constructor";

import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { AppDispatch, TBurgerConstructorItemProps, TIngredient } from '../../../utils/types';

const BurgerConstructorItem:FC<TBurgerConstructorItemProps> = ( {currentIngredient, index, moveIngredient} ) => {
    const dispatch:AppDispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const [{ handlerId }, drop] = useDrop({
        accept: 'ingredientListItem',
        collect(monitor:any) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item:TIngredient, monitor:any) {
          if (!ref.current) return
          
          const toIndex:any = item.index
          const fromIndex = index

          if (toIndex === fromIndex) return

          const hoverBoundingRect = ref.current?.getBoundingClientRect()
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
          const clientOffset = monitor.getClientOffset();
          const hoverClientY = clientOffset.y - hoverBoundingRect.top;
          if (toIndex < fromIndex && hoverClientY < hoverMiddleY) return
          if (toIndex > fromIndex && hoverClientY > hoverMiddleY) return
          
          moveIngredient(toIndex, fromIndex)
          item.index = fromIndex
        },
      })
      const [, drag] = useDrag({
        type: 'ingredientListItem',
        item: {index},
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      })

      drag(drop(ref))

    return (
        <div ref={ref} data-handler-id={handlerId} className={css.burgerIngredientsListItem}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={currentIngredient.name}
                price={currentIngredient.price}
                thumbnail={currentIngredient.image}
                handleClose={() => dispatch(delIngredient({uid: currentIngredient.uid}))}
            />
        </div>
    )
}

export default BurgerConstructorItem;
