import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

export default withSidebar(
	defineConfig({
		title: "S2",
		description: "The S2 Specification & Reference",
		base: "/spec/",
		themeConfig: {
			logo: "/logo.svg",
			nav: [
				{ text: "Reference", link: "/reference/" },
			],
			search: { provider: "local" },
			socialLinks: [
				{ icon: "github", link: "https://github.com/Standard-2/spec" },
			],
		},
		head: [["link", { rel: "icon", href: "/favicon.ico" }]],
	}),
	{
		// ============ [ SIDEBAR OPTIONS ] ============
		useFolderLinkFromIndexFile: true,
		useFolderTitleFromIndexFile: true,
		useTitleFromFileHeading: true,
		useTitleFromFrontmatter: true,
		hyphenToSpace: true,
		sortMenusByFrontmatterOrder: true,
		frontmatterOrderDefaultValue: 100,
		excludeByGlobPattern: ["**/test/**"],
	},
);
