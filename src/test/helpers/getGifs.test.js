import { getGifs } from '../../helpers/getGifs.js'
import React from 'react'

describe('purebas en getGifs', () => {
    test('debe de traer 10 elementos ', async() => {
        const gifs = await getGifs('Dragon Ball');
        
        expect(gifs.length).toBe(10);
    });

    test('debe de traer 0 elementos si no envio categoria', async() => {
        const gifs = await getGifs('');

        console.log(gifs)
        
        expect(gifs.length).toBe(0);
    })
    
    
})

