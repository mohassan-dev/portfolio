import Link from "next/link";
import classes from "./Header.module.css";
import { Button, Text, Title } from "@mantine/core";

export default function Header() {
	return (
		<nav className={classes.header}>
			<Link href="/" className={classes.link}>
				<Title order={3}>
					<Text span inherit>
						Mohamed Hassan
					</Text>
				</Title>
			</Link>

			<div className={classes.headerLinks}>
				<Link href="/projects" className={classes.link}>
					Projects
				</Link>

				<Link href="/about" className={classes.link}>
					About
				</Link>
			</div>

			<Button variant="outline" component={Link} href="/contact" size="sm">
				Get in touch
			</Button>
		</nav>
	);
}
