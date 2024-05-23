"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";

const activeChain = "sepolia";

export default function MyApp() {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ChakraProvider>
        <Navbar />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

