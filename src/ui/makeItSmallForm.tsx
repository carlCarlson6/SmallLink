"use client";

import {Blockquote, Button, Flex, TextFieldInput, Text, Box} from "@radix-ui/themes";
import {useEffect, useState} from "react";
import { useLocalStorage } from "usehooks-ts";
import { urlSchema } from '@/common/schema';
import MyLinksTable from './myLinksTable';
import CopyToClipboard from './copyToClipboard';
import { useAppUrl } from './useAppUrl';
import { commands } from "@/server/infrastructure/actions";

export default function MakeItSmallForm() {
	const {
		inputText, 
		setInputText, 
		isProcessing, 
		lastAddedSlug, 
		onClick, 
		isInvalidInput, 
		isValidUrl,
		myLinks 
	} = useMakeItSmall();
	const appUrl = useAppUrl();

	return (<>
		<TextFieldInput 
			name='link' 
			onChange={e => setInputText(e.target.value)} 
			required
			size={'3'}
			value={inputText}
		/>
		<Box pl={'5'}>{isValidUrl 
			? <></> 
			: <Text size={'1'} color='ruby'>invalid url</Text>
		}</Box>
		<Flex align={'center'} justify={'center'} direction={'column'} pt={isValidUrl ? '5' : isInvalidInput ? '0' : '5'} pb={'5'} gap={'4'}>
			<Button 
				disabled={isInvalidInput} 
				onClick={onClick}
				style={{maxWidth: 300, cursor: isInvalidInput ? '' : 'pointer'}}
			>
				{ isProcessing ? <p>running</p> : <p>make it small</p> }
			</Button>

			{lastAddedSlug ?
				<Flex direction={'row'} gap={'4'}>
					<Text weight={'light'}>your small link</Text>
					<Blockquote>
						<a href={`${appUrl}${lastAddedSlug}`} target='blank'>
							{`${appUrl}${lastAddedSlug}`}
						</a>
					</Blockquote>
					<CopyToClipboard slug={lastAddedSlug} />
				</Flex>
				: <></>
			}
		</Flex>
		<MyLinksTable links={myLinks} />
	</>);
}

const useMakeItSmall = () => {
	const [inputText, setInputText] = useState("");
	const [isValidUrl, setIsValidUrl] = useState(true);
	const [isRunning, setIsRunning] = useState(false);
	const [lastAddedSlug, setLastAddedSlug] = useState<string|null>(null);

  const [myLinks, setMyLinks] = useState<{slug: string, url: string}[]>([]);
  const [myStoredLinks, setMyStoredLinks] = useLocalStorage<{slug: string, url: string}[]>("small-links", []);

  useEffect(() => {
    setMyLinks([...myStoredLinks]);
  }, []);

	return {
		inputText,
		setInputText: (input: string) => {
			setInputText(input);
			setIsValidUrl(urlSchema.safeParse(input).success);
		},
		isInvalidInput: inputText.length === 0 || !isValidUrl,
		isValidUrl,
		isProcessing: isRunning,
		lastAddedSlug: lastAddedSlug,
		myLinks,
		onClick: async () => {
			setIsRunning(true);

			try {
				const response = await commands.createSmallLink({url: inputText});	
				setLastAddedSlug(response.slug);
				setMyLinks([response, ...myLinks]);
      			setMyStoredLinks([response, ...myStoredLinks]);
			}
			catch (e) {
				return;
			}

			setInputText("");
			setIsRunning(false);
		}
	}
}