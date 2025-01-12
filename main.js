var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => Alintilar
});
var import_obsidian2 = __toModule(require("obsidian"));

// src/settingsTab.ts
var import_obsidian = __toModule(require("obsidian"));
var AlntSettingsTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    let { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Al\u0131nt\u0131lar Ayarlar\u0131" });
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 Bi\xE7imi").setDesc("Al\u0131nt\u0131 g\xF6r\xFCnt\xFClenme \u015Feklini bi\xE7imlendirme").addTextArea((text) => {
      text.setPlaceholder("Al\u0131nt\u0131 bi\xE7imi").setValue(this.plugin.settings.quoteFormat).onChange((value) => __async(this, null, function* () {
        console.log("Yeni Al\u0131nt\u0131 bi\xE7imi: " + value);
        let valid = value.contains("{author}") && value.contains("{content}");
        if (!valid) {
          new import_obsidian.Notice("Ge\xE7ersiz bi\xE7im! Hatal\u0131 {author} veya {content} alan");
          return;
        }
        this.plugin.settings.quoteFormat = value;
        yield this.plugin.saveSettings();
      }));
      text.inputEl.setAttr("rows", 4);
      text.inputEl.addClass("settings_area");
    });
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 Etiket Bi\xE7imi").setDesc("Al\u0131nt\u0131 etiketlerinin g\xF6r\xFCnt\xFClenme \u015Feklini bi\xE7imlendirme").addTextArea((text) => {
      text.setPlaceholder("Al\u0131nt\u0131 etiket bi\xE7imi").setValue(this.plugin.settings.quoteTagFormat).onChange((value) => __async(this, null, function* () {
        console.log("Yeni etiket al\u0131nt\u0131 bi\xE7imi: " + value);
        let valid = value.contains("{tags}");
        if (!valid) {
          new import_obsidian.Notice("Ge\xE7ersiz bi\xE7im! hatal\u0131 {tags} alan");
          return;
        }
        this.plugin.settings.quoteTagFormat = value;
        yield this.plugin.saveSettings();
      }));
      text.inputEl.setAttr("rows", 4);
      text.inputEl.addClass("settings_area");
    });
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 \u015Eablonu Yer Tutucusu").setDesc("\u015Eablondan not olu\u015Ftururken al\u0131nt\u0131 yer tutucusunun kullan\u0131lma \u015Feklini bi\xE7imlendirin").addText((text) => {
      text.setPlaceholder("Al\u0131nt\u0131 \u015Eablonu Yer Tutucusu").setValue(this.plugin.settings.quoteTemplatePlaceholder).onChange((value) => __async(this, null, function* () {
        console.log("Yeni Al\u0131nt\u0131 \u015Fablonu yer tutucusu: " + value);
        this.plugin.settings.quoteTemplatePlaceholder = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(containerEl).setName("Filtrelenmi\u015F Al\u0131nt\u0131 \u015Eablonu Yer Tutucusu").setDesc("\u015Eablondan not olu\u015Ftururken filtrelenmi\u015F al\u0131nt\u0131 yer tutucusunun kullan\u0131lma \u015Feklini bi\xE7imlendirin").addText((text) => {
      text.setPlaceholder("Filtrelenmi\u015F Al\u0131nt\u0131 \u015Fablonu yer tutucusu").setValue(this.plugin.settings.filteredQuoteTemplatePlaceholder).onChange((value) => __async(this, null, function* () {
        console.log("Yeni Filtrelenmi\u015F Al\u0131nt\u0131 \u015Fablonu yer tutucusu: " + value);
        this.plugin.settings.filteredQuoteTemplatePlaceholder = value;
        yield this.plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 etiketlerini G\xF6ster").setDesc("Al\u0131nt\u0131 etiketlerini g\xF6r\xFCnt\xFCle").addToggle((toggle) => toggle.setValue(this.plugin.settings.showTags).onChange((value) => __async(this, null, function* () {
      console.log("New Show tags: " + value);
      this.plugin.settings.showTags = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 Etiketleri Hashtagini G\xF6ster").setDesc("Al\u0131nt\u0131 etiketlerini # sembol\xFC ile g\xF6r\xFCnt\xFCleyin").addToggle((toggle) => toggle.setValue(this.plugin.settings.showTagHash).onChange((value) => __async(this, null, function* () {
      this.plugin.settings.showTagHash = value;
      yield this.plugin.saveSettings();
    })));
    new import_obsidian.Setting(containerEl).setName("Al\u0131nt\u0131 Yer Tutucu Aral\u0131\u011F\u0131").setDesc("Al\u0131nt\u0131 yer tutucu varl\u0131\u011F\u0131n\u0131 ve al\u0131nt\u0131 olu\u015Fturmay\u0131 kontrol etmek i\xE7in aral\u0131k").addSlider((toggle) => toggle.setLimits(5, 60, 1).setValue(this.plugin.settings.placeholderInterval).onChange((value) => __async(this, null, function* () {
      console.log("Yeni yertutucuAral\u0131\u011F\u0131: " + value);
      this.plugin.settings.placeholderInterval = value;
      yield this.plugin.saveSettings();
    })).setDynamicTooltip());
    const { moment } = window;
    const filters = filtersList;
    let dd = new import_obsidian.Setting(this.containerEl).setName("Al\u0131nt\u0131 Fitreleri").setDesc("Ge\xE7erli filtreler: " + this.plugin.getFilters(" , ")).addDropdown((dropdown) => {
      dropdown.addOption("None", "None");
      filters.forEach((filter, i) => {
        dropdown.addOption(filters[i], filter);
      });
      dropdown.onChange((val) => {
        if (val == "None") {
          this.plugin.settings.filter = ["None"];
        } else {
          if (this.plugin.settings.filter.includes(val)) {
            this.plugin.settings.filter = this.plugin.settings.filter.filter((i) => i !== val);
          } else {
            this.plugin.settings.filter.push(val);
          }
        }
        console.log(this.plugin.settings.filter);
        dd.setDesc("Ge\xE7erli filtre: " + this.plugin.getFilters(" , "));
        this.plugin.saveSettings();
      });
      dropdown.selectEl.setAttr("multiple", null);
    });
  }
};
var filtersList = [
  "Ya\u015F",
  "\u0130\u015F",
  "De\u011Fi\u015Fim",
  "Karakter",
  "Rekabet",
  "Muhafazak\xE2r",
  "Cesaret",
  "E\u011Fitim",
  "Etik",
  "Ba\u015Far\u0131s\u0131zl\u0131k",
  "\u0130nan\xE7",
  "Aile",
  "\xD6zg\xFCrl\xFCk",
  "Dostluk",
  "Gelecek",
  "C\xF6mertlik",
  "D\xE2hi",
  "\u015E\xFCk\xFCr",
  "Mutluluk",
  "Sa\u011Fl\u0131k",
  "Tarih",
  "Onur",
  "Mizah",
  "Hayal G\xFCc\xFC",
  "\u0130lham Verici",
  "Bilgi",
  "Liderlik",
  "Hayat",
  "Edebiyat",
  "Sevgi",
  "Matematik",
  "Fizik",
  "Kimya",
  "Motive Edici",
  "Tabiat",
  "F\u0131rsat",
  "Ac\u0131",
  "Azim",
  "Felsefe",
  "Siyaset",
  "G\xFC\xE7l\xFC S\xF6zler",
  "Atas\xF6z\xFC",
  "Din",
  "\xDCz\xFCnt\xFC",
  "Bilim",
  "Benlik",
  "Ki\u015Fisel Geli\u015Fim",
  "Sosyal Adalet",
  "Toplum",
  "Maneviyat",
  "Spor",
  "Aptall\u0131k",
  "Ba\u015Far\u0131",
  "Teknoloji",
  "Zaman",
  "Ho\u015Fg\xF6r\xFC",
  "Ger\xE7ek",
  "Erdem",
  "Sava\u015F",
  "Zay\u0131fl\u0131k",
  "Esenlik",
  "Bilgelik",
  "\xC7al\u0131\u015Fma",
  "AI",
  "Yapay Zeka"
];

// src/main.ts
var QUOTE_API_URL = "https://glitch.com/edit/#!/alintilar/alinti";
var MAX_TAG_CHARS = 25;
var DEFAULT_SETTINGS = {
  quoteFormat: `>[!quote] Al\u0131nt\u0131lar
	> {content}
> &mdash; <cite>{author}</cite>`,
  quoteTagFormat: `> ---
> {tags}
`,
  quoteTemplatePlaceholder: "{{Alnt}}",
  filteredQuoteTemplatePlaceholder: "{{fAlnt}}",
  showTags: false,
  showTagHash: true,
  placeholderInterval: 5,
  filter: []
};
var Alintilar = class extends import_obsidian2.Plugin {
  constructor() {
    super(...arguments);
    this.getMarkdownFromQuote = (qod) => {
      let text = this.settings.quoteFormat.replace("{content}", qod.quoteText).replace("{author}", qod.author);
      if (this.settings.showTags) {
        let tagSymb = "";
        if (this.settings.showTagHash) {
          tagSymb = "#";
        }
        let tags = "";
        if (qod.categories) {
          tags = qod.categories.split(",").map((t) => `${tagSymb}${t}`).join(", ");
        }
        let quoteTags = this.settings.quoteTagFormat.replace("{tags}", tags);
        text = text + "\n" + quoteTags;
      }
      return text;
    };
    this.sleep = (delay) => {
      return new Promise((resolve) => setTimeout(resolve, delay));
    };
    this.updateQuotePlaceholder = () => __async(this, null, function* () {
      if (this.started) {
        return;
      }
      this.started = true;
      const file = this.app.workspace.getActiveFile();
      let t = yield this.app.vault.read(file);
      if (t.includes(this.settings.quoteTemplatePlaceholder)) {
        while (t.search(this.settings.quoteTemplatePlaceholder) !== -1) {
          yield this.sleep(500);
          let qod = yield this.getRandomQuote();
          let quote = this.getMarkdownFromQuote(qod);
          t = t.replace(this.settings.quoteTemplatePlaceholder, quote);
        }
        this.app.vault.modify(file, t);
      }
      if (t.includes(this.settings.filteredQuoteTemplatePlaceholder)) {
        while (t.search(this.settings.filteredQuoteTemplatePlaceholder) !== -1) {
          yield this.sleep(500);
          let qod = yield this.getFilteredQuote();
          let quote = this.getMarkdownFromQuote(qod);
          t = t.replace(this.settings.filteredQuoteTemplatePlaceholder, quote);
        }
        this.app.vault.modify(file, t);
      }
      this.started = false;
    });
    this.getRandomQuote = () => __async(this, null, function* () {
      let qod = {
        quoteText: "Yine hata m\u0131 yapt\u0131!",
        author: "Britney Hatas\u0131 (beklenmeyen veya yanl\u0131\u015Fl\u0131kla ba\u015Fka bir \u015Feyin i\xE7ine kar\u0131\u015Fmas\u0131 durumlar\u0131)",
        categories: "error"
      };
      try {
        let response = yield fetch(`${QUOTE_API_URL}/random?dataset=quotable`);
        let result = yield response.json();
        if (!result.statusCode) {
          qod = result;
        }
      } catch (err) {
        console.log(err);
        new import_obsidian2.Notice(err.message);
      }
      return qod;
    });
    this.getFilteredQuote = () => __async(this, null, function* () {
      let qod = {
        quoteText: "Yine hata m\u0131 yapt\u0131!",
        author: "Britney Hatas\u0131 (beklenmeyen veya yanl\u0131\u015Fl\u0131kla ba\u015Fka bir \u015Feyin i\xE7ine kar\u0131\u015Fmas\u0131 durumlar\u0131)",
        categories: "error"
      };
      try {
        let filters = this.getFilters("|");
        let response = yield fetch(`${QUOTE_API_URL}/random?dataset=quotable&tags=${filters}`);
        let result = yield response.json();
        if (!result.statusCode) {
          qod = result;
        }
      } catch (err) {
        console.log(err);
        new import_obsidian2.Notice(err.message);
      }
      return qod;
    });
    this.getFilters = (sep) => {
      let f = this.settings.filter.filter((i) => i !== "None");
      return f.join(sep);
    };
  }
  onload() {
    return __async(this, null, function* () {
      console.log("Al\u0131nt\u0131lar eklentisi/plugin y\xFCkleniyor...");
      yield this.loadSettings();
      this.registerInterval(window.setInterval(() => this.updateQuotePlaceholder(), this.settings.placeholderInterval * 1e3));
      this.addCommand({
        id: "Alnt-random",
        name: "Rastgele Al\u0131nt\u0131 Ekle",
        editorCallback: (editor, view) => __async(this, null, function* () {
          let qod = yield this.getRandomQuote();
          editor.replaceSelection(this.getMarkdownFromQuote(qod));
        })
      });
      this.addCommand({
        id: "Alnt-tag",
        name: "Se\xE7ilen etikete/tag g\xF6re al\u0131nt\u0131 ekle",
        checkCallback: (checking) => {
          let markdownView = this.app.workspace.getActiveViewOfType(import_obsidian2.MarkdownView);
          if (markdownView) {
            if (!checking) {
              const sel = markdownView.editor.getSelection();
              const validSelection = sel && sel.length > 2;
              if (!validSelection) {
                return false;
              }
            }
            return true;
          }
          return true;
        },
        editorCallback: (editor, view) => __async(this, null, function* () {
          let qod = {
            quoteText: "Bu etiketi/tag bulam\u0131yor",
            author: "Etiket/Tag Hatas\u0131",
            categories: "error"
          };
          try {
            const sel = editor.getSelection();
            const validSelection = sel && sel.length > 2;
            if (!validSelection) {
              throw new Error("Ge\xE7ersiz etiket/tag");
            }
            const tag = sel.substr(0, MAX_TAG_CHARS).trim();
            let response = yield fetch(`${QUOTE_API_URL}/random?tags=${tag}`);
            let result = yield response.json();
            if (!result.statusCode) {
              qod = result;
            }
          } catch (err) {
            console.log(err);
            new import_obsidian2.Notice(err.message);
          }
          editor.replaceSelection(this.getMarkdownFromQuote(qod));
        })
      });
      this.addSettingTab(new AlntSettingsTab(this.app, this));
    });
  }
  onunload() {
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.settings);
    });
  }
};
