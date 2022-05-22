import { Flex } from '@chakra-ui/react';
import { Header, ContinentBanner, Content, Cities } from '../../components';

export default function Continent() {
  return (
    <Flex direction='column'>
      <Header />
      <ContinentBanner />

      <Flex direction='column' maxW='1160px' mx='auto' mb='10' px='1rem'>
        <Content />
        <Cities />
      </Flex>
    </Flex>
  );
}
