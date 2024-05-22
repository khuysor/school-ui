import { HStack, useColorModeValue, Box } from "@chakra-ui/react";

import React from "react";

const BoxDetail = () => {
  return (
    <HStack>
      <Box
        borderRadius={5}
        height={{ md: 200, base: 140 }}
        width={400}
        bg={useColorModeValue("blue", "#3700B3")}
      >
        Total
      </Box>
      <Box
        borderRadius={5}
        height={{ md: 200, base: 140 }}
        width={400}
        bg={useColorModeValue("green.300", "green.700")}
      >
        Paid
      </Box>
      <Box
        borderRadius={5}
        height={{ md: 200, base: 140 }}
        width={400}
        bg={useColorModeValue("red", "red.700")}
      >
        UnPaid
      </Box>
    </HStack>
  );
};

export default BoxDetail;
