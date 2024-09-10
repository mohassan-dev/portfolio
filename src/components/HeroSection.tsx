import { Button, Divider, Flex, Text, Title, UnstyledButton } from "@mantine/core";

import classes from "./HeroSection.module.css";

import GithubIcon from "@/icons/GithubIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section className={classes.container}>
			<div className={classes.leftSection}>
				<Text className={classes.jobTitle}>Full stack Web Developer</Text>

				<Title order={1} className={classes.title}>
					Your Trusted{" "}
					<Text inherit span c="violet" fw="bolder">
						Partner
					</Text>
					<br />
					for{" "}
					<Text inherit span c="violet" fw="bolder">
						Web App
					</Text>{" "}
					Develop&shy;ment
				</Title>

				<Text className={classes.subTitle}>
					Turning innovative ideas into powerful, scalable web applications. Specializing in end-to-end development for startups and businesses where technology is a core driver of growth.
				</Text>

				<Link href="/contact" className={classes.ctaContainer}>
					<UnstyledButton className={classes.ctaButton}>Turn your ideas into reality</UnstyledButton>
				</Link>
			</div>

			<div className={classes.socials}>
				<Link href="https://github.com/Moe-Hassan-123">
					<GithubIcon />
				</Link>

				<Link href="https://www.linkedin.com/in/mdhn6832/">
					<LinkedinIcon />
				</Link>
			</div>
		</section>
	);
}
