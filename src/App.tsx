import { useState } from "react";
import { css } from "../styled-system/css";
import { ThemeDrawer } from "./components/theme/theme-drawer";
import { ThemeConfigDialog } from "./components/theme/theme-config-dialog";



function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      className={css({
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      })}>
      <h2 className={css({ color: "red", fontSize: "2rem" })}>Hello</h2>
      {/* <ThemeDrawer  /> */}
      <ThemeConfigDialog panda={<Code code={pandaConfig} lang="ts" theme="panda"/>} tailwind={<Code code={tailwindConfig} lang="ts" theme="tailwind"/>}/>
    </div>
  );
}

export default App;


const Code = ({ code, lang, theme, slot }: { code: string; lang: string; theme: string; slot?: string }) => {
  return (
    <div>
      <pre>
        <code className={`language-${lang} ${theme}`}>{code}</code>
      </pre>
      {/* Assuming slot is used for something specific */}
      {slot && <div>Slot: {slot}</div>}
    </div>
  );
};

export const pandaConfig = `import { defineConfig } from '@pandacss/dev'
import { createPreset } from '@park-ui/panda-preset'

export default defineConfig({
  preflight: true,
  presets: [
    '@pandacss/preset-base',
    createPreset({
      accentColor: '__ACCENT_COLOR__',
      grayColor: '__GRAY_COLOR__',
      borderRadius: '__BORDER_RADIUS__',
    }),
  ],
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  jsxFramework: '__JS_FRAMEWORK__',
  outdir: 'styled-system',
})
`;

export const tailwindConfig = `import { parkwindPlugin } from '@park-ui/tailwind-plugin'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [parkwindPlugin],
  parkUI: {
    accentColor: '__ACCENT_COLOR__',
    grayColor: '__GRAY_COLOR__',
    borderRadius: '__BORDER_RADIUS__',
  },
  darkMode: ['class'],
}

export default config
`;
