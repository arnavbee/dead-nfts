import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import thirdwebIcon from "@public/thirdweb.svg";
import { client } from "./client";
import {Container, Heading, Flex, Stack, Button} from "@chakra-ui/react"
import NextLink from "next/link";


export default function Home(){
  return (
    <Container maxW={"1200px"}>
     <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
     <Stack spacing={4} align={"center"}>
      <Heading>Dead NFTs Marketplace</Heading>
      <h3>A Rebirth of Forgotten Digital Treasures</h3>
      <Button as={NextLink} href="/buy">Shop NFTs</Button>
     </Stack>
     </Flex>
    </Container>
  )
}