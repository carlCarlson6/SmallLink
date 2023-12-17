import ReturnToMainButton from "@/ui/returnToMainButton";
import { ButtonIcon, ResumeIcon } from "@radix-ui/react-icons";
import { Flex, Kbd, Text } from "@radix-ui/themes";
import { kv } from "@vercel/kv";
import { redirect } from "next/navigation";

export default async function SlugPage({params: {slug}}: {
  params: {slug: string}
}) {
  const maybeUrl = await kv.get<string>(slug);
  if(maybeUrl) {
    redirect(maybeUrl);
  }

  return (<>
    <Flex 
      direction={'column'} 
      align={'center'} 
      justify={'center'} 
      pt={'6'} 
      gap={'6'}
    >
      <Text size={'5'}><Kbd>{slug}</Kbd>{' '} not found 😿</Text>
      <ReturnToMainButton />
    </Flex>
  </>);
}