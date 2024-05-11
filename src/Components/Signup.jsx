import React from "react";
import { VStack, Text, Box, Input, Button } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Signup() {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    confirmPass: "",
    password: "",
  };
  const onSubmit = (values,opt) => {
    console.log(values);
    opt.resetForm()
  };

  const validationSchema = Yup.object().shape({
    name:Yup.string() .matches(/^[A-Za-z\s]+$/, 'Name must contain only alphabets and spaces')
    .required('Name is required'),
    username: Yup.string().required("Username is required"),
    email: Yup.string().matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    ,"Enter a valid email").required("Email is required"),
    phone:Yup.string()
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number')
    .required('Phone number is required'),
    password: Yup.string().required("Password is required"),
    confirmPass:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  });
  return (
    <VStack
      width={"full"}
      minHeight={"100vh"}
      bgColor={"#bfdad6"}
      justifyContent={"center"}
      paddingY={"20px"}
    >
      <VStack width={["90%", "90%", "80%", "80%"]} bgColor={"white"}>
        <Box
          width={"100%"}
          bgColor={"#016b5e"}
          color={"white"}
          textAlign={"center"}
          py={"10px"}
        >
          <Text fontSize={"20px"} letterSpacing={"1px"}>
            Login
          </Text>
          <Text>Sign in to continue</Text>
        </Box>

        <Box width="100%" paddingY={"20px"} pt={"10px"}>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form
              style={{
                width: "100%",
                
              }}
            >
              <Box width={"100%"}
              
              marginX={"2%"}
              columnGap={"20px"}
              display={"grid"} gridTemplateColumns={["repeat(1,1fr)" ,"repeat(1,1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} paddingX={"20px"} rowGap={["20px"]} >
               <Box width={["95%", "85%", "80%", "90%"]}>
                <Field name="name">
                  {({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Enter name"
                        name="name"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="name"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box width={["95%", "85%", "80%", "90%"]}>
                <Field name="username">
                  {({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Enter username"
                        name="username"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="username"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box width={["95%", "85%", "80%", "90%"]}>
                <Field name="email">
                  {({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Enter email"
                        name="email"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="email"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box width={["95%", "85%", "80%", "90%"]}>
                <Field name="phone">
                  {({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Enter phone number"
                        name="phone"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="phone"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box width={["95%", "85%", "80%", "90%"]}>
                <Field name="password">
                  {({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="password"
                  component={"div"}
                  className="error"
                />
              </Box>
              <Box width={["95%", "85%", "80%", "90%"]} >
                <Field name="confirmPass">
                  {(props) => {
                   
                    const { field }=props
                    return (
                      <Input
                        {...field}
                        placeholder="Enter confirm password"
                        type="password"
                        name="confirmPass"
                        width={"100%"}
                        border={"none"}
                        borderBottom={"1px solid gray"}
                        borderRadius={"none"}
                        p={0}
                        _focus={{
                          border: "none",
                          outline: "0px solid transparent",
                          borderBottom: "2px solid #016b5e",
                        }}
                        focusBorderColor="transparent"
                      />
                    );
                  }}
                </Field>
                <ErrorMessage
                  name="confirmPass"
                  component={"div"}
                  className="error"
                />
              </Box>

            
              </Box>
                {/* button */}
                <Box
                width={["95%", "85%", "90%", "96%"]}
                display={"flex"}
                justifyContent={"end"}
                mt={5}
              >
                <Button
                  width={["50%", "40%","30%","20%"]}
                  bgColor={"#016b5e"}
                  type="submit"
                  color={"white"}
                  py={"1px"}
                  _hover={{ backgroundColor: "#016b5e" }}
                  letterSpacing={"1px"}
                  fontWeight={"normal"}
                >
                  SIGNUP
                </Button>
              </Box>
            </Form>
          </Formik>
          
        </Box>
      </VStack>
    </VStack>
  );
}

export default Signup;
