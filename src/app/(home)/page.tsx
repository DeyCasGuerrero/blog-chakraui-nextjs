import { Box, Divider, Text } from "@chakra-ui/react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 bg-black w-full">
      <div className="flex justify-center w-full flex-col ">
        <Text
          p={2}
          fontSize={"xxx-large"}
          fontFamily={"fantasy"}
          color={"whitesmoke"}
          bgClip="text"
          bgGradient="linear(to-r, blue, red)"
        >
          Sign up and create your own Blog in this website
        </Text>

        <Box color="white">
          <Text
            bgGradient="linear(to-r, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            hola.com
          </Text>
        </Box>
      </div>

    </main>
  );
}
