export const initialProjectData = {
  body: '<p><code>Status playground - Disclaimer: I m learning Vue 😊. That said - Feel free to use it for testing and learning purposes</code></p><p>DevNote is a <code>PWA</code> (Progressive Web App) for creating notes that uses the local storage capabilities of browsers to work without needing an internet connection after first load.</p><h2>Local Installation</h2><pre spellcheck=\"false\"><code class=\"language-bash\">git clone https://github.com/santuan/devnote\nnpm install</code></pre><pre spellcheck=\"false\"><code class=\"language-json\">\"scripts\": {\n    \"dev\": \"vite\",\n    \"build\": \"vite build\",\n    \"preview\": \"vite preview\",\n    \"lint\": \"eslint --fix\",\n    \"devnote\": \"npm run build &amp;&amp; npm run preview\"\n },\n</code></pre><h3>Developer mode</h3><pre spellcheck=\"false\"><code class=\"language-bash\">npm run dev</code></pre><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://stackblitz.com/~/github.com/santuan/devnote\">https://stackblitz.com/~/github.com/santuan/devnote</a></p><h3>Production mode</h3><pre spellcheck=\"false\"><code class=\"language-bash\">npm run build\nnpm run preview</code></pre><h4>Production mode on StackBlitz</h4><p>Add <code>?startScript=devnote</code> to the StackBlitz url</p><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://stackblitz.com/~/github.com/santuan/devnote?startScript=devnote\">https://stackblitz.com/~/github.com/santuan/devnote?startScript=devnote</a></p><p>Search for the <code>Open in a new tab</code> button and then click <code>connect to project</code> on the new created tab.</p><p>After that I suppose an IndexdedDb is created on your Stackblitz session with it s own container in your own browser.</p><p><em>Something like this: </em><code>https://devnote-????--4173--????????.[this i don t now how is generated].webcontainer.io/</code></p><h2><strong>Frontend and Backend</strong></h2><h3><strong>Backend</strong></h3><ul><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://dexie.org/\">Dexie.js</a> A minimalist wrapper for IndexedDB.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://rxjs.dev/\">RxJS</a> Reactive Extensions for modern JavaScript.</p></li></ul><h3>Frontend</h3><ul><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vuejs.org/guide/introduction.html#what-is-vue\">Vue.js</a> 💚</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vueuse.org/\">VueUse</a> Utility collection for Vue.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://www.radix-vue.com/\">RadixVue</a> Accessible components for building design systems and web applications.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://pinia.vuejs.org/\">Pinia</a> State management.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://shiki.style/guide/install\">Shiki</a> Syntax highlighting.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://tailwindcss.com/\">TailwindCSS</a> A utility-first CSS framework</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://tiptap.dev/product/editor\">TipTap</a> Rich text editor.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://github.com/francoischalifour/medium-zoom\">MediumZoom</a> To enlarge images (preview mode only).</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://driverjs.com/docs/installation\">Driver.js</a> For product tours.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vue-sonner.vercel.app/\">Vue-Sooner</a> Floating notifications.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vue-i18n.intlify.dev/\">Vue I18n</a> - Internationalization plugin for Vue.js</p></li></ul><h2>Keyboard Shortcuts</h2><ul><li><p><code>Ctrl Alt O</code> Command bar to navigate documents.</p></li><li><p><code>Ctrl Shift Alt ←</code>  Focus Sidebar</p></li><li><p><code>Ctrl Shift Alt →</code>  Focus Title</p></li><li><p><code>Ctrl Shift Alt ↓</code>  Focus Editor</p></li><li><p><code>Ctrl Alt P</code> Toggle between edit or preview mode.</p></li><li><p><code>Ctrl M</code> Collapse menu.</p></li><li><p><code>Ctrl Alt I</code> Import DB</p></li><li><p><code>Ctrl Alt E</code> Export DB</p></li><li><p><code>Ctrl Alt .</code> Expand/collapse edit area.</p></li><li><p><code>Shift Delete</code> Delete current document</p></li></ul><h2><strong>Rich Text Editor</strong></h2><p>The app features a powerful rich text editor.</p><ul><li><p><code>Code blocks</code> Syntax highlighting for over 250 languages.</p></li><li><p><code>Text formatting</code> links, bold, italic, underline, alignment, lists, quotes, and links.</p></li><li><p><code>Images</code> Can be inserted as Base64 or via external URLs (not available offline)</p></li><li><p><code>Videos</code> Can be embedded from YouTube or loaded by external URL (not available offline)</p></li></ul><h3><strong>Interface</strong></h3><ul><li><p>Customizable color themes.</p></li><li><p>Light/Dark/System mode.</p></li><li><p>Quick navigation between notes with command bar and actions.</p></li><li><p>Document preview</p></li><li><p>Notifications</p></li></ul><h3><strong>Additional Features</strong></h3><ul><li><p>Ability to copy and paste formatted text.</p></li><li><p>Database export and import in <code>json</code> format (only exports from the app).</p></li><li><p>Auto-save of documents once created.</p></li><li><p>Mark documents as <code>fixed</code> and <code>completed</code>.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vueuse.org/core/useMagicKeys/\">useMagicKeys</a> Keyboard shortcuts for common actions.</p></li></ul><h3><strong>Focus on Accessibility and UX</strong></h3><p>Accessible components using Radix Vue.</p><ul><li><p><code>Focused elements</code> Design focused on highlighting</p></li><li><p><code>Color contrasts</code></p></li><li><p><code>ARIA</code></p></li><li><p><code>Responsive</code> Responsive design to adapt to all devices.</p></li><li><p><code>Tooltips</code> for main actions.</p></li><li><p><code>Focus Trap</code></p></li><li><p><code>Tabs</code> Navigation</p></li><li><p><code>Esc</code> To close dialogs, dropdowns,</p></li><li><p><code>Arrow keys</code> Move with arrow keys in menus and dropdowns (e.g., editor toolbar, theme selector)</p></li></ul><h2>Little big details 🤓</h2><ul><li><p>Favicon changes with color theme.</p></li><li><p>Option to change mouse pointer.</p></li><li><p>Dragging files to the sidebar (exported from this app in <code>json</code> format) imports the database upon release.</p></li><li><p>When editing the DB name, clicking outside triggers the confirm function.</p></li><li><p>Device detection (Touch / mouse and keyboard) for hiding the cursor setting as well as the tour.</p></li><li><p>A lot of focus</p></li><li><p>And more things that i can remember right now...</p></li></ul><p><br></p>',
  name: "Introduction to DevNote",
  checked: false,
  fixed: true,
};