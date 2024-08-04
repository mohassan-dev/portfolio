import { Center, Flex, Stack, Text, Title } from "@mantine/core";

export default function Home() {
	return (
		<Flex component={Center} h="100%" ta="center" align="center" display="flex" justify="center">
			<Stack gap="xl">
				<Title>Welcome! I&apos;m Mohamed Hassan</Title>

				<Text>Stay tuned, this is a work in progress.</Text>

				<Text>
					You can contact me at <a href="mailto:contact@mohamed-hassan.dev">contact@mohamed-hassan.dev</a>
				</Text>
			</Stack>
		</Flex>
	);
}
