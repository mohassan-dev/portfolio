import { Card, Center, Container, Text, Title } from "@mantine/core";

export default function Contact() {
	return (
		<Container>
			<Title order={1} component={Center}>
				Reach Out To Me
			</Title>

			<Card shadow="xl">
				<Text>I'm always open to new opportunities and collaborations. If you have any questions or just want to say hi, feel free to reach out to me.</Text>

				<Text>
					React out at <a href="mailto:me@mohamed-hassan.dev">me@mohamed-hassan.dev</a>
				</Text>
			</Card>
		</Container>
	);
}
