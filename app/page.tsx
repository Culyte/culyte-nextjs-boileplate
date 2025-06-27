export default function Home() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
			<main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
				<h1>Hello world</h1>
				<ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left">
					<li className="mb-2 tracking-[-.01em]">
						Next Js With Tailwind Css Starter .
					</li>
					<li className="tracking-[-.01em]">
						Save and see your changes instantly.
					</li>
				</ol>
			</main>
		</div>
	);
}
