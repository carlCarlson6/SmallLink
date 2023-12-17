"use client"
import { Separator, TableBody, TableCell, TableColumnHeaderCell, TableHeader, TableRoot, TableRow } from "@radix-ui/themes";
import CopyToClipboard from "./copyToClipboard";

export default function MyLinksTable({links}: {
  links: {slug: string, url: string}[]
}) {
  return (<>{links.length === 0 ? <></> : 
    <>
      <Separator size={'4'} color={'pink'}/>
      <TableRoot >
        <TableHeader>
          <TableColumnHeaderCell>slug</TableColumnHeaderCell>
          <TableColumnHeaderCell>link</TableColumnHeaderCell>
          <TableColumnHeaderCell></TableColumnHeaderCell>
        </TableHeader>
        <TableBody>{links.map(link =>
          <TableRow key={link.slug}>
            <TableCell>{link.slug}</TableCell>
            <TableCell>{link.url}</TableCell>
            <TableCell>
              <CopyToClipboard slug={link.slug}/>
            </TableCell>
          </TableRow>
        )}</TableBody>
      </TableRoot>
    </>
  }</>);
}