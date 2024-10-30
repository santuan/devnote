export const initialProjectData = {
  body: '<p><code>Status Alpha - Use only for testing or learning purposes</code></p><p>DevNote is a <code>PWA</code> (Progressive Web App) for creating notes that uses the local storage capabilities of browsers to work without needing an internet connection.</p><h2>Local Installation</h2><pre spellcheck=\"false\"><code class=\"language-bash\">git clone https://github.com/santuan/devnote\nnpm install\n## Development Environment\nnpm run dev\n## Build optimized application\nnpm run build\nnpm run preview</code></pre><h4>You can also open it in StackBlitz</h4><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://stackblitz.com/~/github.com/santuan/devnote\">https://stackblitz.com/~/github.com/santuan/devnote</a><br><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://stackblitz.com/~/github.com/santuan/devnote?startScript=devnote\">https://stackblitz.com/~/github.com/santuan/devnote?startScript=devnote</a></p><h2><strong>Technologies</strong></h2><h3><strong>Backend</strong></h3><ul><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://dexie.org/\">Dexie.js</a> A minimalist wrapper for IndexedDB.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://rxjs.dev/\">RxJS</a> Reactive Extensions for modern JavaScript.</p></li></ul><h3>Frontend</h3><ul><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vuejs.org/guide/introduction.html#what-is-vue\">Vue.js</a> 💚</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vueuse.org/\">VueUse</a> Utility collection for Vue.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://www.radix-vue.com/\">RadixVue</a> Accessible components for building design systems and web applications.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://pinia.vuejs.org/\">Pinia</a> State management.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://shiki.style/guide/install\">Shiki</a> Syntax highlighting.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://tailwindcss.com/\">TailwindCSS</a> 💙</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://tiptap.dev/product/editor\">TipTap</a> Rich text editor.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://github.com/francoischalifour/medium-zoom\">MediumZoom</a> To enlarge images (preview mode only).</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://driverjs.com/docs/installation\">Driver.js</a> For product tours.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vue-sonner.vercel.app/\">Vue-Sooner</a> - Floating notifications.</p></li></ul><h2>Keyboard Shortcuts</h2><ul><li><p><code>Ctrl+Alt+P</code> Toggle between edit or preview mode.</p></li><li><p><code>Ctrl+Alt+O</code> Command bar to navigate documents.</p></li><li><p><code>Ctrl+M</code> Collapse menu.</p></li><li><p><code>Ctrl+Alt+I</code> Import DB</p></li><li><p><code>Ctrl+Alt+E</code> Export DB</p></li><li><p><code>Ctrl+Alt+RightArrow</code> Expand edit area.</p></li><li><p><code>Ctrl+Alt+LeftArrow</code> Collapse edit area.</p></li><li><p><code>Shift+Delete</code> Delete current document</p></li></ul><h2><strong>Rich Text Editor</strong></h2><p>The app features a powerful rich text editor.</p><ul><li><p><code>Code blocks</code> - Syntax highlighting for over 250 languages.</p></li><li><p><code>Text formatting</code> - links, bold, italic, underline, alignment, lists, quotes, and links.</p></li><li><p><code>Images</code> Can be inserted as Base64 or via external URLs (not available offline)</p></li><li><p><code>Videos</code> Can be embedded from YouTube or loaded by external URL (not available offline)</p></li></ul><h3><strong>Interface</strong></h3><ul><li><p>Customizable color themes.</p></li><li><p>Light/Dark/System mode.</p></li><li><p>Quick navigation between notes with command bar and actions.</p></li><li><p>Document preview</p></li><li><p>Notifications</p></li></ul><h3><strong>Additional Features</strong></h3><ul><li><p>Ability to copy and paste formatted text.</p></li><li><p>Database export and import in <code>json</code> format (only exports from the app).</p></li><li><p>Auto-save of documents once created.</p></li><li><p>Mark documents as <code>fixed</code> or <code>completed</code>.</p></li><li><p><a target=\"_blank\" rel=\"noopener\" class=\"px-1 underline-offset-2 text-primary cursor-pointer hover:text-primary/80\" href=\"https://vueuse.org/core/useMagicKeys/\">useMagicKeys</a> Keyboard shortcuts for common actions.</p></li></ul><h3><strong>Focus on Accessibility and UX</strong></h3><p>Accessible components using Radix Vue.</p><ul><li><p><code>Focused elements</code> Design focused on highlighting</p></li><li><p><code>Color contrasts</code> <em>In progress for all 5 themes</em></p></li><li><p><code>ARIA</code> <em>In progress</em></p></li><li><p><code>Responsive</code> Responsive design to adapt to all devices.</p></li><li><p><code>Tooltips</code> for main actions.</p></li><li><p><code>Focus Trap</code></p></li><li><p><code>Tabs</code> Navigation</p></li><li><p><code>Esc</code> To close dialogs, dropdowns,</p></li><li><p><code>Arrow keys</code> Move with arrow keys in menus and dropdowns (e.g., theme selector)</p></li></ul><h2>🤓 Little big details</h2><ul><li><p>Favicon changes with color theme.</p></li><li><p>Option to change mouse pointer.</p></li><li><p>Dragging files to the sidebar (exports from this app in <code>json</code> format) imports the database upon release.</p></li><li><p>When editing the DB name, click outside to confirm.</p></li><li><p>And more things...</p></li></ul><p><br></p>',
  name: "Introduction to DevNote",
  checked: false,
  fixed: true,
};