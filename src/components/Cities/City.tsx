import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

interface CitieProps {
  city: string;
  srcCitie: string;
  altCitie?: string;
  flag: string;
  srcFlag: string;
  altFlag?: string;
}

export function City({
  srcCitie,
  altCitie,
  srcFlag,
  altFlag,
  city,
  flag,
}: CitieProps) {
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image src={`/cities/${srcCitie}`} h='170px' w='100%' alt={altCitie} />
      <Flex
        p='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.300'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>
            {city}
          </Heading>
          <Text mt='3' fontSize='md' color='gray.500' fontWeight='500'>
            {flag}
          </Text>
        </Flex>
        <Image
          src={`/cities/${srcFlag}`}
          w='30px'
          h='30px'
          borderRadius='50%'
          objectFit='cover'
          alt={altFlag}
        />
      </Flex>
    </Box>
  );
}
