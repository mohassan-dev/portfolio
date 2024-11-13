import { Anchor, Card, Center, Container, Text, Title } from "@mantine/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohamed Hassan - Contact",
  description:
    "Hi, I'm Mohamed Hassan, a Full Stack Developer who transforms complex technical challenges into elegant, secure, and scalable solutions. With expertise in Python, Django, React, NextJs, AWS and GCP, I specialize in building full-stack applications that drive business growth and user satisfaction.",
};

export default function Contact() {
  return (
    <Container>
      <Title order={1} component={Center}>
        Reach Out To Me
      </Title>

      <Card shadow="xl">
        <Text size="lg">
          I'm always open to new opportunities and collaborations. If you have
          any questions or just want to say hi, feel free to reach out to me at{" "}
          <Anchor href="mailto:me@mohassan.dev">me@mohassan.dev</Anchor>.
        </Text>
      </Card>
    </Container>
  );
}
