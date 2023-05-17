
import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('pruebas en AddCategory', () => { 

  test('debe cambiar el valor de la caja de texto', () => { 
    
    render( <AddCategory onNewCategory={ () => {} }/> )
    const input = screen.getByRole('textbox');
    //disparar los eventos
    fireEvent.input( input, { target: { value: 'the chosen' } } );
    expect( input.value ).toBe('the chosen')
    // screen.debug()
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => { 
    
    const inputValue = 'the chosen'
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory={ onNewCategory }/> )
 
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input( input, { target: { value: inputValue } } );
    fireEvent.submit( form );

    // screen.debug()
    expect( input.value ).toBe('');

    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);  //se llame 1 sola vez
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue)

  })

  test('no llamar el on newCategory si el input esta vacio', () => { 
  
    const onNewCategory = jest.fn();
    render( <AddCategory onNewCategory={ onNewCategory }/> )
  
    const form = screen.getByRole('form')
    fireEvent.submit( form );
  
    expect( onNewCategory ).not.toHaveBeenCalled();

  })


}) 