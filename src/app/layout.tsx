"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./page";


const activeChain = "sepolia";
const queryClient = new QueryClient();


export default function MyApp() {
  return (
    <html>
      <body>
      <ThirdwebProvider activeChain={activeChain} clientId="ec8f9fa6a4005c62b10ccb4e78b211d6">
      <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Navbar />
        <Home/>
      </ChakraProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
      </body>
    </html>
   
  );
}

