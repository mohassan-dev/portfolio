"use client";
import useIsMobile from "@/hooks/useIsMobile";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Grid,
  GridCol,
  Anchor,
} from "@mantine/core";
import Image from "next/image";
import classes from "./HeroSection.module.css";

export default function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <Grid mt="lg">
      <GridCol span={isMobile ? 12 : 8}>
        <Container size="lg">
          <div>
            <Title
              order={1}
              ta={isMobile ? "center" : "left"}
              size="4rem"
              fw={900}
              mb="md"
            >
              Turning AI into Practical Tools for Your Business
            </Title>

            <Text ta="left" mt="2rem" size="2rem">
              I help businesses like yours automate complex workflows with
              secure, intuitive apps — freeing you up to focus on
              <Text span fw="bold" c="violet">
                {" "}
                what truly matters
              </Text>
            </Text>
          </div>

          <Group ta="center" mt="5rem" className={classes.buttonContainer}>
            <Anchor href="/contact" c="white" underline="never">
              <Button size="lg" radius="md" variant="filled" component={Button}>
                Schedule a Consultation
              </Button>
            </Anchor>

            <Anchor href="/projects " c="white" underline="never">
              <Button size="lg" radius="md" variant="outline" color="black">
                See My Work
              </Button>
            </Anchor>
          </Group>
        </Container>
      </GridCol>

      <GridCol span={4} pos="relative" visibleFrom="sm">
        <Image src={"/hero.svg"} fill alt="Hero Image" />
      </GridCol>
    </Grid>
  );
}
