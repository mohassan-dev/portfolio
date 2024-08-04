import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppShell, MantineProvider } from "@mantine/core";

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
			<body className={inter.className}>
				<MantineProvider>
					<AppShell
						styles={{
							root: {
								height: "100%",
							},
						}}
					>
						{children}
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
