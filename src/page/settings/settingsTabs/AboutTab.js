import React, {useState} from 'react';

import { Flex, Text, Image, Button, IconButton} from '@chakra-ui/react'

const AboutTab = () =>{

  return (
    <Flex  width="1000px" height="1000px" >
        <Text color="white" fontSize="18px" margin="20px">Platforma este orientată spre persoanele care din anumite
            motive nu au primit un serviciu care să se încadreze în termenii prestabiliți și discutați de la început,
            de la etapa de planificare. Ne încadrarea în timp, rezultatul final diferit de cel planificat, sau alte
            motive pot schimba toate planurile clienților și respectiv atitudinea lor față de prestatorul de servicii
            cu care ei conlucrează.</Text>
    </Flex>
  );
}


export default AboutTab;