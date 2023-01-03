
import React from "react";
import { Collapse } from "@chakra-ui/react";
import { Button, Flex } from "@chakra-ui/react";

function MyCollapse(props) {
    const [show, setShow] = React.useState(false);
  
    const handleToggle = (e) => setShow(!show);
  
    return (
      <Flex flexDirection="column">
        <Collapse startingHeight={70} in={show}>
          {props.children}
        </Collapse>
        <Button size="sm" width={"110px"} onClick={handleToggle} mt="1rem">
          Show {show ? "Less" : "More"}
        </Button>
      </Flex>
    );
  }

  export default MyCollapse;