
import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

//mook completo del path
jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en GifGrid', () => {

  const category = 'the chosen'

  test('debe de mostrar el loadin inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
    // screen.debug()
  })

  test('debe mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

    const gifs = [{
      id: 'abc',
      title: 'saitama',
      url: 'https://localhost/saitama.jpg'
    },
    {
      id: 123,
      title: 'Gocu',
      url: 'https://localhost/gocu.jpg'
    }
  ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render(<GifGrid category={category} />)

    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2)


  })
})