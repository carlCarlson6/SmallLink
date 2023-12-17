import React from "react";
import '@radix-ui/themes/styles.css';
import {Flex, Theme, Container, Box, Text} from "@radix-ui/themes";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'small link',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="dark" accentColor="crimson" grayColor="sand" radius="full" scaling="90%">
          <Flex justify={'center'} direction={'column'} px={'9'} pt={'4'} gap={'4'} >
            <Text size={'9'} align={'center'} weight="bold" >
              small link
            </Text>
            <Container>
              {children}
            </Container>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}