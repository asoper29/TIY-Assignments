### Block-level elements 
#####(Block-level elements can only appear within a `<body>` element.)

##### 1
```html
  <p> </p>
  
  Examples:
  1) <p><a href="http://www.meetup.com/The-Iron-Yard-Orlando/">http://www.meetup.com/The-Iron-Yard-Orlando/</a></p>
  2) <p>See you then!</p>
  3) <p><em>By Susanna Miller, Campus Director</em></p>
  
```
 [Example 1 - 3](http://orlando.theironyard.com)
  
 * Represents a paragraph of text

##### 2
```html
  <div> </div>
  
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
  <ol> </ol>
  
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
  <h1> </h1>, <h2> </h2>, <h3> </h3>, <h4> </h4>, <h5> </h5>, <h6> </h6>
  
  Examples:
  1) <h1> <a href="/">The Iron Yard | Orlando</a> </h1>
  2) <h2 class="secondary-title">The Iron Yard | Orlando</h2>
  3) <h3> <strong>What would you build with a Code School scholarship to The Iron Yard?</strong> </h3>


```
[Example 1 - 3](http://orlando.theironyard.com)

 * Heading elements implement six different document headings (h1 being most important, h6 being least important).

##### 5 
```html
  <ul> </ul>
  
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
  <header> </header>
  
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
  <form> </form>
  
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
  <audio> </audio>
  
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
  <video> </video>
  
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
  <blockquote> </blockquote>
  
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
 
 
