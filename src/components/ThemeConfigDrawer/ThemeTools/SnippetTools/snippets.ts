import { SnippetModification } from "./types"
import { grey } from "@material-ui/core/colors"
import { defaultTheme } from "src/siteTheme"

const baseSnippets: Array<SnippetModification> = [
  {
    title: "Spacing",
    info: "Change the spacing created by theme.spacing()",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "spacing", value: 8 }],
  },
  {
    title: "Right-To-Left",
    info: "Change the direction of the Material-UI components to RTL",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "direction", value: "rtl" }],
  },
  {
    title: "Border Radius",
    configs: [{ path: "shape.borderRadius", value: 4 }],
  },
]

const styleSnippets: Array<SnippetModification> = [
  {
    title: "iOS Switches",
    configs: [
      {
        path: "overrides.MuiSwitch",
        value: {
          root: {
            width: 42,
            height: 26,
            padding: 0,
            margin: 8,
          },
          switchBase: {
            padding: 1,
            "&$checked, &$colorPrimary$checked, &$colorSecondary$checked": {
              transform: "translateX(16px)",
              color: "#fff",
              "& + $track": {
                opacity: 1,
                border: "none",
              },
            },
          },
          thumb: {
            width: 24,
            height: 24,
          },
          track: {
            borderRadius: 26 / 2,
            border: `1px solid ${grey[400]}`,
            backgroundColor: grey[50],
            opacity: 1,
            transition: defaultTheme.transitions.create([
              "background-color",
              "border",
            ]),
          },
        },
      },
    ],
  },
]

const propSnippets: Array<SnippetModification> = [
  {
    title: "Disable Ripple",
    configs: [{ path: "props.MuiButtonBase.disableRipple", value: true }],
  },
  {
    title: "Dense Lists, Tables, Menus",
    configs: [
      { path: "props.MuiList.dense", value: true },
      { path: "props.MuiMenuItem.dense", value: true },
      { path: "props.MuiTable.size", value: "small" },
    ],
  },
  {
    title: "Dense Buttons, Inputs",
    configs: [
      { path: "props.MuiButton.size", value: "small" },
      { path: "props.MuiButtonGroup.size", value: "small" },
      { path: "props.MuiCheckbox.size", value: "small" },
      { path: "props.MuiFab.size", value: "small" },
      { path: "props.MuiFormControl.margin", value: "dense" },
      { path: "props.MuiFormControl.size", value: "small" },
      { path: "props.MuiFormHelperText.margin", value: "dense" },
      { path: "props.MuiIconButton.size", value: "small" },
      { path: "props.MuiInputBase.margin", value: "dense" },
      { path: "props.MuiInputLabel.margin", value: "dense" },
      { path: "props.MuiRadio.size", value: "small" },
      { path: "props.MuiSwitch.size", value: "small" },
      { path: "props.MuiTextField.margin", value: "dense" },
      { path: "props.MuiTextField.size", value: "small" },
    ],
  },
  {
    title: "Tooltip arrows",
    configs: [{ path: "props.MuiTooltip.arrow", value: true }],
  },
]

export default [...baseSnippets, ...styleSnippets, ...propSnippets]