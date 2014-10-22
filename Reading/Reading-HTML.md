### Block-level elements 
#####(Block-level elements can only appear within a `<body>` element.)

##### 1
```html
  <p>
  
  Examples:
  1) <p><a href="http://www.meetup.com/The-Iron-Yard-Orlando/">http://www.meetup.com/The-Iron-Yard-Orlando/</a></p>
  2) <p>See you then!</p>
  3) <p><em>By Susanna Miller, Campus Director</em></p>
  
```
 [Example 1 - 3](http://orlando.theironyard.com)
  
 * Represents a paragraph of text

##### 2
```html
  <div>
  
  Examples:
  1) <div class="wrap"></div>
  2) <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div>
  3) <div class="copy-link-wrap">
    <a data-clipboard-text="http://tmblr.co/ZRA0zm1TDCtLW">
      <span class="icon">5</span><span class="label">Copy short URL</span>
    </a>
  </div>

```
 [Example 1 - 3](http://orlando.theironyard.com)

 * Used as a generic container element if no other element is appropriate (<article>, <audio>, etc.). Typically used to
 * group like objects

##### 3 
```html
  <ol> 
  
  Examples:
  1) <ol class="watch-queue-items-list playlist-videos-list yt-uix-scroller" 
     data-scroll-action="yt.www.watchqueue.loadThumbnails"> </ol>
  2) <ol class="references">
        <li id="cite_note-161"><span class="mw-cite-backlink"><b><a href="#cite_ref-161">^</a></b></span> <span
        class="reference-text">Viewers of the first airing on HBO in the US on Sundays 9:00 pm</span></li>
     </ol>
  3) <ol class="references">
        <li id="cite_note-USA_Today_March_30.2C_2012-1"><span class="mw-cite-backlink">
        ...
     </ol>

  
```
[Example 1](https://www.youtube.com) | [Example 2 & 3](http://en.wikipedia.org/wiki/Game_of_Thrones)

 * Represents an order list of items. Ordered-list items are displayed with a preceding number.

##### 4 
```html
  <h1>,  <h2>, <h3>, <h4>, <h5>, <h6>
  
  Examples:
  1) <h1> <a href="/">The Iron Yard | Orlando</a> </h1>
  2) <h2 class="secondary-title">The Iron Yard | Orlando</h2>
  3) <h3> <strong>What would you build with a Code School scholarship to The Iron Yard?</strong> </h3>


```
[Example 1 - 3](http://orlando.theironyard.com)

 * Heading elements implement six different document headings (h1 being most important, h6 being least important).

##### 5 
```html
  <ul>
  
  Examples:
  1) <ul class="links module"></ul><div class="social-icons module clearfix">
  2) <ul class="share-items">
      <li class="share-item twitter">
  3) <ul><li><span>What did you do yesterday?</span></li>
         <li><span>What are you doing today?</span></li>
          <li><span>What, if anything, is in your way?</span></li>
    </ul>

```
[Example 1 - 3](http://orlando.theironyard.com)

 * Represents an unorder list of items. Unordered-list items are displayed with a precrding dot.

##### 6 
```html
  <header>
  
  Examples:
  1) <header style="background-image:url(http://static.tumblr.com/3c7cd96cde56779343d2e9a22afec085/w5gxxfv/oCrn8vkw8/t                     umblr_static_9cxjqqnfamsccsg4ow84sg8kg.jpg);"> </header>
  2) <header>
       <nav class="mobile-nav show-on-mobiles">
      ...
    </header>
  3) <header>
       <h1>Internet Explorer 9</h1>
       <p><time pubdate datetime="2011-03-15"></time></p>
     </header>
```
[Example 1](http://orlando.theironyard.com) | [Example 2](http://jekyllrb.com/) | [Example 3](http://www.w3schools.com/tags/tag_header.asp)
 * Represents a group of introductory or navigational aids (nav bar, logo, etc.)
 
##### 7 
```html
  <form>
  
  Examples:
  1) <form name="q" method="get" action="/s/">
        ...
    </form>
  2) <form> <input type="text" id="st-search-input" class="search-field" /> </form>
  3) <form action="/search" class="module search-form" method="get">


```
  [Example 1](http://thepiratebay.se) | [Examples 2 & 3](http://orlando.theironyard.com)
 * Represents a document section with some interative controls (forms, buttons, etc.) to submit information to a web
 * server.
 

##### 8 
```html
  <audio>
  
  Examples:
  1) <audio controls="controls"><source src="http://www.starwars.stopklatka.pl/sounds/reward.wav" type="audio/wav">
     </audio>
  2) <audio controls>
      <audio controls>
        <source src="horse.ogg" type="audio/ogg">
        <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>
  3) <audio src="/music/good_enough.mp3" controls>
      <p>If you are reading this, it is because your browser does not support the audio element.</p>
     </audio>
```
[Example 1](http://xdonze.github.io/sweet_test.html) | [Example 2](http://www.w3schools.com/tags/tag_audio.asp) | [Example 3](http://www.quackit.com/html_5/tags/html_audio_tag.cfm)

 * Used to embed sound content in documents. Can contain multiple audio sources.
 

##### 9 
```html
  <video>
  
  Examples:
  1) <video width="320" height="240" controls>
        <source src="movie.mp4" type="video/mp4">
        <source src="movie.ogg" type="video/ogg">
        Your browser does not support the video tag.
     </video>
  2) <video id="video1" width="600" controls>
        <source src="mov_bbb.mp4" type="video/mp4">
        <source src="mov_bbb.ogg" type="video/ogg">
        Your browser does not support HTML5 video.
     </video>
  3) <video src="/video/pass-countdown.ogg" width="170" height="85" controls>
       <p>If you are reading this, it is because your browser does not support the HTML5 video element.</p>
     </video>

```
[Example 1](http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_video) | [Example 2](http://www.w3schools.com/html/html5_video.asp) | [Example 3](http://www.quackit.com/html_5/tags/html_video_tag.cfm)

 * Used to embed video content in documents. Can contain multiple video sources.
 

##### 10 
```html
  <blockquote>
  
  Examples:
  1) <blockquote> TESTING! </blockquote>
  2) <blockquote>On Sunday night we had an informal class dinner / gathering in Orlando's...</blockquote>
  3) <blockquote>
        <p><em>“Sumthin’s makin’ me that way… Sumthin’s drawin’ me somewhere – an’ I’ll march through any thing or any                 man ta get there!” </em> - Cain Marko</p>
     </blockquote>
      
</blockquote>
```
[Example 1](http://xdonze.github.io/sweet_test.html) | [Example 2](http://asoper.me/2014/09/22/day-one) | [Example 3](http://asoper.me/2014/09/19/pre-tiy)

 * Indicates that the eclosed text is an extended quotation. Will usually result in a visual indentation but this can
 * be changed. Can use the <cite> element to put your source in the blockquote.
 
 
-----------------------------------------------------------------------------------

### In-Line elements 
#####(Generally inline elements may contain only data and other inline elements)

##### 1
```html
  <img> 
  
  Examples:
  1) <img alt="The Iron Yard | Orlando"  
      src="http://static.tumblr.com/37ca133c1a84d5b7856c51a7682df3e9/w5gxxfv/6j4n8vkw8/tumblr_static_20mtuue2w17o0skso       gs0c44cw.png" />
  2) <img alt="image" src="http://media.tumblr.com/c5b6fcd73c1e6a076269eb477b09c379/tumblr_inline_ndk4rsMem41t311sy.jp       g"/>
  3) <img alt="The Iron Yard | Orlando" src="http://33.media.tumblr.com/avatar_31b8d8bf579d_64.png" />
  
```
 [Example 1 - 3](http://orlando.theironyard.com)
  
 * Represents an image in the document

##### 2
```html
  <button>
  
  Examples:
  1) <button type="button">Click Me!</button>
  2) <button onclick='hideFBLike()'>Close</button>
  3) <button type="button" onclick="JavaScript:alert('You liked that, didn\'t you!')">Go ahead... make my
      day!</button>

  
```
 [Example 1 & 2](http://www.w3schools.com/tags/tag_button.asp) | [Example 3](http://www.quackit.com/html/codes/html_button.cfm)

 * Represents a clickable button.  
 
##### 3 
```html
  <b>
  
  Examples:
  1) <b>Game of Thrones</b>
  2) <b><a href="#cite_ref-161">^</a></b>
  3) <b>a</b>

  
```
[Example 1 - 3](http://en.wikipedia.org/wiki/Game_of_Thrones)
 * Used to distinguish text that is stylistically different from the other text without conveying any sense of
 * importance or relevance.

##### 4 
```html
  <strong>
  
  Examples:
  1) <strong>First Day of School!</strong>
  2) <strong>both in skill and in character.</strong>
  3) <h3> <strong>What would you build with a Code School scholarship to The Iron Yard?</strong> </h3>


```
[Example 1 - 3](http://orlando.theironyard.com)

 * Used to convey importance of certain text and usually is displayed in bold

##### 5 
```html
  <em>
  
  Examples:
  1) <p><em>By Susanna Miller, Campus Director</em></p>
  2) <p><em>See? Super excited. And it’s an official picture, because David is in it too (albeit without his actual   
      knowledge)</em></p>
  3) <em><a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript">The Birth and Death of        JavaScript</a> </em>
```
[Example 1 - 3](http://orlando.theironyard.com)

 * Represents text that should be emphasized. The em element can be nested with each level indicating a greater degree
 * of emphasis. Commonly displayed in italics, but shouldn't be used purely for that purpose.

##### 6 
```html
  <span>
  
  Examples:
  1) <span class="icon">p</span>
  2) <span>(the good, the bad, the ugly, and the &#8220;Ah ha!&#8221; moments)</span>
  3) <li><span>What did you do yesterday?</span></li>
```
[Example 1 - 3](http://orlando.theironyard.com)
 * Generic contain for phrasing content. Used to group elements for styling purposes or because they share attributes.
 
##### 7 
```html
  <td>
  
  Examples:
  1) <td colspan="2" style="text-align:center;"><a href="/wiki/File:Game_of_Thrones_title_card.jpg" class="image"><img       alt="Game of Thrones title card.jpg"   
      src="//upload.wikimedia.org/wikipedia/en/thumb/d/d8/Game_of_Thrones_title_card.jpg/250px-Game_of_Thrones_title_c       ard.jpg" width="250" height="141"     
      srcset="//upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg 1.5x,    
      //upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg 2x" data-file-width="350" 
      data-file-height="197" /></a>
      </td>
  2) <td class="category">
        <div class="plainlist">
          <ul>
            <li><a href="/wiki/Fantasy" title="Fantasy">Fantasy</a></li>
            <li><a href="/wiki/Serial_drama" title="Serial drama" class="mw-redirect">Serial drama</a></li>
          </ul>
        </div>
     </td>
  3) <td class="attendee">see <a href="/wiki/List_of_Game_of_Thrones_characters#Main_characters" title="List of Game          of Thrones characters">List of <i>Game of Thrones</i> characters</a></td>


```
  [Example 1 - 3](http://en.wikipedia.org/wiki/Game_of_Thrones) 
 * Defines the cell of a table which contains data.

##### 8 
```html
  <i>
  
  Examples:
  1) <i>Game of Thrones</i>
  2) <i><a href="/wiki/A_Song_of_Ice_and_Fire" title="A Song of Ice and Fire">A Song of Ice and Fire</a></i>
  3) <i><a href="/wiki/A_Game_of_Thrones" title="A Game of Thrones">A Game of Thrones</a></i>
```
[Example 1 - 3](http://en.wikipedia.org/wiki/Game_of_Thrones)
 * Displays text in italics. Normally used to seperate text from standard text for some purpose.
 

##### 9 
```html
  <cite>
  
  Examples:
  1) <cite>Sean Stephenson</cite>
  2) <cite>The Scream</cite>
  3) <cite><a rel="nofollow" class="external text" href="http://diveintomark.org/archives/2003/08/29/semantics">Won’t      somebody please think of the gerbils?</a></cite>

```
[Example 1](http://www.quackit.com/html_5/tags/html_q_tag.cfm) | [Example 2](http://www.w3schools.com/tags/tag_cite.asp) | [Example 3](view-source:https://wiki.whatwg.org/wiki/Cite_element)

 * Used to reference to creative work. 
 

##### 10 
```html
  <q>
  
  Examples:
  1) <q>Build a future where people live in harmony with nature.</q>
  2) <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">
        Oh my God, you/they killed Kenny!
     </q>.
  3) <q cite="http://seanstephenson.com/">You'll always have an ego. The moment you forget that, it will start running       the show</q>
      
</blockquote>
```
[Example 1](http://www.w3schools.com/tags/tag_q.asp) | [Example 2](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q) | [Example 3](http://www.quackit.com/html_5/tags/html_q_tag.cfm)

 * Indicates that the text is a short quotation. Used for quotes that don't require a pargraph break.
 
---------------------------------------------------------------
###Additional HTML Examples

##### 1
```html
<title>
  
  Examples:
  1) <title>The Iron Yard | Orlando</title>
  2) <title>Donze's Domain</title>
  3) <title>Decide What To Be... and Go Be It by AriGonzo</title>
  
```
 [Example 1](http://orlando.theironyard.com) | [Example 2](http://xdonze.github.io) | [Example 3](http://arigonzo.com)
  
 * Used to define the title of the document using only text. Displayed on tab or in browser's title bar.

##### 2
```html
  <footer>
  
  Examples:
  1) <footer>
    <div class="footer-wrap content-wrap clearfix">
      <aside class="sidebar">
        <div class="avatar-wrap">
          <a href="/"><img alt="The Iron Yard | Orlando" src="http://33.media.tumblr.com/avatar_31b8d8bf579d_64.png"            /></a>
        </div>
      </aside>
      <div class="content">
        <h2 class="secondary-title">The Iron Yard | Orlando</h2>
        <div class="blog-description">Happenings and updates from The Iron Yard in Orlando, FL.</div><div  
          class="social-icons module clearfix">
          <h2>Elsewhere</h2>
          <div class="wrap"></div>
        </div><div class="attribution">
          <a href="http://www.pixelunion.net/themes/longform">Longform Theme</a>&nbsp;by&nbsp;<a
          href="http://www.pixelunion.net">Pixel Union</a>. Powered by&nbsp;<a  
          href="http://www.tumblr.com">Tumblr</a>.</div>
       </div>
      </div>
    </footer>
  2) <footer>
        <h6>Hosted on <a href="http://pages.github.com">GitHub Pages</a></h6>
     </footer>
  3) <footer>
  <div class="grid">
    <div class="unit one-third center-on-mobiles">
      <p>The contents of this website are &copy;&nbsp;2014 <a href="http://tom.preston-werner.com/">Tom
      Preston-Werner</a> under the terms of the <a
      href="https://github.com/jekyll/jekyll/blob/master/LICENSE">MIT&nbsp;License</a>.</p>
    </div>
    <div class="unit two-thirds align-right center-on-mobiles">
      <p>
        Proudly hosted by
        <a href="https://github.com">
          <img src="/img/footer-logo.png" width="100" height="30" alt="GitHub • Social coding">
        </a>
      </p>
    </div>
  </div>
</footer>

  
```
[Example 1](https://orlando.theironyard.com) | [Example 2](http://al-the-x.github.io/) | [Example 3](http://jekyllrb.com/)

 * Represents a footer for the nearest section of content or the root element. Often used to identify athor of an
 * article or website.
