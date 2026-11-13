"use client";

import React, { useState } from "react";
import Image from "next/image";
import kelvinImg from "@/app/images/kelvin.jpg";
import bikinPrdImg from "@/app/images/bikinPRD.png";

export default function ContraPortfolioPage() {
	const [copied, setCopied] = useState(false);
	const email = "kelvinyazid39@gmail.com";

	const copyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2200);
	};

	return (
		<div className="min-h-screen bg-[#ffffff] text-[#14171f] font-sans selection:bg-[#b4ff6a] selection:text-[#222834] antialiased">
			{/* Load DM Sans & Inter */}
			<style jsx global>{`
				@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&family=Inter:wght@400;500;600&display=swap');
				
				:root {
					--font-dm-sans: "DM Sans", "GT Standard 6 L", -apple-system, sans-serif;
					--font-inter: "Inter", -apple-system, sans-serif;
				}

				body {
					font-family: var(--font-dm-sans);
					color: #14171f;
					background: #ffffff;
				}

				/* Glass halo specified in Contra system */
				.glass-halo {
					box-shadow: -3px -3px 32px 0px rgba(228, 232, 247, 0.85);
				}
				.glass-halo-reverse {
					box-shadow: 3px 3px 32px 0px rgba(228, 232, 247, 0.85);
				}

				/* Headline styles per Contra specs */
				.display-headline {
					font-size: clamp(48px, 6vw, 80px);
					line-height: 0.92;
					letter-spacing: -0.02em;
					font-weight: 400;
				}
				.capability-headline {
					font-size: clamp(40px, 5.5vw, 80px);
					line-height: 0.94;
					letter-spacing: -0.02em;
					font-weight: 400;
				}
				.closing-headline {
					font-size: clamp(42px, 5.8vw, 80px);
					line-height: 1.02;
					letter-spacing: -0.02em;
					font-weight: 400;
				}
			`}</style>

			{/* 1. Fixed Navigation (Contra spec: 74px, rgba(255,255,255,0.8), blur 10px, 48px header pill) */}
			<nav className="fixed top-0 left-0 w-full h-[74px] bg-white/80 backdrop-blur-[10px] z-50 border-b border-[#d0d4dc]/40 transition-colors">
				<div className="max-w-[1440px] h-full mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between">
					<div className="flex items-center gap-10">
						<a
							href="#"
							className="text-[#14171f] text-[20px] font-medium tracking-tight hover:text-[#4a5264] transition-colors"
						>
							Kelvin Yazid
						</a>
						<div className="hidden md:flex items-center gap-8 text-[16px] text-[#14171f] font-medium">
							<a href="#featured-project" className="hover:text-[#4a5264] transition-colors">
								Featured Work
							</a>
							<a href="#capabilities" className="hover:text-[#4a5264] transition-colors">
								Capabilities
							</a>
							<a href="#about" className="hover:text-[#4a5264] transition-colors">
								About
							</a>
						</div>
					</div>

					<div className="flex items-center gap-4">
						<a
							href="https://github.com/Noyrayzz"
							target="_blank"
							rel="noreferrer"
							className="hidden sm:inline-block text-[15px] font-medium text-[#677083] hover:text-[#14171f] transition-colors"
						>
							GitHub
						</a>
						<button
							onClick={copyEmail}
							className="h-[48px] px-5 rounded-[30px] bg-[#222834] text-white text-[15px] font-light tracking-[0.04em] hover:bg-[#14171f] active:scale-95 transition-all flex items-center gap-2"
						>
							<span>{copied ? "Copied!" : "Get in touch"}</span>
						</button>
					</div>
				</div>
			</nav>

			{/* Spacing beneath fixed navigation */}
			<div className="h-[74px]" />

			{/* 2. Hero Section: Portrait stage opening (Contra spec) */}
			<section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-12 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[600px]">
					{/* Left Column: Two-line display headline, 480px support measure, 60px charcoal action */}
					<div className="lg:col-span-7 flex flex-col items-start gap-8 max-w-[700px]">
						{/* Small Benefit Badge: Gold-Pink-Lavender gradient rim with white inset */}
						<div className="inline-flex p-[1px] rounded-[100px] bg-gradient-to-r from-[#f3ca4d] via-[#ff979a] to-[#cbabff]">
							<div className="bg-white px-4 py-1.5 rounded-[100px] flex items-center gap-2">
								<span className="w-2 h-2 rounded-full bg-[#b4ff6a]" />
								<span className="text-[14px] font-normal tracking-[0.01em] text-[#222834]">
									Frontend developer &bull; SMK Telkom Sidoarjo
								</span>
							</div>
						</div>

						{/* Display headline (80px, 400 weight, -0.02em tracking, 0.92 line height) */}
						<h1 className="display-headline text-[#222834]">
							Frontend built <br />
							for creativity.
						</h1>

						{/* 480px support measure (lead recipe: 24px/1.4 in slate #677083) */}
						<p className="max-w-[480px] text-[20px] sm:text-[24px] leading-[1.4] text-[#677083] font-normal">
							I&apos;m Kelvin Yazid Irwanto. Crafting high-performance web applications with clean code, responsive architectures, and local-first software like bikinPRD.
						</p>

						{/* Primary Action (60px charcoal pill, 30px corners, 16px/1.4 light text, 0.04em tracking) */}
						<div className="flex flex-wrap items-center gap-4 pt-2">
							<a
								href="#featured-project"
								className="h-[60px] px-8 rounded-[30px] bg-[#222834] text-white text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:bg-[#14171f] transition-all flex items-center justify-center active:scale-95 shadow-sm"
							>
								Explore featured work
							</a>
							<button
								onClick={copyEmail}
								className="h-[60px] px-8 rounded-[30px] bg-transparent text-[#222834] border border-[#d0d4dc] text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:border-[#222834] transition-all flex items-center justify-center active:scale-95"
							>
								{copied ? "Email copied!" : "Copy email address"}
							</button>
						</div>
					</div>

					{/* Right Column: Signature Layered portrait stage (~540px square) */}
					<div className="lg:col-span-5 flex justify-center lg:justify-end">
						<div className="relative w-full max-w-[500px] h-[520px] flex items-center justify-center">
							{/* Receding stacked cards behind */}
							<div className="absolute top-0 w-[420px] h-[460px] rounded-[32px] bg-[#f5f6f9] border border-[#d0d4dc]/60 transform -rotate-2" />
							<div className="absolute top-4 w-[440px] h-[460px] rounded-[32px] bg-[#222834]/5 border border-[#d0d4dc]/60 transform rotate-1" />

							{/* Front Card with white disc cutout */}
							<div className="relative z-10 w-[440px] sm:w-[460px] h-[460px] rounded-[32px] bg-white border border-[#d0d4dc] shadow-xl overflow-hidden flex items-center justify-center">
								{/* Concave framing corner marks */}
								<div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#14171f]" />
								<div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#14171f]" />
								<div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#14171f]" />
								<div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#14171f]" />

								{/* Portrait Image masked with clean contrast */}
								<div className="relative w-[340px] h-[340px] rounded-full overflow-hidden ring-8 ring-[#f5f6f9]">
									<Image
										src={kelvinImg}
										alt="Kelvin Yazid Irwanto"
										fill
										priority
										className="object-cover"
									/>
								</div>

								{/* Narrow lime collage seam accent (#b4ff6a) */}
								<div className="absolute bottom-6 right-8 w-16 h-1 bg-[#b4ff6a] rounded-full" />
							</div>

							{/* Floating Hero Glass Proof 1 */}
							<div className="absolute -top-4 -left-4 sm:-left-8 z-20 px-5 py-3.5 rounded-[17px] bg-white/80 backdrop-blur-[8px] border border-[#d0d4dc] glass-halo flex items-center gap-3">
								<div className="w-8 h-8 rounded-full bg-[#222834] text-white flex items-center justify-center text-[12px] font-medium">
									KY
								</div>
								<div>
									<h4 className="text-[14px] font-medium text-[#14171f] leading-tight">Kelvin Yazid Irwanto</h4>
									<p className="text-[12px] text-[#677083]">Creator of bikinPRD</p>
								</div>
							</div>

							{/* Floating Hero Glass Proof 2 */}
							<div className="absolute -bottom-4 -right-4 sm:-right-8 z-20 px-5 py-3.5 rounded-[20px] bg-white/85 backdrop-blur-[12px] border border-[#d0d4dc] glass-halo-reverse flex items-center gap-3">
								<div className="w-3 h-3 rounded-full bg-[#b4ff6a]" />
								<div>
									<span className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#677083] block">
										Flagship Software
									</span>
									<span className="text-[14px] font-medium text-[#14171f]">
										bikinPRD &bull; Local Spec Generator
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3. Oversized Proof Strip (Three Metric groups) */}
			<section className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-16 border-t border-[#d0d4dc]/40">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
					{/* Metric 1 */}
					<div className="flex flex-col gap-5 max-w-[320px]">
						<span className="display-headline text-[#14171f]">17</span>
						<p className="text-[20px] leading-[1.4] text-[#677083]">
							structured sections generated per PRD ready for AI coding agents.
						</p>
					</div>

					{/* Metric 2 */}
					<div className="flex flex-col gap-5 max-w-[320px]">
						<span className="display-headline text-[#14171f]">100%</span>
						<p className="text-[20px] leading-[1.4] text-[#677083]">
							runs locally on your machine with zero server logins or telemetry.
						</p>
					</div>

					{/* Metric 3 */}
					<div className="flex flex-col gap-5 max-w-[320px]">
						<span className="display-headline text-[#14171f]">BYOK</span>
						<p className="text-[20px] leading-[1.4] text-[#677083]">
							bring-your-own-key architecture supporting Gemini, Claude, and OpenAI.
						</p>
					</div>
				</div>
			</section>

			{/* 4. Single Flagship Project Showcase: bikinPRD (Contra Capability Chapter spec) */}
			<section id="featured-project" className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
					{/* Text Column */}
					<div className="lg:col-span-6 flex flex-col gap-8 max-w-[620px]">
						<div className="flex items-center gap-2">
							<span className="text-[14px] uppercase tracking-[0.06em] font-medium text-[#677083]">
								Featured Project &bull; Open Source Software
							</span>
							<span className="px-2.5 py-0.5 rounded-full text-[12px] font-medium bg-[#b4ff6a]/40 text-[#222834]">
								Active
							</span>
						</div>

						<h2 className="capability-headline text-[#262320]">
							Turn raw ideas into code-ready PRDs.
						</h2>

						<p className="text-[20px] sm:text-[24px] leading-[1.4] text-[#677083]">
							bikinPRD is a local-first specification engine that converts a single rough paragraph into an exhaustive 17-section Product Requirement Document. Features verifiable requirement IDs, testable acceptance criteria, and atomic task breakdowns optimized directly for Claude Code, Cursor, and Windsurf.
						</p>

						{/* Feature Pills */}
						<div className="flex flex-wrap gap-2.5 pt-1">
							<span className="px-3.5 py-1.5 rounded-[12px] bg-[#f5f6f9] border border-[#d0d4dc] text-[13px] font-medium text-[#222834]">
								Next.js & App Router
							</span>
							<span className="px-3.5 py-1.5 rounded-[12px] bg-[#f5f6f9] border border-[#d0d4dc] text-[13px] font-medium text-[#222834]">
								Tailwind CSS
							</span>
							<span className="px-3.5 py-1.5 rounded-[12px] bg-[#f5f6f9] border border-[#d0d4dc] text-[13px] font-medium text-[#222834]">
								Live Streaming AI
							</span>
							<span className="px-3.5 py-1.5 rounded-[12px] bg-[#f5f6f9] border border-[#d0d4dc] text-[13px] font-medium text-[#222834]">
								Local-First & BYOK
							</span>
						</div>

						{/* Action Buttons */}
						<div className="flex flex-wrap items-center gap-4 pt-4">
							<a
								href="https://github.com/Noyrayzz/bikinPRD"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center h-[60px] px-8 rounded-[30px] text-white bg-[#222834] text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:bg-[#14171f] transition-all active:scale-95 shadow-sm"
							>
								Explore bikinPRD on GitHub &rarr;
							</a>
							<a
								href="https://github.com/Noyrayzz/bikinPRD#readme"
								target="_blank"
								rel="noreferrer"
								className="inline-flex items-center justify-center h-[60px] px-8 rounded-[30px] text-[#222834] bg-transparent border border-[#d0d4dc] text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:border-[#222834] transition-all"
							>
								Read documentation
							</a>
						</div>
					</div>

					{/* Visual Collage Column */}
					<div className="lg:col-span-6 flex justify-center lg:justify-end">
						<div className="relative w-full max-w-[560px]">
							{/* Concave Corner marks */}
							<div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-[#14171f] z-20" />
							<div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-[#14171f] z-20" />
							<div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-[#14171f] z-20" />
							<div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-[#14171f] z-20" />

							{/* Main Project Card */}
							<div className="relative rounded-[28px] overflow-hidden border border-[#d0d4dc] bg-[#f5f6f9] shadow-xl aspect-[16/10] group">
								<Image
									src={bikinPrdImg}
									alt="bikinPRD — Generator PRD Lokal"
									fill
									priority
									className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
								/>
							</div>

							{/* Narrow lime seam between collage elements (#b4ff6a) */}
							<div className="absolute -bottom-6 left-10 w-14 h-24 bg-[#b4ff6a] rounded-xl z-10 hidden sm:block" />

							{/* Overlapping Frosted Label */}
							<div className="absolute -bottom-4 right-4 sm:right-8 z-20 px-6 py-4 rounded-[17px] bg-white/95 backdrop-blur-[8px] border border-[#d0d4dc] glass-halo flex flex-col">
								<span className="text-[16px] font-medium text-[#14171f]">bikinPRD</span>
								<span className="text-[12px] text-[#677083] font-mono mt-0.5">
									Local-first &bull; 17 Sections &bull; AI Agent Ready
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 5. Compact Capability Trio (Three open columns) */}
			<section id="capabilities" className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-24 border-t border-[#d0d4dc]/40">
				<div className="max-w-[700px] mb-16">
					<span className="text-[14px] uppercase tracking-[0.06em] font-medium text-[#677083] block mb-3">
						Technical Pillars
					</span>
					<h3 className="text-[36px] sm:text-[48px] font-normal tracking-[-0.0167em] text-[#14171f] leading-[1.15]">
						How I design and build modern software.
					</h3>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
					{/* Column 1 */}
					<div className="flex flex-col gap-4 max-w-[340px]">
						<span className="text-[12px] font-mono font-medium text-[#677083]">01 / LOCAL-FIRST & PRIVACY</span>
						<h4 className="text-[28px] sm:text-[32px] font-normal leading-[36px] tracking-[-0.0094em] text-[#14171f]">
							Zero-Server Architecture
						</h4>
						<p className="text-[18px] leading-[26px] text-[#677083] font-normal">
							Prioritizing user ownership and local persistence, as engineered in bikinPRD with BYOK client-side model execution.
						</p>
					</div>

					{/* Column 2 */}
					<div className="flex flex-col gap-4 max-w-[340px]">
						<span className="text-[12px] font-mono font-medium text-[#677083]">02 / TYPE-SAFE FRONTEND</span>
						<h4 className="text-[28px] sm:text-[32px] font-normal leading-[36px] tracking-[-0.0094em] text-[#14171f]">
							Next.js & TypeScript
						</h4>
						<p className="text-[18px] leading-[26px] text-[#677083] font-normal">
							Building fast, modular web applications with modern App Router structures, strict types, and utility-first Tailwind styling.
						</p>
					</div>

					{/* Column 3 */}
					<div className="flex flex-col gap-4 max-w-[340px]">
						<span className="text-[12px] font-mono font-medium text-[#677083]">03 / AGENT ERGONOMICS</span>
						<h4 className="text-[28px] sm:text-[32px] font-normal leading-[36px] tracking-[-0.0094em] text-[#14171f]">
							Human & AI Workflows
						</h4>
						<p className="text-[18px] leading-[26px] text-[#677083] font-normal">
							Structuring user interfaces and exported documents so both developers and AI tools can seamlessly execute with zero ambiguity.
						</p>
					</div>
				</div>
			</section>

			{/* 6. Glowing Closing Stage (40px radius gray panel #f5f6f9 with soft green glow) */}
			<section id="about" className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 py-16">
				<div className="relative w-full rounded-[40px] bg-[#f5f6f9] border border-[#d0d4dc]/60 px-8 py-24 sm:py-32 flex flex-col items-center text-center overflow-hidden">
					{/* Soft green glow rising from bottom edge */}
					<div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-[220px] rounded-[50%] bg-[#b4ff6a]/25 blur-[64px] pointer-events-none" />

					<div className="relative z-10 max-w-[800px] flex flex-col items-center gap-8">
						<span className="text-[14px] uppercase tracking-[0.06em] font-medium text-[#677083]">
							Let&apos;s collaborate
						</span>

						{/* Closing Headline (80px, 400 weight, 1.02 line height) */}
						<h2 className="closing-headline text-[#262320]">
							Let&apos;s build something <br />
							remarkable together.
						</h2>

						{/* Lead Support */}
						<p className="text-[20px] sm:text-[24px] leading-[1.4] text-[#677083] max-w-[540px]">
							Currently open for internships, frontend engineering collaborations, and exciting digital product builds.
						</p>

						{/* Primary Charcoal Action */}
						<div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
							<button
								onClick={copyEmail}
								className="h-[60px] px-10 rounded-[30px] bg-[#222834] text-white text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:bg-[#14171f] transition-all flex items-center justify-center active:scale-95 shadow-md"
							>
								{copied ? "Email copied to clipboard!" : `Get in touch (${email})`}
							</button>
							<a
								href="https://github.com/Noyrayzz/bikinPRD"
								target="_blank"
								rel="noreferrer"
								className="h-[60px] px-8 rounded-[30px] bg-transparent text-[#222834] border border-[#d0d4dc] text-[16px] leading-[1.4] font-light tracking-[0.04em] hover:border-[#222834] transition-all flex items-center justify-center"
							>
								View bikinPRD on GitHub &rarr;
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* 7. Long Directory Ending (Footer) */}
			<footer className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 pt-20 pb-16 border-t border-[#d0d4dc]/40">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-20">
					{/* Brand Emblem */}
					<div className="md:col-span-4 flex flex-col gap-4">
						<div className="text-[24px] font-normal tracking-tight text-[#14171f]">
							Kelvin Yazid Irwanto
						</div>
						<p className="text-[16px] text-[#677083] leading-relaxed max-w-[300px]">
							Student at SMK Telkom Sidoarjo &amp; frontend engineer exploring creative software.
						</p>
					</div>

					{/* Link Columns */}
					<div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
						{/* Group 1 */}
						<div className="flex flex-col gap-4">
							<span className="font-['Inter'] text-[12px] font-medium leading-[16px] uppercase tracking-[0.1em] text-[#677083]">
								Featured Project
							</span>
							<div className="flex flex-col gap-2.5 text-[14px] leading-[24px] font-medium text-[#131313]">
								<a href="https://github.com/Noyrayzz/bikinPRD" target="_blank" rel="noreferrer" className="hover:text-[#4a5264] transition-colors font-semibold">
									bikinPRD &rarr;
								</a>
								<a href="https://github.com/Noyrayzz/bikinPRD#cara-kerjanya" target="_blank" rel="noreferrer" className="hover:text-[#4a5264] transition-colors">
									How it works
								</a>
								<a href="https://github.com/Noyrayzz?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-[#4a5264] transition-colors">
									All GitHub Repositories
								</a>
							</div>
						</div>

						{/* Group 2 */}
						<div className="flex flex-col gap-4">
							<span className="font-['Inter'] text-[12px] font-medium leading-[16px] uppercase tracking-[0.1em] text-[#677083]">
								Technologies
							</span>
							<div className="flex flex-col gap-2.5 text-[14px] leading-[24px] font-medium text-[#131313]">
								<span>Next.js</span>
								<span>React</span>
								<span>TypeScript</span>
								<span>Tailwind CSS</span>
								<span>Python</span>
							</div>
						</div>

						{/* Group 3 */}
						<div className="flex flex-col gap-4">
							<span className="font-['Inter'] text-[12px] font-medium leading-[16px] uppercase tracking-[0.1em] text-[#677083]">
								Connect
							</span>
							<div className="flex flex-col gap-2.5 text-[14px] leading-[24px] font-medium text-[#131313]">
								<a href="https://github.com/Noyrayzz" target="_blank" rel="noreferrer" className="hover:text-[#4a5264] transition-colors">
									GitHub
								</a>
								<a href="https://www.instagram.com/noyzzid/" target="_blank" rel="noreferrer" className="hover:text-[#4a5264] transition-colors">
									Instagram
								</a>
								<button onClick={copyEmail} className="text-left hover:text-[#4a5264] transition-colors">
									Email
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Baseline row */}
				<div className="pt-8 border-t border-[#d0d4dc]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[14px] text-[#677083]">
					<p>&copy; {new Date().getFullYear()} Kelvin Yazid Irwanto. All rights reserved.</p>
					<div className="flex items-center gap-6">
						<span>SMK Telkom Sidoarjo</span>
						<span>&bull;</span>
						<span>Sidoarjo, Jawa Timur</span>
					</div>
				</div>
			</footer>
		</div>
	);
}
