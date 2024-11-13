import {
  Anchor,
  Card,
  Center,
  CheckIcon,
  Container,
  Divider,
  Grid,
  GridCol,
  List,
  ListItem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mohamed Hassan - About",
  description:
    "Hi, I'm Mohamed Hassan, a Full Stack Developer who transforms complex technical challenges into elegant, secure, and scalable solutions. With expertise in Python, Django, React, NextJs, AWS and GCP, I specialize in building full-stack applications that drive business growth and user satisfaction.",
};

export default function Contact() {
  return (
    <Container>
      <Title order={1} component={Center}>
        Hi, I'm Mohamed Hassan
      </Title>

      <Card shadow="xl">
        <Text size="lg" mt="sm">
          Passionate full-stack software developer specializing in AI-powered
          business apps and workflow automation. With years of experience
          building secure, scalable applications, I combine deep technical
          expertise with a keen eye for user experience. Whether working on the
          backend or crafting a seamless frontend, my goal is always to create
          solutions that enhance productivity and drive business growth.
          <Anchor href="/resume.pdf" target="_blank" ml="xs">
            [View Resume]
          </Anchor>
        </Text>

        <Divider my="sm" />

        {/* What I Do Section */}
        <Grid mt="xl">
          <GridCol span={12}>
            <Title order={2}>What I Do</Title>
            <Text size="lg" mt="sm">
              I specialize in backend development with Django, frontend with
              Next.js & React, and cloud services like AWS and GCP. I’ve worked
              on a wide range of{" "}
              <Anchor href="/projects" component={Link}>
                projects
              </Anchor>
              , from AI-powered applications to complex data-driven platforms.
            </Text>
          </GridCol>
        </Grid>

        {/* Skills Section */}
        <Grid mt="xl">
          <GridCol span={12}>
            <Title order={3}>Skills</Title>
            <List spacing="xs" size="lg" mt="sm" ml="xs">
              <ListItem>Backend (Django & .NET)</ListItem>
              <ListItem>Frontend (Next.js & React)</ListItem>
              <ListItem>CI/CD (Github Actions & Bitbucket Pipelines)</ListItem>
              <ListItem>Cloud (AWS & GCP)</ListItem>
            </List>
          </GridCol>
        </Grid>

        {/* Approach Section */}
        {/* <Grid mt="xl">
          <GridCol span={12}>
            <Title order={3}>My Approach</Title>
            <Text size="lg" mt="sm">
              I build applications that are secure, scalable, and user-friendly.
              My goal is to automate labor-intensive processes and simplify
              complex systems, making them more accessible for users.
            </Text>
          </GridCol>
        </Grid> */}

        {/* Contact Section */}
        <Grid mt="xl">
          <GridCol span={12}>
            <Title order={3}>Let’s Connect</Title>

            <Text size="lg" mt="sm">
              If you’re looking for a developer who can bring AI-driven
              solutions and optimized workflows to life, feel free to connect on{" "}
              <Anchor
                href="https://www.linkedin.com/in/mohamedhassan68/"
                target="_blank"
              >
                LinkedIn
              </Anchor>{" "}
              or reach out directly at{" "}
              <Anchor href="mailto:me@mohassan.dev">me@mohassan.dev</Anchor>.
              I'm always excited to work on new challenges!
            </Text>
          </GridCol>
        </Grid>
      </Card>
    </Container>
  );
}
