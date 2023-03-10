import { Box, Divider, HStack, Link, Progress, Text } from "@chakra-ui/react";
import React from "react";
import{AiFillLike} from "react-icons/ai"

const Reviews = ({review,rating}) => {
  return (
    <Box w="100%" display="flex" p="1rem" bg="white" >
      <Box w="35%" align="initial" p="1rem">
        <Box>
          <HStack>
            <Box>
              <Text fontSize="4rem" fontWeight="500">
                {rating}
              </Text>
            </Box>
            <Box>
              <Text fontSize="1rem" fontWeight="500">
                {review}
              </Text>
              <Text color="blue" fontSize="0.8rem" fontWeight="400">
                <Link>200 Reviews</Link>
              </Text>
            </Box>
          </HStack>
        </Box>
        <Box w="100%">
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">5 - Excellent</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              140
            </Text>
          </Box>
          <Progress value={80} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">5 - Good</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              25
            </Text>
          </Box>
          <Progress value={20} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">3 - Okay</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              10
            </Text>
          </Box>
          <Progress value={4} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">2 - Poor</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              5
            </Text>
          </Box>
          <Progress value={4} colorScheme="gray" size="sm" />
          <Box
            w="100%"
            display="flex"
            justifyContent="space-between"
            marginTop="0.3rem"
          >
            <Text fontSize="0.7rem">1 - Terrible</Text>
            <Text fontSize="0.8rem" fontWeight="500">
              2
            </Text>
          </Box>
          <Progress value={2} colorScheme="gray" size="sm" />
        </Box>
        <Box w="100%" my="1rem">
          <Box display="flex" justifyContent="space-around">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.6/5
              </Text>
              <Text>Cleanliness</Text>
            </Box>
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.6/5
              </Text>
              <Text>Staff & service</Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-around">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.7/5
              </Text>
              <Text>Amenities</Text>
            </Box>
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.5/5
              </Text>
              <Text>Property conditions</Text>
            </Box>
          </Box>
          <Box p="1rem">
            <Box w="40%">
              <Text fontSize="1.2rem" fontWeight="500">
                4.3/5
              </Text>
              <Text>EcoFriendly</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box w="65%" align="initial"  p="1rem">
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Akshay
          </Text>
          <Text fontSize="0.9rem">21 JAN 2023</Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 5 nights in Dec 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Om
          </Text>
          <Text fontSize="0.9rem">18 Nov 2022</Text>
          <br />
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Very clean hotel and helpful staffs
          </Text>
          <Text fontSize="0.9rem">
            We recently stayed there for 5 days with family. The whole staffs
            and hotel was so friendly and above and beyond helpful. 
          </Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 4 nights in Oct 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            4/5 Good
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Rama
          </Text>
          <Text fontSize="0.9rem">18 Oct 2022</Text>

          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 4 nights in Aug 2022
          </Text>
          <AiFillLike />
        </Box>
        <Divider my="1rem" />
        <Box w="100%">
          <Text fontSize="1.3rem" fontWeight={"500"}>
            5/5 Excellent
          </Text>
          <Text fontSize="0.9rem" fontWeight={"500"}>
            Alian
          </Text>
          <Text fontSize="0.9rem">13 Aug 2022</Text>
          <br />

          <Text fontSize="0.9rem">
            The Room was too good. The breakfast spread was awesome. It's in
            heart of North Goa which is a big positive. All staff were very
            polite & checkout handling by the young lady Christabel was very
            smooth.
          </Text>
          <Text fontSize="0.7rem" lineHeight={"1.9rem"}>
            Stayed 3 nights in March 2022
          </Text>
          <AiFillLike />
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
