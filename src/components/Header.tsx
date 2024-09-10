import Link from "next/link";
import classes from "./Header.module.css";
import { Text } from "@mantine/core";

export default function Header() {
	return (
		<nav className={classes.header}>
			<Link href="/" className={classes.link}>
				<Text className={classes.title} ff="Epilogue" fw="600">
					MOHAMED HASSAN
				</Text>
			</Link>

			<div className={classes.headerLinks}>
				<Link href="/about" className={classes.link}>
					About
				</Link>

				<Link href="/work" className={classes.link}>
					Work
				</Link>

				<Link href="/contact" className={classes.link}>
					Contact
				</Link>
			</div>
		</nav>
	);
}
