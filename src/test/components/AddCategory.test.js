import { shallow } from 'enzyme'
import React from 'react'
import { AddCategory } from '../../components/AddCategory'

describe('pruebas de AddCategory', () => {
    const setCategories = ()=>{};
    const wrapper = shallow(<AddCategory setCategories={setCategories}/>)

    test('que el componete se muestre de forma correcta ', () => {
        
       
        
        expect(wrapper).toMatchSnapshot();
    })

    ///simular interacciones de usuarios.
    test(' ', () => {
        
    })
    
    
    
})

