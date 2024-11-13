"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Image,
  Badge,
  GridCol,
} from "@mantine/core";

const AboutSection = () => {
  return (
    <Container my={60}>
      <Grid>
        <GridCol m={6}>
          <Title order={2} size="3rem" mb="md">
            Hi, I'm Mohamed
          </Title>

          <Text size="lg" mb="md">
            A full-stack developer and automation specialist. My mission is to
            help businesses streamline operations and boost efficiency by
            leveraging AI-driven applications and smart workflow solutions.
          </Text>
          <Text size="lg" mb="md">
            With experience in helping companies from diverse industries, I've
            developed a deep understanding of how to build scalable,
            high-performance software solutions that fuel business growth and
            innovation.
          </Text>
        </GridCol>
      </Grid>
    </Container>
  );
};

export default AboutSection;
