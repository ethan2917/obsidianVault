---
banner: "![[Weekly Banner.jpg]]"
banner_icon: 🗓️
---

# <% tp.date.now("YYYY-MM [Week] WW") %>

[[<% tp.date.now("YYYY [Week] WW", -7) %>|↶ Previous Week]] | [[<% tp.date.now("YYYY [Week] WW", 7) %>|Following Week ↷]]

> [!METADATA]-
> Created:: [[<% tp.date.now('YYYY-MM-DD') %>]] <% tp.date.now('HH:mm') %>
> Updated:: <% tp.date.now('YYYY-MM-DD HH:mm') %>
> ID:: <% tp.date.now('YYYYMMDDHHmmss') %>

**Table of Contents:**
```toc
style: number
```

___

## Memos
- [[<% tp.date.weekday("YYYY-MM-DD", 0) %>|Monday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 0) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 1) %>|Tuesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 1) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 2) %>|Wednesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 2) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 3) %>|Thursday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 3) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 4) %>|Friday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 4) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 5) %>|Saturday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 5) %>#^memo-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 6) %>|Sunday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 6) %>#^memo-link]]

## Work Log
- [[<% tp.date.weekday("YYYY-MM-DD", 0) %>|Monday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 0) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 1) %>|Tuesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 1) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 2) %>|Wednesday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 2) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 3) %>|Thursday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 3) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 4) %>|Friday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 4) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 5) %>|Saturday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 5) %>#^work-link]]
- [[<% tp.date.weekday("YYYY-MM-DD", 6) %>|Sunday]]
	![[<% tp.date.weekday("YYYY-MM-DD", 6) %>#^work-link]] 

## Overview
### Week Statistics
```dataviewjs
const daysPath = dv.current().file.folder;

const attributes = {
	'panic': {
		label: 'Panic',
		average: 10,
	},
	'money-spent': {
		label: 'Money Spent',
		backgroundColor: 'rgba(85, 174, 229, 0.2)',
		borderColor: 'rgba(85, 174, 229, 1)',
		average: 20,
	},
	'prayer': {
		label: 'Prayer',
		backgroundColor: 'rgba(255, 211, 101, 0.2)',
		borderColor: 'rgba(255, 211, 101, 1)',
		average: 5,
	},
	'steps': {
		label: 'Steps',
		backgroundColor: 'rgba(141, 82, 188, 0.2)',
		borderColor: 'rgba(141, 82, 188, 1)',
		average: 10000,
	},
	'hours-worked': {
		label : 'Hours Worked',
		backgroundColor: 'rgba(143, 208, 50, 0.2)',
		borderColor: 'rgba(143, 208, 50, 1)',
		average: 6
	},
};

const date = "<% tp.date.now('YYYY-MM-DD') %>";

customJS.DvCharts.renderWeeklyChart({
	dv,
	context: this,
	daysPath: '02 Personal/02.01 Periodic Notes/<% tp.date.now("YYYY") %>/Daily/<%tp.date.now("MM MMMM")%>',
	attributes,
	type: 'average',
	date
})
```

```dataview
TABLE WITHOUT ID
	link(file.name) as "Day",
	feeling AS "💭",
	money-spent AS "💸",
	panic AS "🌪️",
	prayer AS "🕋",
	steps AS "👣",
	hours-worked AS "✏️"
FROM "Home/Focus Areas/Me/Weekly Notes"
WHERE week = [[<% tp.date.now("YYYY [Week] WW") %>]]
SORT file.name ASC
```