import {
  Anchor,
  Badge,
  Button,
  Card,
  Group,
  Image,
  Text,
  Title,
} from "@mantine/core";
import { Metadata } from "next";
import classes from "./projects.module.css";

export const metadata: Metadata = {
  title: "Mohamed Hassan - Projects",
  description:
    "Hi, I'm Mohamed Hassan, a Full Stack Developer who transforms complex technical challenges into elegant, secure, and scalable solutions. With expertise in Python, Django, React, NextJs, AWS and GCP, I specialize in building full-stack applications that drive business growth and user satisfaction.",
};

const projects = [
  {
    title: "MQO A.I. Hub",
    description:
      "MQO A.I. Hub is a secure productivity platform tailored for professionals in data-intensive fields. It features A.I.-powered chat, audio transcription, content organization, and text analysis tools. This platform boosts efficiency and accuracy while ensuring data security, making it ideal for researchers, consultants, HR professionals, and more. Key features include advanced document comprehension, multi-speaker transcription, and customizable content management, helping users maximize the value of their information and expertise.",
    techStack: [
      "Django",
      "React",
      "Docker",
      "CI/CD",
      "AI",
      "Encryption",
      "AWS",
    ],
    link: "https://mqo.ai/",
    thumbnail: "/mqo.png",
  },
  {
    title: "Thek A.I.",
    description:
      "Thek A.I. is an AI-powered writing platform designed to help marketing teams elevate their work. With innovative tools for content creation and image generation, Thek A.I. makes writing fast, easy, and SEO-friendly. The platform offers unique tools tailored to meet all your team’s needs, from content to design, boosting productivity without requiring advanced writing skills.",
    techStack: ["Django", "Next.js", "React", "CI/CD", "AI"],
    link: "https://thek.ai/",
    thumbnail: "/thekai.png",
  },
  {
    title: "Petrolafuel",
    description:
      "Petrolafuel is a powerful system designed for business owners to monitor cashier activity and streamline data analysis. By aggregating data from third-party APIs, web scraping, and webhooks, Petrolafuel automatically generates over eight detailed reports, giving teams a comprehensive view of operations and helping them make data-driven decisions with ease.",
    techStack: ["Django", "Data Analysis", "Webhooks", "API Integration"],
    link: "https://automation.petrolafuel.com/",
    thumbnail: "/petrolafuel.png",
  },
];

export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <Card
          key={index}
          shadow="xl"
          padding="xl"
          radius="lg"
          withBorder
          mb="md"
        >
          <Group p="apart">
            <Title order={2} fw={500}>
              {project.title}
            </Title>

            <Group p="xs">
              {project.techStack.map((tech) => (
                <Badge key={tech} color="blue" variant="light">
                  {tech}
                </Badge>
              ))}
            </Group>
          </Group>

          <Group justify="center">
            <Image
              src={project.thumbnail}
              alt={`${project.title} thumbnail`}
              className={classes.image}
              mt="sm"
              radius="sm"
            />
          </Group>

          <Text size="xl" mt="sm">
            {project.description}
          </Text>

          {project.link && (
            <Group justify="center">
              <Anchor href={project.link} size="xs" mt="sm">
                <Button size="lg">Visit {project.title}</Button>
              </Anchor>
            </Group>
          )}
        </Card>
      ))}
    </div>
  );
}
