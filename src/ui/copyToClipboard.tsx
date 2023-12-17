import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import { useAppUrl } from "./useAppUrl";

export default function CopyToClipboard({slug}: {slug: string}) {
  const [_, copyToClipboard] = useCopyToClipboard();
  const appUrl = useAppUrl();

  return (
    <IconButton 
      variant='soft' 
      style={{cursor: 'pointer'}} 
      onClick={() => copyToClipboard(`${appUrl}${slug}`)}
    >
      <ClipboardCopyIcon/>
    </IconButton>
  );
}