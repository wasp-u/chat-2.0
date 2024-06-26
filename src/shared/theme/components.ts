import type { Components } from "@mui/material";

import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

export const components: Components = {
	MuiCssBaseline: {
		styleOverrides: {
			"#root": {
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				position: "relative",
				// background: palette.primary.main,
			},
		},
	},
	MuiTypography: {
		styleOverrides: {
			root: {
				// color: palette.text.primary,
			},
		},
	},
	MuiContainer: {
		styleOverrides: {
			root: {
				height: "100%",

				[`@media (max-width: ${breakpoints.values.md}px)`]: {
					paddingLeft: "16px",
					paddingRight: "16px",
				},

				[`@media (min-width: ${breakpoints.values.md}px)`]: {
					paddingLeft: "108px",
					paddingRight: "108px",
				},
			},
		},
	},
	MuiCard: {
		styleOverrides: {
			root: {
				background: "rgba(255, 255, 255, 0.11)",
				borderRadius: "8px",
				boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
				backdropFilter: "blur(17px)",
				"-webkit-backdrop-filter": "blur(17px)",
				border: "1px solid rgba(255, 255, 255, 0.1)",
				padding: "8px",
				overflow: "unset",
			},
		},
	},
	MuiOutlinedInput: {
		styleOverrides: {
			root: {
				backgroundColor: "rgba(255,255,255,0.05)",
				backdropFilter: "blur(30px)",

				"&.Mui-focused": {
					"& > .MuiOutlinedInput-notchedOutline": {
						border: "1px solid rgba(255,255,255,0.3)",
					},
				},

				"input:-internal-autofill-selected": {
					backgroundColor: "rgba(255,255,255,0.05)",
				},
			},
			notchedOutline: {
				border: "none",
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				backgroundColor: "rgba(255,255,255,0.1)",
				border: "1px solid rgba(255,255,255,0.1)",
				backdropFilter: "blur(30px)",
				":hover": {
					backgroundColor: "rgba(255,255,255,0.3)",
				},
			},
		},
	},
	MuiLink: {
		styleOverrides: {
			root: {
				color: "#EEEEEE",
				textDecorationColor: "#EEEEEE",
			},
		},
	},
	MuiBadge: {
		styleOverrides: {
			badge: {
				height: 10,
				minWidth: 10,
				padding: 0,
			},
		},
	},
};
