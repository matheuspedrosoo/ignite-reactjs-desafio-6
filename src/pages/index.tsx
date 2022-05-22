import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import {
  Header,
  Banner,
  Caracteristicas,
  Separator,
  Slider,
} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <Caracteristicas />
      <Separator />

      <Heading
        textAlign='center'
        fontWeight='500'
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </>
  );
};

export default Home;
