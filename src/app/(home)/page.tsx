import { Box, Divider, Flex, Text, Square } from "@chakra-ui/react";
import { RootStructure, NewStructure,AlbumStructure } from '@/features/shared';
export default function Home() {
  return (
    <>
      <RootStructure />
      <NewStructure />
      <AlbumStructure/>
    </>
  );
}
