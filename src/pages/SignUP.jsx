import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFunction } from "../Redux/AuthContext/action";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Spinner,
  Select,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { Navbar } from "../components/Navbar/Navbar";
import Loading from "../components/TravelliaLoader/Loading";

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userType, setUserType] = useState("");

  const { userData, successfullyCreated, createAccountError } = useSelector(
    (state) => {
      return {
        userData: state.AuthReducer.userData,
        successfullyCreated: state.AuthReducer.successfullyCreated,
        createAccountError: state.AuthReducer.createAccountError,
      };
    },
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (successfullyCreated) {
      toast({
        title: `Account Created Successfull`,
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [successfullyCreated]);

  useEffect(() => {
    if (createAccountError) {
      toast({
        title: `Something Went Wrong !!!`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  }, [createAccountError]);

  function SendSignInRequest() {
    dispatch(
      SignUpFunction({
        email: email,
        password: password,
        userName: userName,
        userType: userType,
      })
    );
    setEmail("");
    setPassword("");
    setUserName("");
    setUserType("");
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Flex
          justify="center"
          align="center"
          direction="column"
          textAlign="left"
        >
          <Navbar type="list" />
          <Heading mt="10" as="h2" size="lg">
            Create an account
          </Heading>

          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
            isRequired
          >
            {/* Name */}
            <FormLabel htmlFor="userName">Enter Your Name</FormLabel>
            <Input
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter User Name"
              value={userName}
              w={"100%"}
              h={"40px"}
              border={`2px solid`}
              type={"text"}
              mb={"8px"}
              id="userName"
            />
            {/* email */}
            <FormLabel htmlFor="email">Enter Email</FormLabel>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email address"
              w={"100%"}
              h={"40px"}
              value={email}
              border={`2px solid`}
              type={"email"}
              id="email"
            />
            <FormHelperText mb={"8px"}>
              We'll never share your email.
            </FormHelperText>
            {/* UserType */}
            <FormLabel htmlFor="userType">User Type</FormLabel>
            <Select
              onChange={(e) => setUserType(e.target.value)}
              width={"100%"}
              h={"40px"}
              border={`2px solid`}
              mb={"8px"}
              value={userType}
              id="userType"
            >
              <option value="">Choose User Type</option>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </Select>
            {/* password */}
            <FormLabel htmlFor="password">Enter Password</FormLabel>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              w={"100%"}
              h={"40px"}
              value={password}
              border={`2px solid`}
              type={"password"}
              mb={"8px"}
              id="password"
            />
            <Checkbox size={"lg"} defaultChecked>
              Keep me signed in
            </Checkbox>
            <br />
            <FormHelperText fontSize={"15px"} mb={"8px"}>
              By signing in, I agree to the TravelliaHOTELS{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                Terms and Conditions, Privacy Statement
              </span>{" "}
              and{" "}
              <span style={{ color: "blue", cursor: "pointer" }}>
                TravelliaHOTELS Rewards
              </span>
            </FormHelperText>

            <Button
              onClick={SendSignInRequest}
              w={"100%"}
              h={"40px"}
              mt={4}
              colorScheme="blue"
              type="submit"
              isDisabled={
                email === "" ||
                password === "" ||
                userName === "" ||
                userType === ""
              }
            >
              Create Account
            </Button>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              <Link to={""} style={{ color: "blue" }}>
                Forgot password?
              </Link>
            </Text>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              Already have an account?
              <Link to={"/login"} style={{ color: "blue" }}>
                Sign In
              </Link>
            </Text>

            <Text mt={"25px"} display="flex" justifyContent={"center"}>
              or continue with
            </Text>
            <Box mt={"10px"} display="flex" justifyContent={"center"}>
              <AiFillApple
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <FcGoogle
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
              />
              <AiFillFacebook
                size={"25px"}
                style={{ marginRight: "10px", cursor: "pointer" }}
                color={"blue"}
              />
            </Box>
          </FormControl>
        </Flex>
      )}
    </>
  );
}
