import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en GifGridItem', () => {
    const title="el titulo"
    const url="http//:local"
    const wrapper = shallow(<GifGridItem title={title} url={url}/>);

    test('mostrar el componente correto ', () => {

        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe tener un parrafo con el title', () => {
        
        const p =wrapper.find('p')
        expect(p.text().trim()).toBe(title)
    });

    test('la imagen debe tener url y alt', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('debe tener animate__backInDown ', () => {

        const div = wrapper.find('div')

        expect(div.prop('className').includes('animate__backInDown')).toBe(true)
        
    })
    
    
    
    
})
