/**
 * File:       left-tree.html>
 * Library:    seq66/data/share/tutorial>
 * Author:     Chris Ahlstrom >
 * Date:       2022-05-16>
 * Updates:    2022-05-28>
 * Version:    $Revision$>
 * License:    $XPC_SUITE_GPL_LICENSES$>
 */

function toggleFolder(id, imageNode) 
{
  var folder = document.getElementById(id);
  var l = imageNode.src.length;
  if (imageNode.src.substring(l-20,l)=="images/ftv2folderclosed.png" || 
      imageNode.src.substring(l-18,l)=="images/ftv2folderopen.png")
  {
    imageNode = imageNode.previousSibling;
    l = imageNode.src.length;
  }
  if (folder == null) 
  {
  } 
  else if (folder.style.display == "block") 
  {
    if (imageNode != null) 
    {
      imageNode.nextSibling.src = "images/ftv2folderclosed.png";
      if (imageNode.src.substring(l-13,l) == "images/ftv2mnode.png")
      {
        imageNode.src = "images/ftv2pnode.png";
      }
      else if (imageNode.src.substring(l-17,l) == "images/ftv2mlastnode.png")
      {
        imageNode.src = "images/ftv2plastnode.png";
      }
    }
    folder.style.display = "none";
  } 
  else 
  {
    if (imageNode != null) 
    {
      imageNode.nextSibling.src = "images/ftv2folderopen.png";
      if (imageNode.src.substring(l-13,l) == "images/ftv2pnode.png")
      {
        imageNode.src = "images/ftv2mnode.png";
      }
      else if (imageNode.src.substring(l-17,l) == "images/ftv2plastnode.png")
      {
        imageNode.src = "images/ftv2mlastnode.png";
      }
    }
    folder.style.display = "block";
  }
}

// The array with the links.  you can add as many links as you 
// like, as long as you keep the numbers succeeding

var count = 0;
var link_array = new Array();
var css_array = new Array();
link_array[0] = 'home.html';
link_array[1] = 'introduction.html';
link_array[2] = 'main_window.html';
link_array[3] = 'main_window_patterns.html';
link_array[4] = 'pattern_editor.html';
link_array[5] = 'pattern_tools.html';
link_array[6] = 'song_editor.html';
link_array[7] = 'configuration.html';
link_array[8] = 'playlist_manager.html';
link_array[9] = 'sets_manager.html';
link_array[10] = 'mutes_manager.html';
link_array[11] = 'tutorial_main.html';
link_array[12] = 'tutorial_first_startup.html';
link_array[13] = 'tutorial_new_song.html';
link_array[14] = 'tutorial_new_patterns.html';
link_array[15] = 'tutorial_live_play.html';
link_array[16] = 'tutorial_song_performance.html';
link_array[17] = 'tutorial_other_features.html';
link_array[18] = 'faq.html';
css_array[0] = 'css/slide.css';
css_array[1] = 'css/light-slide.css';
css_array[2] = 'css/dark-slide.css';
css_array[3] = 'css/emac-slide.css';

function next_link()
{
   if (count >= link_array.length)
   {
      count = 0;
   }
   else
   {
      count = count + 1;
   }
   top.frames['home'].location.href = link_array[count];
}

function home_link()
{
   count = 0;
   top.frames['home'].location.href = link_array[count];
}

function previous_link()
{
   if ((count - 1) <= 0)
   {
      count = 0;
   }
   else
   {
      count = count - 1;
   }
   top.frames['home'].location.href = link_array[count];
}

function set_index (pageindex)
{
   /*
    * Might need to do lookup
    */

   count = pageindex;
   top.frames['home'].location.href = link_array[count];
}

function change_css(cssfile, linkindex)
{
    var oldlink = document.getElementsByTagName("link").item(linkindex);
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssfile);
    document.getElementsByTagName("head").item(linkindex).replaceChild(newlink, oldlink);
}

/*
 * left-tree.js
 *
 * vim:sw=3 ts=3 wm=4 ft=javascript
 */
