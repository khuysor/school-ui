import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface Prop {
  isOpen: boolean;
  isClose: () => void;
}
interface StudentData {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  address: string;
}

const schema = yup.object({
  firstName: yup
    .string()
    .min(3, { message: "First name must be at least 3 characters long." }),
  lastName: yup
    .string()
    .min(3, { message: "Last name must be at least 3 characters long." }),
  age: yup.number().min(6, { message: "Age must be greater than 18." }),
  email: yup
    .string()
    .email()
    .min(3, { message: "Email must be at least 3 characters long." }),
  address: yup
    .string()
    .min(3, { message: "Address must be at least 3 characters long." }),
});

const StudentModal = ({ isClose, isOpen }: Prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: Object) => {
    console.log(data);
  };
  return (
    <Modal isOpen={isOpen} onClose={isClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add new Student</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input placeholder="First Name" {...register("firstName")} />
              {
                errors.firstName&&(
                  <Alert  status='error'>
                    <AlertIcon/>
                   {errors.firstName.root?.message}
                  </Alert>
                )
              }
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input placeholder="Last Name" {...register("lastName")} />
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <Input {...register("age")} type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="Email" {...register("email")} />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="number"
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
            <Button
              colorScheme="red"
              mr={3}
              variant={"ghost"}
              onClick={isClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
