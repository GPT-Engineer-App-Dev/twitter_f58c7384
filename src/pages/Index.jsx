import React, { useState } from "react";
import { Box, Flex, Text, Input, Button, VStack, HStack, Avatar, IconButton, useColorMode, useColorModeValue, Divider, Stack } from "@chakra-ui/react";
import { FaTwitter, FaMoon, FaSun, FaFeatherAlt } from "react-icons/fa";

const Tweet = ({ username, content, avatarUrl }) => {
  return (
    <HStack spacing={4} p={4} align="start">
      <Avatar src={avatarUrl} size="md" />
      <VStack align="start" spacing={1}>
        <Text fontWeight="bold">{username}</Text>
        <Text>{content}</Text>
      </VStack>
    </HStack>
  );
};

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [tweetContent, setTweetContent] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("black", "white");

  const handleTweetPost = () => {
    if (tweetContent.trim() === "") return;

    const newTweet = {
      username: "User",
      content: tweetContent,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMjUzOTc0N3ww&ixlib=rb-4.0.3&q=80&w=1080',
    };

    setTweets([newTweet, ...tweets]);
    setTweetContent("");
  };

  return (
    <Box bg={bg} color={color} minH="100vh" p={8}>
      <Flex justify="space-between" align="center" mb={6}>
        <FaTwitter size={32} />
        <IconButton icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} variant="ghost" />
      </Flex>
      <VStack spacing={4}>
        <HStack w="100%">
          <Input value={tweetContent} onChange={(e) => setTweetContent(e.target.value)} placeholder="What's happening?" size="lg" flex={1} />
          <Button leftIcon={<FaFeatherAlt />} colorScheme="twitter" onClick={handleTweetPost}>
            Tweet
          </Button>
        </HStack>
        <Divider />
        <Stack spacing={4} w="100%">
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </Stack>
      </VStack>
    </Box>
  );
};

export default Index;
