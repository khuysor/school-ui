import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
interface Prop {
  isOpen: boolean;
  isClose: () => void;
}
const StudentModal = ({ isClose, isOpen }: Prop) => {
  return (
    <Modal isOpen={isOpen} onClose={isClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Student</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="+855 (___) __-___-___"
              color={"gray.500"}
              _placeholder={{
                color: "gray.500",
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={isClose}>
            Cancel
          </Button>
          <Button variant="ghost">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
