import React from "react";

// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";

// Custom components
// import { HorizonLogo } from "components/icons/Icons";
// import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <Text fontSize={"22px"} textAlign="center">
        <Text fontWeight={"bold"} fontSize="25px">Kidali</Text> <Text>admin panel</Text>
      </Text>
    </Flex>
  );
}

export default SidebarBrand;
