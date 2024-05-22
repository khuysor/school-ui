import {
  HStack,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Table,
  TableCaption,
  Thead,
  Th,
  Tbody,
  Td,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import BoxDetail from "../components/BoxDetail";
import { IoIosSearch } from "react-icons/io";
import StudentModal from "../components/StudentModal";

const Student = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <BoxDetail />
      <Box mt={{ md: 3, base: 1 }} mb={{ md: 5, base: 1 }} />
      <HStack justifyContent="space-between">
        <Box flex={1}>
          <Button bg={"blue.400"} color={"white"} width={200} onClick={onOpen}>
            New Student
          </Button>
        </Box>
        <InputGroup size="md" flex={1} _hover={{ cursor: "pointer" }}>
          <InputRightElement>
            <IoIosSearch />
          </InputRightElement>
          <Input variant="outline" placeholder="Outline" />
        </InputGroup>
      </HStack>
      <Box mt={{ md: 3, base: 1 }} mb={{ md: 5, base: 1 }} />
      <Box borderWidth="1px" borderColor={"black.200"} borderRadius={5}>
        <Table colorScheme="blackAlpha">
          <TableCaption>Student Register List</TableCaption>

          <Thead>
            <Th>Id</Th>
            <Th>First Name</Th>
            <Th>Last name</Th>
          </Thead>
          <Tbody>
            <Td>1234</Td>
            <Td>Huysor</Td>
            <Td>Kheang</Td>
          </Tbody>
        </Table>
      </Box>
      <>
        <StudentModal isOpen={isOpen} isClose={onClose} />
      </>
    </>
  );
};

export default Student;
