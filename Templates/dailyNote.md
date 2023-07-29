---
banner: "![[Daily Banner.jpg]]"
---

# <% tp.date.now("YYYY-MM-DD") %>’s Note

[[<% tp.date.yesterday("YYYY-MM-DD") %>|↶ Previous Day]] | [[<% tp.date.tomorrow("YYYY-MM-DD") %>|Following Day ↷]]

> [!METADATA]-
> - Created:: <% tp.date.now("YYYY-MM-DD @ HH:mm") %>
> - Updated:: <% tp.date.now("YYYY-MM-DD @ HH:mm") %>
> - ID:: <% tp.date.now('YYYYMMDDHHmm') %>
> - Week:: [[<% tp.date.now("YYYY [Week] WW") %>]]
> [!tip] Inspo
> ```dataviewjs
> let quotes = dv.pages("#inspo").file.lists.filter(q => q.text.includes("#inspo"));
> let log = ` _(${quotes.length} article(s) with #inspo )_`;
> if (quotes.length > 0) {
> 	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)].text;
> 	dv.paragraph(`${randomQuote}${log}`);
> 	} 
> 	else {
  dv.paragraph(`No quotes found.${log}`);
}


> [!example] Today's Notes
```dataview
table without id
file.link as Note,
file.folder as Folder,
file.mtime as "Last Modified"
FROM -"Dailies"
where file.mtime > (date(now) - dur(12 hours))
sort file.mtime desc
```

> [!todo] Upcoming Tasks



> [!abstract] Inbox

