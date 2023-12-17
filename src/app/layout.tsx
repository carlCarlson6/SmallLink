import React from "react";
import '@radix-ui/themes/styles.css';
import {Flex, Theme, Container, Box, Text, Separator, IconButton} from "@radix-ui/themes";
import { CodeIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

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
            <Box pt={'9'}>
              <Separator size={'4'}/>
              <DevelopedBy />
            </Box>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}

function DevelopedBy() {
  return (
    <Flex pt={'8'} direction={'column'} align={'center'}>
      <Text>Developed by Carlos A.D.</Text>
      <Flex pt={'5'} align={'center'} justify={'center'} gap={'3'}>
        <a href="https://github.com/carlCarlson6" target="_blank">
          <IconButton variant={'outline'} style={{ cursor: 'pointer' }} >
            <GitHubLogoIcon />
          </IconButton>
        </a>
        <a href="https://github.com/carlCarlson6/SmallLink" target="_blank">
          <IconButton variant={'outline'} style={{ cursor: 'pointer' }}>
              <CodeIcon />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/carlos-acitores-deval-a3914a1b/" target="_blank">
          <IconButton variant={'outline'} style={{ cursor: 'pointer' }}>
            <LinkedInLogoIcon />
          </IconButton>
        </a>
      </Flex>
    </Flex>
  );
}
