/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => Things3Plugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/url.ts
function urlEncode(line) {
  line = encodeURIComponent(line);
  return line;
}
function constructDeeplink(fileName, vaultName) {
  const url = `obsidian://open?vault=${vaultName}&file=${fileName}`;
  return url;
}

// src/things3.ts
function createTodo(todo, deepLink) {
  const url = `things:///add?title=${todo.title}&notes=${deepLink}&when=${todo.date}&x-success=obsidian://things-sync-id&tags=${todo.tags}`;
  window.open(url);
}
function updateTodo(todoId, completed, authToken) {
  const url = `things:///update?id=${todoId}&completed=${completed}&auth-token=${authToken}`;
  window.open(url);
}
function createTodoFromNote(todo, deepLink) {
  const url = `things:///add?title=${todo.title}&notes=${deepLink}&when=${todo.date}`;
  window.open(url);
}

// src/extractor.ts
function extractDate(line) {
  const regex = /^(19|20)\d\d([- /.])(0[1-9]|1[012])\2(0[1-9]|[12][0-9]|3[01])/;
  let date = "";
  const res = line.match(regex);
  if (res) {
    date = res[0];
  }
  return date;
}
function extractTitle(line) {
  const regex = /[^#\s\-\[\]*](.*)/gs;
  const content = line.match(regex);
  let title = "";
  if (content != null) {
    title = content[0];
  }
  return title;
}
function extractTags(line, setting_tags) {
  const regex = /#([^\s]+)/gs;
  const array = [...line.matchAll(regex)];
  const tag_array = array.map((x) => x[1]);
  if (setting_tags.length > 0) {
    tag_array.push(setting_tags);
  }
  line = line.replace(regex, "");
  const tags = tag_array.join(",");
  return tags;
}
function extractTarget(line) {
  const regexId = /id=(\w+)/;
  const id = line.match(regexId);
  let todoId;
  if (id != null) {
    todoId = id[1];
  } else {
    todoId = "";
  }
  const regexStatus = /\[(.)\]/;
  const status = line.match(regexStatus);
  let afterStatus;
  if (status && status[1] == " ") {
    afterStatus = "true";
  } else {
    afterStatus = "false";
  }
  return { todoId, afterStatus };
}

// src/main.ts
function getCurrentLine(editor, view) {
  const lineNumber = editor.getCursor().line;
  const lineText = editor.getLine(lineNumber);
  return lineText;
}
var DEFAULT_SETTINGS = {
  authToken: "",
  defaultTags: ""
};
function contructTodo(line, settings, fileName) {
  line = line.trim();
  const tags = extractTags(line, settings.defaultTags);
  line = line.replace(/#([^\s]+)/gs, "");
  const todo = {
    title: extractTitle(line),
    tags,
    date: extractDate(fileName)
  };
  return todo;
}
var Things3Plugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new Things3SyncSettingTab(this.app, this));
    this.registerObsidianProtocolHandler("things-sync-id", async (id) => {
      const todoID = id["x-things-id"];
      const view = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
      if (view == null) {
        return;
      } else {
        const editor = view.editor;
        const currentLine = getCurrentLine(editor, view);
        const firstLetterIndex = currentLine.search(/[^\s#\-\[\]*]/);
        const line = currentLine.substring(firstLetterIndex, currentLine.length);
        const editorPosition = view.editor.getCursor();
        const lineLength = view.editor.getLine(editorPosition.line).length;
        const startRange = {
          line: editorPosition.line,
          ch: firstLetterIndex
        };
        const endRange = {
          line: editorPosition.line,
          ch: lineLength
        };
        if (firstLetterIndex > 0) {
          view.editor.replaceRange(`[${line}](things:///show?id=${todoID})`, startRange, endRange);
        } else {
          view.editor.replaceRange(`- [ ] [${line}](things:///show?id=${todoID})`, startRange, endRange);
        }
      }
    });
    this.addCommand({
      id: "create-things-todo",
      name: "Create Things Todo",
      editorCallback: (editor, view) => {
        const workspace = this.app.workspace;
        const vault = this.app.vault;
        const fileTitle = workspace.getActiveFile();
        if (fileTitle == null) {
          return;
        } else {
          let fileName = urlEncode(fileTitle.name);
          fileName = fileName.replace(/\.md$/, "");
          const vaultName = urlEncode(vault.getName());
          const obsidianDeepLink = constructDeeplink(fileName, vaultName);
          const encodedLink = urlEncode(obsidianDeepLink);
          const line = getCurrentLine(editor, view);
          const todo = contructTodo(line, this.settings, fileName);
          createTodo(todo, encodedLink);
        }
      }
    });
    this.addCommand({
      id: "toggle-things-todo",
      name: "Toggle Things Todo",
      editorCallback: (editor, view) => {
        const workspace = this.app.workspace;
        const fileTitle = workspace.getActiveFile();
        if (fileTitle == null) {
          return;
        } else {
          const line = getCurrentLine(editor, view);
          const target = extractTarget(line);
          if (target.todoId == "") {
            new import_obsidian.Notice(`This is not a things3 todo`);
          } else {
            view.app.commands.executeCommandById("editor:toggle-checklist-status");
            updateTodo(target.todoId, target.afterStatus, this.settings.authToken);
            new import_obsidian.Notice(`${target.todoId} set completed:${target.afterStatus} on things3`);
          }
        }
      }
    });
    this.addCommand({
      id: "create-things-todo-from-note",
      name: "Create Things Todo from Note",
      editorCallback: (editor, view) => {
        const workspace = this.app.workspace;
        const vault = this.app.vault;
        const fileTitle = workspace.getActiveFile();
        if (fileTitle == null) {
          return;
        } else {
          let fileName = urlEncode(fileTitle.name);
          fileName = fileName.replace(/\.md$/, "");
          const vaultName = urlEncode(vault.getName());
          const obsidianDeepLink = constructDeeplink(fileName, vaultName);
          const encodedLink = urlEncode(obsidianDeepLink);
          const todo = contructTodo(fileName, this.settings, fileName);
          createTodoFromNote(todo, encodedLink);
        }
      }
    });
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var Things3SyncSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for Obsidian Things3 Sync." });
    new import_obsidian.Setting(containerEl).setName("Auth Token").setDesc("Require Things3 Auth Token for syncing Todo status; Get Auth Token			via Things3 -> Preferece -> General -> Enable things URL -> Manage.").addText((text) => text.setPlaceholder("Leave Things3 Auth Token here").setValue(this.plugin.settings.authToken).onChange(async (value) => {
      this.plugin.settings.authToken = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian.Setting(containerEl).setName("Default Tags").setDesc("The default tags for Obsidian Todo; Using comma(,) 			to separate multiple tags; Leave this in blank for no default tags").addText((text) => text.setPlaceholder("Leave your tags here").setValue(this.plugin.settings.defaultTags).onChange(async (value) => {
      this.plugin.settings.defaultTags = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL3VybC50cyIsICJzcmMvdGhpbmdzMy50cyIsICJzcmMvZXh0cmFjdG9yLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBcHAsIEVkaXRvciwgTWFya2Rvd25WaWV3LCBFZGl0b3JQb3NpdGlvbiwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBOb3RpY2UgfSBmcm9tICdvYnNpZGlhbic7XG5cbmltcG9ydCB7XG5cdHVybEVuY29kZSxcblx0Y29uc3RydWN0RGVlcGxpbmtcbn0gZnJvbSAnLi91cmwnO1xuXG5pbXBvcnQge1xuXHRUb2RvSW5mbyxcblx0Y3JlYXRlVG9kbyxcblx0dXBkYXRlVG9kbyxcblx0Y3JlYXRlVG9kb0Zyb21Ob3RlXG59IGZyb20gJy4vdGhpbmdzMyc7XG5cbmltcG9ydCB7XG5cdGV4dHJhY3REYXRlLFxuXHRleHRyYWN0VGFncyxcblx0ZXh0cmFjdFRhcmdldCxcblx0ZXh0cmFjdFRpdGxlXG59IGZyb20gJy4vZXh0cmFjdG9yJ1xuXG4vLyBpbXBvcnQgeyByYW5nZUJ5U3RlcCwgUXVldWUgfSBmcm9tICcuL3V0aWxzJztcblxuZnVuY3Rpb24gZ2V0Q3VycmVudExpbmUoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykge1xuXHRjb25zdCBsaW5lTnVtYmVyID0gZWRpdG9yLmdldEN1cnNvcigpLmxpbmVcblx0Y29uc3QgbGluZVRleHQgPSBlZGl0b3IuZ2V0TGluZShsaW5lTnVtYmVyKVxuXHRyZXR1cm4gbGluZVRleHRcbn1cblxuaW50ZXJmYWNlIFBsdWdpblNldHRpbmdzIHtcblx0YXV0aFRva2VuOiBzdHJpbmcsXG5cdGRlZmF1bHRUYWdzOiBzdHJpbmdcbn1cblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUGx1Z2luU2V0dGluZ3MgPSB7XG5cdGF1dGhUb2tlbjogJycsXG5cdGRlZmF1bHRUYWdzOiAnJ1xufVxuXG5mdW5jdGlvbiBjb250cnVjdFRvZG8obGluZTogc3RyaW5nLCBzZXR0aW5nczogUGx1Z2luU2V0dGluZ3MsIGZpbGVOYW1lOiBzdHJpbmcpe1xuXHRsaW5lID0gbGluZS50cmltKCk7XG5cdGNvbnN0IHRhZ3MgPSBleHRyYWN0VGFncyhsaW5lLCBzZXR0aW5ncy5kZWZhdWx0VGFncyk7XG5cblx0bGluZSA9IGxpbmUucmVwbGFjZSgvIyhbXlxcc10rKS9ncywgJycpO1xuXG5cdGNvbnN0IHRvZG86IFRvZG9JbmZvID0ge1xuXHRcdHRpdGxlOiBleHRyYWN0VGl0bGUobGluZSksXG5cdFx0dGFnczogdGFncyxcblx0XHRkYXRlOiBleHRyYWN0RGF0ZShmaWxlTmFtZSlcblx0fVxuXG5cdHJldHVybiB0b2RvO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGluZ3MzUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcblx0c2V0dGluZ3M6IFBsdWdpblNldHRpbmdzO1xuXG5cdGFzeW5jIG9ubG9hZCgpIHtcblx0XHQvLyBRdWV1ZSBmb3IgdXBkYXRlIG11bHRpIGxpZW5zXG5cdFx0Ly8gY29uc3QgdG9DaGFuZ2UgPSBuZXcgUXVldWU8bnVtYmVyPigpO1xuXG5cdFx0Ly8gU2V0dXAgU2V0dGluZ3MgVGFiXG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFRoaW5nczNTeW5jU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG5cdFx0Ly8gUmVnaXN0ZXIgUHJvdG9jb2wgSGFuZGxlclxuXHRcdHRoaXMucmVnaXN0ZXJPYnNpZGlhblByb3RvY29sSGFuZGxlcihcInRoaW5ncy1zeW5jLWlkXCIsIGFzeW5jIChpZCkgPT4ge1xuXHRcdFx0Y29uc3QgdG9kb0lEID0gaWRbJ3gtdGhpbmdzLWlkJ107XG5cdFx0XHRjb25zdCB2aWV3ID0gdGhpcy5hcHAud29ya3NwYWNlLmdldEFjdGl2ZVZpZXdPZlR5cGUoTWFya2Rvd25WaWV3KTtcblx0XHRcdGlmICh2aWV3ID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc3QgZWRpdG9yID0gdmlldy5lZGl0b3Jcblx0XHRcdFx0Ly8gY29uc3QgbCA9IHRvQ2hhbmdlLmRlcXVldWUoKTtcblx0XHRcdFx0Ly8gZWRpdG9yLnNldEN1cnNvcihsKTtcblx0XHRcdFx0Y29uc3QgY3VycmVudExpbmUgPSBnZXRDdXJyZW50TGluZShlZGl0b3IsIHZpZXcpXG5cdFx0XHRcdGNvbnN0IGZpcnN0TGV0dGVySW5kZXggPSBjdXJyZW50TGluZS5zZWFyY2goL1teXFxzI1xcLVxcW1xcXSpdLyk7XG5cdFx0XHRcdGNvbnN0IGxpbmUgPSBjdXJyZW50TGluZS5zdWJzdHJpbmcoZmlyc3RMZXR0ZXJJbmRleCwgY3VycmVudExpbmUubGVuZ3RoKVxuXHRcdFx0XHRjb25zdCBlZGl0b3JQb3NpdGlvbiA9IHZpZXcuZWRpdG9yLmdldEN1cnNvcigpXG5cdFx0XHRcdGNvbnN0IGxpbmVMZW5ndGggPSB2aWV3LmVkaXRvci5nZXRMaW5lKGVkaXRvclBvc2l0aW9uLmxpbmUpLmxlbmd0aFxuXHRcdFx0XHRjb25zdCBzdGFydFJhbmdlOiBFZGl0b3JQb3NpdGlvbiA9IHtcblx0XHRcdFx0XHRsaW5lOiBlZGl0b3JQb3NpdGlvbi5saW5lLFxuXHRcdFx0XHRcdGNoOiBmaXJzdExldHRlckluZGV4XG5cdFx0XHRcdH1cblx0XHRcdFx0Y29uc3QgZW5kUmFuZ2U6IEVkaXRvclBvc2l0aW9uID0ge1xuXHRcdFx0XHRcdGxpbmU6IGVkaXRvclBvc2l0aW9uLmxpbmUsXG5cdFx0XHRcdFx0Y2g6IGxpbmVMZW5ndGhcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChmaXJzdExldHRlckluZGV4ID4gMCkge1xuXHRcdFx0XHRcdHZpZXcuZWRpdG9yLnJlcGxhY2VSYW5nZShgWyR7bGluZX1dKHRoaW5nczovLy9zaG93P2lkPSR7dG9kb0lEfSlgLCBzdGFydFJhbmdlLCBlbmRSYW5nZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmlldy5lZGl0b3IucmVwbGFjZVJhbmdlKGAtIFsgXSBbJHtsaW5lfV0odGhpbmdzOi8vL3Nob3c/aWQ9JHt0b2RvSUR9KWAsIHN0YXJ0UmFuZ2UsIGVuZFJhbmdlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gQ3JlYXRlIFRPRE8gQ29tbWFuZFxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XG5cdFx0XHRpZDogJ2NyZWF0ZS10aGluZ3MtdG9kbycsXG5cdFx0XHRuYW1lOiAnQ3JlYXRlIFRoaW5ncyBUb2RvJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHRjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2U7XG5cdFx0XHRcdGNvbnN0IHZhdWx0ID0gdGhpcy5hcHAudmF1bHQ7XG5cdFx0XHRcdGNvbnN0IGZpbGVUaXRsZSA9IHdvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKClcblx0XHRcdFx0aWYgKGZpbGVUaXRsZSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBmaWxlTmFtZSA9IHVybEVuY29kZShmaWxlVGl0bGUubmFtZSlcblx0XHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxuXHRcdFx0XHRcdGNvbnN0IHZhdWx0TmFtZSA9IHVybEVuY29kZSh2YXVsdC5nZXROYW1lKCkpO1xuXHRcdFx0XHRcdGNvbnN0IG9ic2lkaWFuRGVlcExpbmsgPSBjb25zdHJ1Y3REZWVwbGluayhmaWxlTmFtZSwgdmF1bHROYW1lKTtcblx0XHRcdFx0XHQvLyBjb25zdCBvYnNpZGlhbkRlZXBMaW5rID0gKHRoaXMuYXBwIGFzIGFueSkuZ2V0T2JzaWRpYW5VcmwoZmlsZVRpdGxlKVxuXHRcdFx0XHRcdGNvbnN0IGVuY29kZWRMaW5rID0gdXJsRW5jb2RlKG9ic2lkaWFuRGVlcExpbmspO1xuXHRcdFx0XHRcdGNvbnN0IGxpbmUgPSBnZXRDdXJyZW50TGluZShlZGl0b3IsIHZpZXcpO1xuXHRcdFx0XHRcdGNvbnN0IHRvZG8gPSBjb250cnVjdFRvZG8obGluZSwgdGhpcy5zZXR0aW5ncywgZmlsZU5hbWUpO1xuXHRcdFx0XHRcdGNyZWF0ZVRvZG8odG9kbywgZW5jb2RlZExpbmspXG5cblx0XHRcdFx0XHQvLyBsZXQgY3Vyc29yTGluZXM6IEFycmF5PG51bWJlcj47XG5cdFx0XHRcdFx0Ly8gaWYgKGVkaXRvci5zb21ldGhpbmdTZWxlY3RlZCgpKXtcblx0XHRcdFx0XHQvLyBcdGNvbnN0IHNlbGVjdGVkID0gZWRpdG9yLmxpc3RTZWxlY3Rpb25zKClbMF07XG5cdFx0XHRcdFx0Ly8gXHRjdXJzb3JMaW5lcyA9IHJhbmdlQnlTdGVwKHNlbGVjdGVkLmFuY2hvci5saW5lLCBzZWxlY3RlZC5oZWFkLmxpbmUsIDEpXG5cdFx0XHRcdFx0Ly8gfSBlbHNlIHtcblx0XHRcdFx0XHQvLyBcdGN1cnNvckxpbmVzID0gW2VkaXRvci5nZXRDdXJzb3IoKS5saW5lXVxuXHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHQvLyBmb3IgKGNvbnN0IGwgb2YgY3Vyc29yTGluZXMpIHtcblx0XHRcdFx0XHQvLyBcdGVkaXRvci5zZXRDdXJzb3IobCk7XG5cdFx0XHRcdFx0Ly8gXHRjb25zdCBsaW5lID0gZ2V0Q3VycmVudExpbmUoZWRpdG9yLCB2aWV3KTtcblx0XHRcdFx0XHQvLyBcdGNvbnN0IHRvZG8gPSBjb250cnVjdFRvZG8obGluZSwgdGhpcy5zZXR0aW5ncywgZmlsZU5hbWUpO1xuXHRcdFx0XHRcdC8vIFx0Y3JlYXRlVG9kbyh0b2RvLCBlbmNvZGVkTGluaylcblx0XHRcdFx0XHQvLyBcdHRvQ2hhbmdlLmVucXVldWUobCk7XG5cdFx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFRvZ2dsZSB0YXNrIHN0YXR1cyBhbmQgc3luYyB0byB0aGluZ3Ncblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICd0b2dnbGUtdGhpbmdzLXRvZG8nLFxuXHRcdFx0bmFtZTogJ1RvZ2dsZSBUaGluZ3MgVG9kbycsXG5cdFx0XHRlZGl0b3JDYWxsYmFjazogKGVkaXRvcjogRWRpdG9yLCB2aWV3OiBNYXJrZG93blZpZXcpID0+IHtcblx0XHRcdFx0Y29uc3Qgd29ya3NwYWNlID0gdGhpcy5hcHAud29ya3NwYWNlO1xuXHRcdFx0XHRjb25zdCBmaWxlVGl0bGUgPSB3b3Jrc3BhY2UuZ2V0QWN0aXZlRmlsZSgpXG5cdFx0XHRcdGlmIChmaWxlVGl0bGUgPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb25zdCBsaW5lID0gZ2V0Q3VycmVudExpbmUoZWRpdG9yLCB2aWV3KVxuXHRcdFx0XHRcdGNvbnN0IHRhcmdldCA9IGV4dHJhY3RUYXJnZXQobGluZSlcblx0XHRcdFx0XHRpZiAodGFyZ2V0LnRvZG9JZCA9PSAnJykge1xuXHRcdFx0XHRcdFx0bmV3IE5vdGljZShgVGhpcyBpcyBub3QgYSB0aGluZ3MzIHRvZG9gKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmlldy5hcHAuY29tbWFuZHMuZXhlY3V0ZUNvbW1hbmRCeUlkKFwiZWRpdG9yOnRvZ2dsZS1jaGVja2xpc3Qtc3RhdHVzXCIpXG5cdFx0XHRcdFx0XHR1cGRhdGVUb2RvKHRhcmdldC50b2RvSWQsIHRhcmdldC5hZnRlclN0YXR1cywgdGhpcy5zZXR0aW5ncy5hdXRoVG9rZW4pXG5cdFx0XHRcdFx0XHRuZXcgTm90aWNlKGAke3RhcmdldC50b2RvSWR9IHNldCBjb21wbGV0ZWQ6JHt0YXJnZXQuYWZ0ZXJTdGF0dXN9IG9uIHRoaW5nczNgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIFRvZ2dsZSB0YXNrIHN0YXR1cyBhbmQgc3luYyB0byB0aGluZ3Ncblx0XHR0aGlzLmFkZENvbW1hbmQoe1xuXHRcdFx0aWQ6ICdjcmVhdGUtdGhpbmdzLXRvZG8tZnJvbS1ub3RlJyxcblx0XHRcdG5hbWU6ICdDcmVhdGUgVGhpbmdzIFRvZG8gZnJvbSBOb3RlJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xuXHRcdFx0XHRjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLmFwcC53b3Jrc3BhY2U7XG5cdFx0XHRcdGNvbnN0IHZhdWx0ID0gdGhpcy5hcHAudmF1bHQ7XG5cdFx0XHRcdGNvbnN0IGZpbGVUaXRsZSA9IHdvcmtzcGFjZS5nZXRBY3RpdmVGaWxlKClcblx0XHRcdFx0aWYgKGZpbGVUaXRsZSA9PSBudWxsKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBmaWxlTmFtZSA9IHVybEVuY29kZShmaWxlVGl0bGUubmFtZSlcblx0XHRcdFx0XHRmaWxlTmFtZSA9IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKVxuXHRcdFx0XHRcdGNvbnN0IHZhdWx0TmFtZSA9IHVybEVuY29kZSh2YXVsdC5nZXROYW1lKCkpO1xuXHRcdFx0XHRcdGNvbnN0IG9ic2lkaWFuRGVlcExpbmsgPSBjb25zdHJ1Y3REZWVwbGluayhmaWxlTmFtZSwgdmF1bHROYW1lKTtcblx0XHRcdFx0XHRjb25zdCBlbmNvZGVkTGluayA9IHVybEVuY29kZShvYnNpZGlhbkRlZXBMaW5rKTtcblx0XHRcdFx0XHRjb25zdCB0b2RvID0gY29udHJ1Y3RUb2RvKGZpbGVOYW1lLCB0aGlzLnNldHRpbmdzLCBmaWxlTmFtZSk7XG5cdFx0XHRcdFx0Y3JlYXRlVG9kb0Zyb21Ob3RlKHRvZG8sIGVuY29kZWRMaW5rKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cbn1cblxuY2xhc3MgVGhpbmdzM1N5bmNTZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogVGhpbmdzM1BsdWdpbjtcblxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBUaGluZ3MzUGx1Z2luKSB7XG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xuXHRcdHRoaXMucGx1Z2luID0gcGx1Z2luO1xuXHR9XG5cblx0ZGlzcGxheSgpOiB2b2lkIHtcblx0XHRjb25zdCB7Y29udGFpbmVyRWx9ID0gdGhpcztcblxuXHRcdGNvbnRhaW5lckVsLmVtcHR5KCk7XG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdTZXR0aW5ncyBmb3IgT2JzaWRpYW4gVGhpbmdzMyBTeW5jLid9KTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdFx0LnNldE5hbWUoJ0F1dGggVG9rZW4nKVxuXHRcdFx0LnNldERlc2MoJ1JlcXVpcmUgVGhpbmdzMyBBdXRoIFRva2VuIGZvciBzeW5jaW5nIFRvZG8gc3RhdHVzOyBHZXQgQXV0aCBUb2tlblxcXG5cdFx0XHR2aWEgVGhpbmdzMyAtPiBQcmVmZXJlY2UgLT4gR2VuZXJhbCAtPiBFbmFibGUgdGhpbmdzIFVSTCAtPiBNYW5hZ2UuJylcblx0XHRcdC5hZGRUZXh0KHRleHQgPT4gdGV4dFxuXHRcdFx0XHQuc2V0UGxhY2Vob2xkZXIoJ0xlYXZlIFRoaW5nczMgQXV0aCBUb2tlbiBoZXJlJylcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dGhUb2tlbilcblx0XHRcdFx0Lm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucGx1Z2luLnNldHRpbmdzLmF1dGhUb2tlbiA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KSk7XG5cblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHRcdC5zZXROYW1lKCdEZWZhdWx0IFRhZ3MnKVxuXHRcdFx0LnNldERlc2MoJ1RoZSBkZWZhdWx0IHRhZ3MgZm9yIE9ic2lkaWFuIFRvZG87IFVzaW5nIGNvbW1hKCwpIFxcXG5cdFx0XHR0byBzZXBhcmF0ZSBtdWx0aXBsZSB0YWdzOyBMZWF2ZSB0aGlzIGluIGJsYW5rIGZvciBubyBkZWZhdWx0IHRhZ3MnKVxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XG5cdFx0XHRcdC5zZXRQbGFjZWhvbGRlcignTGVhdmUgeW91ciB0YWdzIGhlcmUnKVxuXHRcdFx0XHQuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGVmYXVsdFRhZ3MpXG5cdFx0XHRcdC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZWZhdWx0VGFncyA9IHZhbHVlO1xuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXHRcdFx0XHR9KSk7XG5cdH1cbn1cbiIsICJleHBvcnQgZnVuY3Rpb24gdXJsRW5jb2RlKGxpbmU6IHN0cmluZykge1xuXHRsaW5lID0gZW5jb2RlVVJJQ29tcG9uZW50KGxpbmUpXG5cdHJldHVybiBsaW5lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJ1Y3REZWVwbGluayhmaWxlTmFtZTogc3RyaW5nLCB2YXVsdE5hbWU6IHN0cmluZyl7XG5cdGNvbnN0IHVybCA9IGBvYnNpZGlhbjovL29wZW4/dmF1bHQ9JHt2YXVsdE5hbWV9JmZpbGU9JHtmaWxlTmFtZX1gO1xuXHRyZXR1cm4gdXJsO1xufVxuIiwgImV4cG9ydCBpbnRlcmZhY2UgVG9kb0luZm8ge1xuXHR0aXRsZTogc3RyaW5nLFxuXHR0YWdzOiBzdHJpbmcsXG5cdGRhdGU6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kbyh0b2RvOiBUb2RvSW5mbywgZGVlcExpbms6IHN0cmluZyl7XG5cdGNvbnN0IHVybCA9IGB0aGluZ3M6Ly8vYWRkP3RpdGxlPSR7dG9kby50aXRsZX0mbm90ZXM9JHtkZWVwTGlua30md2hlbj0ke3RvZG8uZGF0ZX0meC1zdWNjZXNzPW9ic2lkaWFuOi8vdGhpbmdzLXN5bmMtaWQmdGFncz0ke3RvZG8udGFnc31gO1xuXHR3aW5kb3cub3Blbih1cmwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvSWQ6IHN0cmluZywgY29tcGxldGVkOiBzdHJpbmcsIGF1dGhUb2tlbjogc3RyaW5nKXtcblx0Y29uc3QgdXJsID0gYHRoaW5nczovLy91cGRhdGU/aWQ9JHt0b2RvSWR9JmNvbXBsZXRlZD0ke2NvbXBsZXRlZH0mYXV0aC10b2tlbj0ke2F1dGhUb2tlbn1gO1xuXHR3aW5kb3cub3Blbih1cmwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb0Zyb21Ob3RlKHRvZG86IFRvZG9JbmZvLCBkZWVwTGluazogc3RyaW5nKXtcblx0Y29uc3QgdXJsID0gYHRoaW5nczovLy9hZGQ/dGl0bGU9JHt0b2RvLnRpdGxlfSZub3Rlcz0ke2RlZXBMaW5rfSZ3aGVuPSR7dG9kby5kYXRlfWA7XG5cdHdpbmRvdy5vcGVuKHVybCk7XG59XG4iLCAiXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERhdGUobGluZTpzdHJpbmcpIHtcblx0Y29uc3QgcmVnZXggPSAvXigxOXwyMClcXGRcXGQoWy0gLy5dKSgwWzEtOV18MVswMTJdKVxcMigwWzEtOV18WzEyXVswLTldfDNbMDFdKS9cblx0bGV0IGRhdGUgPSAnJztcblx0Y29uc3QgcmVzID0gbGluZS5tYXRjaChyZWdleCk7XG5cdGlmIChyZXMpIHtcbiAgICBkYXRlID0gcmVzWzBdO1xuICB9XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRpdGxlKGxpbmU6IHN0cmluZykge1xuXHRjb25zdCByZWdleCA9IC9bXiNcXHNcXC1cXFtcXF0qXSguKikvZ3Ncblx0Y29uc3QgY29udGVudCA9IGxpbmUubWF0Y2gocmVnZXgpO1xuXHRsZXQgdGl0bGUgPSAnJztcblx0aWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuXHRcdHRpdGxlID0gY29udGVudFswXVxuXHR9XG5cdFxuXHRyZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0VGFncyhsaW5lOiBzdHJpbmcsIHNldHRpbmdfdGFnczogc3RyaW5nKXtcblx0Y29uc3QgcmVnZXggPSAvIyhbXlxcc10rKS9nc1xuXHRjb25zdCBhcnJheSA9IFsuLi5saW5lLm1hdGNoQWxsKHJlZ2V4KV1cblx0Y29uc3QgdGFnX2FycmF5ID0gYXJyYXkubWFwKHggPT4geFsxXSlcblx0aWYgKHNldHRpbmdfdGFncy5sZW5ndGggPiAwKSB7XG5cdFx0dGFnX2FycmF5LnB1c2goc2V0dGluZ190YWdzKTtcblx0fVxuXHRsaW5lID0gbGluZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG5cdGNvbnN0IHRhZ3MgPSB0YWdfYXJyYXkuam9pbignLCcpXG5cdFxuXHRyZXR1cm4gdGFncztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUYXJnZXQobGluZTogc3RyaW5nKSB7XG5cdGNvbnN0IHJlZ2V4SWQgPSAvaWQ9KFxcdyspL1xuXHRjb25zdCBpZCA9IGxpbmUubWF0Y2gocmVnZXhJZCk7XG5cdGxldCB0b2RvSWQ6IHN0cmluZztcblx0aWYgKGlkICE9IG51bGwpIHtcblx0XHR0b2RvSWQgPSBpZFsxXTtcdFxuXHR9IGVsc2Uge1xuXHRcdHRvZG9JZCA9ICcnXG5cdH1cblxuXHRjb25zdCByZWdleFN0YXR1cyA9IC9cXFsoLilcXF0vXG5cdGNvbnN0IHN0YXR1cyA9IGxpbmUubWF0Y2gocmVnZXhTdGF0dXMpXG5cdGxldCBhZnRlclN0YXR1czogc3RyaW5nO1xuXHRpZiAoc3RhdHVzICYmIHN0YXR1c1sxXSA9PSAnICcpIHtcblx0XHRhZnRlclN0YXR1cyA9ICd0cnVlJ1xuXHR9IGVsc2Uge1xuXHRcdGFmdGVyU3RhdHVzID0gJ2ZhbHNlJ1xuXHR9XG5cblx0cmV0dXJuICB7dG9kb0lkLCBhZnRlclN0YXR1c31cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBcUc7OztBQ0E5RixtQkFBbUIsTUFBYztBQUN2QyxTQUFPLG1CQUFtQixJQUFJO0FBQzlCLFNBQU87QUFDUjtBQUVPLDJCQUEyQixVQUFrQixXQUFrQjtBQUNyRSxRQUFNLE1BQU0seUJBQXlCLGtCQUFrQjtBQUN2RCxTQUFPO0FBQ1I7OztBQ0ZPLG9CQUFvQixNQUFnQixVQUFpQjtBQUMzRCxRQUFNLE1BQU0sdUJBQXVCLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxpREFBaUQsS0FBSztBQUNuSSxTQUFPLEtBQUssR0FBRztBQUNoQjtBQUVPLG9CQUFvQixRQUFnQixXQUFtQixXQUFrQjtBQUMvRSxRQUFNLE1BQU0sdUJBQXVCLG9CQUFvQix3QkFBd0I7QUFDL0UsU0FBTyxLQUFLLEdBQUc7QUFDaEI7QUFFTyw0QkFBNEIsTUFBZ0IsVUFBaUI7QUFDbkUsUUFBTSxNQUFNLHVCQUF1QixLQUFLLGVBQWUsaUJBQWlCLEtBQUs7QUFDN0UsU0FBTyxLQUFLLEdBQUc7QUFDaEI7OztBQ2xCTyxxQkFBcUIsTUFBYTtBQUN4QyxRQUFNLFFBQVE7QUFDZCxNQUFJLE9BQU87QUFDWCxRQUFNLE1BQU0sS0FBSyxNQUFNLEtBQUs7QUFDNUIsTUFBSSxLQUFLO0FBQ04sV0FBTyxJQUFJO0FBQUEsRUFDYjtBQUNELFNBQU87QUFDUjtBQUVPLHNCQUFzQixNQUFjO0FBQzFDLFFBQU0sUUFBUTtBQUNkLFFBQU0sVUFBVSxLQUFLLE1BQU0s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