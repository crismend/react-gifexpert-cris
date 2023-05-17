import { renderHook, waitFor} from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('pruebas en useFetchGifs', () => {
  test('deberia regresar el estado inicial', () => {

    const { result } = renderHook(() => useFetchGifs('the chosen'))

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

    //  console.log(result)
    // useFetchGifs();
  })

  test('debe retornar un arreglo de imagenes y isLoading en false', async() => {

    const { result } = renderHook(() => useFetchGifs('the chosen'))

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
      );

      const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

    //  console.log(result)
    // useFetchGifs();
  })
})