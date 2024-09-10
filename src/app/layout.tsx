import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell, AppShellHeader, AppShellMain, ColorSchemeScript, Container, MantineProvider } from "@mantine/core";
import theme from "./theme";
import Header from "@/components/Header";
import "@mantine/core/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mohamed Hassan",
	description: "TODO: Description",
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
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
			</head>

			<body>
				<MantineProvider theme={theme} defaultColorScheme="light">
					<AppShell
						padding="md"
						h="100dvh"
						header={{
							height: 80,
						}}
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
