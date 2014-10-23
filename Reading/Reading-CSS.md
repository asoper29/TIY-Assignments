######1
```CSS
background-color
```

* Declares the background color of an element

######2
```CSS
border-bottom-color
```

* Declares the bottom border color of an element

######3
```CSS
border-color
```

* Declares the full border color of an element

######4
```CSS
border-left-color
```

* Declares the left border color of an element

######5
```CSS
border-right-color
```

* Declares the right border color of an element

######6
```CSS
border-top-color
```

* Declares the top border color of an element

######7
```CSS
color
```

* Declares the color of all elements tagged

######8
```CSS
column-rule-color
```

* Declares the color of the rule between columns in a multi-column display or table

######9
```CSS
outline-color
```

* Declares the outline color of an element

######10
```CSS
text-decoration-color
```

* Declares the color for underlines, overlines, and strikethroughs

######11
```CSS
font-family

Examples:
1) font-family: Delicious;
2) font-family:verdana,sans-serif;
3) font-family:tahoma;
```
[Example 1 & 2](http://www.css3.info/preview/web-fonts-with-font-face/) | [Example 3](http://facebook.com)

* Allows for a prioritized list of fonts family names and/or generic family names (serif, sans-serif, cursive) to be
* specified for the selected element.

######12
```CSS
font-style

Examples: 
1) font-style: italic
2) font-style: bold italic;
3) font-style: normal;
```
[Example 1](http://en.wikipedia.org/wiki/Game_of_Thrones) | [Example 2 & 3](http://nicewebtype.com/notes/2009/10/30/how-to-use-css-font-face/)

* Allows italic or oblique faces to be selected within a font-family

######13
```CSS
font-size

Examples:
1) font-size:125%
2) font-size:113%
3) font-size:85%
```
[Example 1 - 3](http://en.wikipedia.org/wiki/Game_of_Thrones)

* Specifies the size of the font, specifically the desired height of glyphs from the font.

######14
```CSS
@font-face

Examples:
1) @font-face {
    font-family: 'MyWebFont';
     src: url('webfont.eot'); /* IE9 Compat Modes */
      src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('webfont.woff') format('woff'), /* Modern Browsers */
         url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
         url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
    }
2) @font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
   }
3) @font-face { font-family: Delicious; src: url('Delicious-Roman.otf'); } 
```
[Example 1](http://css-tricks.com/snippets/css/using-font-face/) | [Example 2](http://www.w3schools.com/cssref/css3_pr_font-face_rule.asp) | [Example 3](http://www.css3.info/preview/web-fonts-with-font-face/)

* Allows authors to specify online fonts to display text on their web pages.

######15
```CSS
font-weight

Examples:
1) font-weight:bold
2) font-weight:normal
3) font-weight: 700
```
[Example 1 & 2](http://en.wikipedia.org/wiki/Game_of_Thrones) | [Example 3](https://plus.google.com/)

* Specifies the weight or boldness of the font. Some fonts are only available in normal and bold.

######16
```CSS
text-align

Example:
1) text-align:center
2) text-align:left
3) text-align:right
```
[Example 1 & 2](http://en.wikipedia.org/wiki/Game_of_Thrones) | [Example 3](https://plus.google.com/)

* Describes how inline content like text is aligned in its parent block element.

######17
```CSS
text-align-last

Examples:
1) text-align-last: right;
2) text-align-last: center;
3) text-align-last: auto;
```
[Example 1](http://www.w3schools.com/cssref/css3_pr_text-align-last.asp) | [Example 2](http://blogs.adobe.com/webplatform/2014/02/25/improving-your-sites-visual-details-css3-text-align-last/) | [Example 3](http://www.cssportal.com/css-properties/text-align-last.php)

* Describes how the last line of a block or a line, right before a forced line break, is aligned. 

######18
```CSS
text-decoration

Examples:
1) text-decoration:none
2) text-decoration:underline
3) text-decoration:none!important
```
[Example 1](http://en.wikipedia.org/wiki/Game_of_Thrones) | [Example 2 & 3](https://plus.google.com/)

* Used to set the text formatting to underline, overline, line-through, or blink.

######19
```CSS
text-indent

Examples:
1) text-indent: 50px;
2) text-indent: 1.5em;
3) text-indent: 0;
```
[Example 1] (http://www.w3schools.com/cssref/pr_text_text-indent.asp) | [Example 2 & 3](http://reference.sitepoint.com/css/text-indent)

* Specifies how much horizontal space should be left before the beginning of the first line of the text content of
* an elment.

######20
```CSS
text-shadow

Examples:
1) text-shadow:0 1px 1px rgba
2) text-shadow:0 1px 0 rgba(0,0,0,0.1);
3) text-shadow: 0.1em 0.1em #333
```
[Example 1 & 2](https://plus.google.com/) | [Example 3](http://www.w3.org/Style/Examples/007/text-shadow.en.html)
* Adds shadows to text. Each shadow has optional color, blur, and radius value. Multiple shadows can be applied.

######21
```CSS
float

Examples:
1) img {
    float: right;
   }
2) float:left;
3) style="float:left;
```
[Example 1 - 3](http://www.w3schools.com/css/css_float.asp) 

* Specifies that an element should be removed from the normal work flow and placed on the right or left side where the
* text and inline elements will wrap around it.
######22
```CSS
clear

Examples: 
1) <p style="clear:both">
2) <br>
    &nbsp;&nbsp;&nbsp;
    clear: both;<br>
3) <div style="clear:both;"></div>

```
[Example 1 - 3](http://www.w3schools.com/css/css_float.asp) 

* Specifies whether an element can be next to a floating element or must be moved below it

######23
```CSS
position

Examples:
1) <div style="width:98%;height:100px;position:relative">
2) <p style="position:absolute;top:0px;right:0px">Positioning can be tricky sometimes!</p>
3) position: fixed;
```
[Example 1 - 3](http://www.w3schools.com/css/css_positioning.asp)

* Chooses alternative rules for positioning element. Allows you to set an elements position and even place elements
* behind each other.

######24
```CSS
<display>

Examples:
1) <div id='div-gpt-ad-1403595829794-4' style='width:728px;display:none;'>
2) {display:none!important}
3) display:flex;
```
[Example 1 - 3](https://plus.google.com/) 

* Specifies the type of rendering box used for an element.

######25
```CSS
border

Examples:
1) border:1px solid #ccc
2) border:5px solid transparent
3) border:1px solid #e5e5e5
```
[Example 1 - 3](https://plus.google.com/)

* Shorthand property which allows you to set all of the properties for an elements border
