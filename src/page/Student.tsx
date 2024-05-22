import {
  Box,
  Button,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import BoxDetail from "../components/BoxDetail";
import { IoIosSearch } from "react-icons/io";
import StudentModal from "../components/StudentModal";
import axios from "axios";
import { useEffect, useState } from "react";
interface Student {
  firstName: string;
  lastName: string;
  age: 0;
  email: string;
  phone: string;
  address: string;
  createTime: Date;
  updateTime: Date;
}
const Student = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState<Student[]>([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  };
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
            <Tr>
              <Th>Id</Th>
              <Th>First Name</Th>
              <Th>Last name</Th>
              <Th>Age</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Register At</Th>
              <Th>Update At</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((dt) => (
              <Tr>
                <Td>Id</Td>
                <Td>First Name</Td>
                <Td>Last name</Td>
                <Td>Age</Td>
                <Td>Email</Td>
                <Td>Phone</Td>
                <Td>Register At</Td>
                <Td>Update At</Td>
                <Td>Action</Td>
              </Tr>
            ))}
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
