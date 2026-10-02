import {
	Info,
	TriangleAlert,
	CircleCheck,
	CircleX,
	ChevronDown,
	Lightbulb,
} from "lucide-react";

import "./callout.css";

const calloutThemes = {
	info: {
		icon: Info,
		color: "#3b82f6",
	},

	warning: {
		icon: TriangleAlert,
		color: "#f59e0b",
	},

	success: {
		icon: CircleCheck,
		color: "#22c55e",
	},

	danger: {
		icon: CircleX,
		color: "#ef4444",
	},

	tip: {
		icon: Lightbulb,
		color: "#8b5cf6",
	},
};

export function Callout({ name = "info", title, children }) {
	const theme = calloutThemes[name] || calloutThemes.info;

	const Icon = theme.icon;

	return (
		<div className="callout" style={{ "--callout-color": theme.color }}>
			<div className="callout-header">
				<Icon size={18} />

				{title && <span className="callout-title">{title}</span>}
			</div>

			<div className="callout-content">{children}</div>
		</div>
	);
}

export function CollapsableCallback({
	name = "info",
	title,
	children,
	open = false,
}) {
	const theme = calloutThemes[name] || calloutThemes.info;

	const Icon = theme.icon;

	return (
		<details
			className="collapsable"
			style={{ "--callout-color": theme.color }}
			open={open}
		>
			<summary className="collapsable-header">
				<div className="collapsable-title">
					<Icon size={18} />

					<span>{title}</span>
				</div>

				<ChevronDown size={18} className="collapsable-chevron" />
			</summary>

			<div className="collapsable-content">{children}</div>
		</details>
	);
}
