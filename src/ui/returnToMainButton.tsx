"use client"

import { ThickArrowLeftIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export default function ReturnToMainButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/')} style={{cursor: 'pointer'}} >
      <ThickArrowLeftIcon /> 
      <Text>back to main</Text>
    </Button>
  );
}