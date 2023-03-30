/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_GLOB_API_URL: string;
	readonly VITE_APP_API_BASE_URL: string;
	readonly VITE_GLOB_OPEN_LONG_REPLY: string;
	readonly VITE_GLOB_APP_PWA: string;
}
declare module '*.vue' {
	import type { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component

}