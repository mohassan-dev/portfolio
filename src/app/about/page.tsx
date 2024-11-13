import {
  Anchor,
  Card,
  Center,
  Container,
  Divider,
  Text,
  Title,
} from "@mantine/core";
import { Metadata } from "next";

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
        <Text>
          Full Stack Developer who transforms complex technical challenges
          into elegant, secure, and scalable solutions. With expertise in
          Python, Django, React, NextJs, AWS and GCP, I specialize in building
          full-stack applications that drive business growth and user
          satisfaction.
          <Anchor href="/resume.pdf" target="_blank" ml="xs">
            [View Resume]
          </Anchor>
        </Text>

        <Divider my="sm" />

        <Text mt="md">
          In my <Anchor href="/projects"> recent projects</Anchor>, I have:
        </Text>

        <Text mt="sm" component="ul" ml="lg">
          <li>
            <Text fw="bolder" span>
              Enhanced Data Security
            </Text>
            : Engineered robust app-level encryption system using both symmetric
            and asymmetric cryptography. The system was used to encrypt an
            organization's data in the app-level.
          </li>

          <li>
            <Text fw="bolder" span>
              Optimized Deployment & Scalability
            </Text>
            : Leveraged Docker containerization to reduce deployment times by
            50% and integrated CI/CD pipelines using Github Actions, and
            Bitbucket pipelines to test & deploy applications.
          </li>
          <li>
            <Text fw="bolder" span>
              Streamlined Data Integration
            </Text>
            : Developed unified data models using polymorphism, making
            cross-system data integration seamless and efficient.
          </li>
          <li>
            <Text fw="bolder" span>
              Improved User Experience
            </Text>
            : Implemented a URL redirection system that boosted SEO performance
            and improved navigation.
          </li>
          <li>
            <Text fw="bolder" span>
              Simplified Payment Processing
            </Text>
            : Integrated Stripe for subscription management, making payment
            processing both secure and user-friendly.
          </li>
        </Text>

        <Text mt="md">
          I’ve also developed AI-powered tools, including applications for
          research coding, audio transcription, and user interaction with AI
          chat models. Each tool has been meticulously designed to provide
          practical, user-centered solutions while driving organizational
          productivity.
        </Text>

        <Divider my="sm" />

        <Text mt="md">
          Looking to bring technical expertise to your team? Let's connect on{" "}
          <Anchor
            href="https://linkedin.com/in/mohamedhassan68"
            target="_blank"
          >
            LinkedIn
          </Anchor>{" "}
          or reach out directly at{" "}
          <Anchor href="me@mohassan.dev">me@mohassan.dev</Anchor>.
        </Text>
      </Card>
    </Container>
  );
}
