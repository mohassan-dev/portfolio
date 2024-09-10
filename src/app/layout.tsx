import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
			<body className={inter.className}>
				<MantineProvider>
					<AppShell
						padding="md"
						h="100dvh"
						header={{
							height: 60,
						}}
					>
						<AppShellHeader withBorder={false}>
							<Header />
						</AppShellHeader>
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
