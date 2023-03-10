import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Loginfunction } from "../Redux/AuthContext/action";
import { InfinitySpin } from "react-loader-spinner";
import Loading from "../components/TravelliaLoader/Loading";

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
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { Navbar } from "../components/Navbar/Navbar";

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userObj, setUserObj] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userData, isAuth, isError } = useSelector((state) => {
    return {
      userData: state.AuthReducer.userData,
      isAuth: state.AuthReducer.isAuth,
      isError: state.AuthReducer.isError,
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    if (isAuth) {
      toast({
        title: `LogIn Successfull`,
        status: "success",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [isAuth]);

  useEffect(() => {
    axios
      .get("https://636bda08ad62451f9fbd8076.mockapi.io/apnidukaan")
      .then((response) => {
        setUserObj(response.data.items);
        console.log("login res", response.data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const SendSignInRequest = () => {
    let check;

    let checkEmail = userObj.filter((el) => {
      if (el.email === email) {
        console.log("email", email);
      }
      return el.email === email;
    });

    if (checkEmail.length > 0) {
      check = userObj.filter((el) => {
        return el.email === email && el.password === password;
      });
      //console.log(check[0]);

      if (check.length > 0) {
        dispatch(
          Loginfunction({
            ...check[0],
          })
        );
      } else if (check.length === 0) {
        toast({
          title: `Wrong Password !!!`,
          status: "error",
          duration: 1500,
          position: "top",
          isClosable: true,
        });
      }
    } else {
      toast({
        title: `User not registered !!!`,
        status: "error",
        duration: 1500,
        position: "top",
        isClosable: true,
      });
    }
    setEmail("");
    setPassword("");
  };

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
            Sign In
          </Heading>

          <FormControl
            w={isLargerThan992 ? "30%" : "70%"}
            borderRadius="lg"
            p={"3"}
            cursor="pointer"
            mt={5}
            isRequired
          >
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
              //   onClick={SendSignInRequest}
              onClick={SendSignInRequest}
              w={"100%"}
              h={"40px"}
              mt={4}
              colorScheme="blue"
              type="submit"
              isDisabled={email === "" || password === ""}
            >
              Sign In
            </Button>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              <Link to={""} style={{ color: "blue" }}>
                Forgot password?
              </Link>
            </Text>

            <Text mt={"15px"} display="flex" justifyContent={"center"}>
              Don't have an account?{" "}
              <Link to={"/signup"} style={{ color: "blue" }}>
                Create Here...
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
};

export default Login;
