import type { Metadata } from "next";
import { AppShell, AppShellHeader, AppShellMain, ColorSchemeScript, MantineProvider } from "@mantine/core";
import theme from "./theme";
import Header from "@/components/Header";
import { epilogue } from "./fonts";

import "./globals.css";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
	title: "Mohamed Hassan",
	description: "Software developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<ColorSchemeScript defaultColorScheme="light" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>

			<body>
				<MantineProvider theme={theme} defaultColorScheme="light">
					<AppShell
						padding="md"
						h="100dvh"
						header={{
							height: 80,
						}}
						className={epilogue.className}
					>
						<AppShellHeader withBorder={false}>
							<Header />
						</AppShellHeader>

						<AppShellMain>{children}</AppShellMain>
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
