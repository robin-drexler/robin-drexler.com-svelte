---
layout: post
title: '[TIL] form html5 attribute for nested forms'
date: 2014-10-07 19:00:53
permalink: /2014/10/07/form-attribute.html
---

## Explanation

> A form-associated element can have a relationship with a form element, which is called the element's form owner. If a form-associated element is not associated with a form element, its form owner is said to be null.
>
> A form-associated element is, by default, associated with its nearest ancestor form element (as described below), but, if it is reassociateable, may have a form attribute specified to override this.

[http://www.w3.org/TR/html5/forms.html#form-owner](http://www.w3.org/TR/html5/forms.html#form-owner)

This is useful for example to circumvent HTML's lack of support for nested forms.

## Example

```html
<!--
Send the forms and check your network tab
to see which data gets sent when submitting each form
-->

<form id="outer" action="/dev/null" method="POST" target="nowhere">
	<input name="belongs-to-outer" />
	<input type="submit" value="outer" />

	<!-- This imitates our nested form -->
	<div>
		<!-- binding the inputs to our fake form (form="inner")-->
		<input name="belongs-to-inner" form="inner" />
		<input type="submit" value="inner" form="inner" />
	</div>
</form>

<!-- The inner form actually placed outside to stay conform to the standards -->
<form id="inner" action="/dev/null" method="POST" target="nowhere"></form>

<!-- Just an iFrame where the forms get sent, because we do not want the page to change -->
<iframe name="nowhere" style="display:none"></iframe>
```

[Fiddle](https://jsfiddle.net/squarefoo/e1fomzft/3/)
