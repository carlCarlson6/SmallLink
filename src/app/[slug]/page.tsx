import { queries } from "@/server/actions";
import { getShortLinkAction } from "@/server/getShortLink";
import ReturnToMainButton from "@/ui/returnToMainButton";
import { Flex, Kbd, Text } from "@radix-ui/themes";
import { redirect } from "next/navigation";

export default async function SlugPage({params: {slug}}: {
  params: {slug: string}
}) {
  const maybeShortLink = await queries.getShorLink({slug});
  if (maybeShortLink) {
    redirect(maybeShortLink);
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