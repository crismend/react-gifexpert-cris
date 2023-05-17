import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";


describe('pruebas en <gifGridItem/>', () => {

  
  const title = 'the chosen'
  const url = 'http://one-push.com/the-chosen.jpg'

  test('debe de hacer match con el snapshot', () => { 

    
  const container =  render(<GifGridItem title= { title }url= { url } />)
      // console.log(container)

      expect(container).toMatchSnapshot()
  })


  test('debe mostrar la imagen con el url y el alt indicado ', () => { 
  
    render(<GifGridItem title= { title }url= { url } />)
    // screen.debug();
    // console.log(screen.getByRole('img').alt)
    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)

    const {src, alt} = screen.getByRole('img');
    expect( src ).toBe( url )
    expect( alt ).toBe( title )
    
  })

  test('debe de mostrar el titulo en el componente', () => {
  
    render(<GifGridItem title= { title }url= { url } />)

    expect(screen.getByText).toBeTruthy();

  })

})