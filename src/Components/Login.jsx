import React from "react";
import { VStack, Text, Box, Input, Button } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function Login() {
  const initialValues = {
    username: "",
    password: "",
  };
  const onSubmit = (values, opt) => {
    console.log(values);
    opt.resetFrom()
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
  return (
    <VStack
      width={"full"}
      height={"100vh"}
      bgColor={"#bfdad6"}
      justifyContent={"center"}
    >
      <VStack width={["90%", "90%", "70%", "60%"]} bgColor={"white"}>
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
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <Box width={["95%", "85%", "75%", "45%"]}>
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
                <ErrorMessage name="username" component={"div"} className="error"/>
              </Box>
              <Box width={["95%", "85%", "75%", "45%"]}>
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
                <ErrorMessage name="password" component={"div"} className="error"/>
              </Box>
              <Box
                width={["95%", "85%", "75%", "45%"]}
                display={"flex"}
                justifyContent={"center"}
              >
                <Button
                  width={["50%", "30%"]}
                  bgColor={"#016b5e"}
                  color={"white"}
                  py={"1px"}
                  _hover={{ backgroundColor: "#016b5e" }}
                  letterSpacing={"1px"}
                  fontWeight={"normal"}
                  type="submit"
                >
                  LOGIN
                </Button>
              </Box>
            </Form>
          </Formik>
          <Text width={"100%"} textAlign={"center"} mt={"10px"}>
            Don't have Account?{" "}
            <Link
              to={"/signup"}
              style={{ fontWeight: "bold", textDecoration: "underline" }}
            >
              Signup
            </Link>
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
}

export default Login;
