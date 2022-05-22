import { Heading, Grid } from '@chakra-ui/react';
import { City } from './City';

export function Cities() {
  return (
    <>
      <Heading
        fontWeight='500'
        fontSize={['2xl', '4xl']}
        mb='10'
        color='gray.700'
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        alignItems='center'
        justifyContent='center'
        px={['30px', '0']}
      >
        <City
          city='Londres'
          srcCitie='/londres.jpg'
          flag='Reino Unido'
          srcFlag='/reinounido.png'
        />
        <City
          city='Rio de Janeiro'
          srcCitie='/rio.jpg'
          flag='Brasil'
          srcFlag='/brasil.jpg'
        />
        <City
          city='Dimitri'
          srcCitie='/dimitri.jpg'
          flag='Ucrânia'
          srcFlag='/ucraniaflag.png'
        />
        <City
          city='Kenya Safari'
          srcCitie='/kenyasafari.jpg'
          flag='África'
          srcFlag='/africaflag.png'
        />
        <City
          city='Lauterbrunner'
          srcCitie='/lauterbrunner.jpg'
          flag='Europa'
          srcFlag='/europaflag.png'
        />
        <City
          city='Sidney'
          srcCitie='/sidney.jpg'
          flag='Austrália'
          srcFlag='/australiaflag.png'
        />
      </Grid>
    </>
  );
}
