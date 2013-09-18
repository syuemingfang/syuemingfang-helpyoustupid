/*!

# Help You, Stupid
  bj4

  CDN: `https://syuemingfang-helpyoustupid.googlecode.com/git/js/helpyoustupid.js`

  [GitHub project](https://github.com/syuemingfang/syuemingfang-helpyoustupid) [Documentation](http://comment.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-helpyoustupid/master/comment.json)

****************************************************************************************************/

/*!

+ Version: 0.1.0.0
+ Copyright © 2013 [Syue](mailto:syuemingfang@gmail.com). All rights reserved.
+ Date: *Wed Sep 18 2013 13:55:03 GMT+0800 (Central Standard Time)*

## Examples
 1. **Standard** [Power by Cinderella](http://html.cxm.tw/?url=https://raw.github.com/syuemingfang/syuemingfang-helpyoustupid/master/example.html)
 2. **Debug** [Power by jsPipe](http://jspipe.cxm.tw/?url=http://html.cxm.tw/index.php?url=https://raw.github.com/syuemingfang/syuemingfang-helpyoustupid/master/example.html)

## How to Use
 1. **Setup** include this javascript files in your header.
  + **jQuery**
   `<script src='http://code.jquery.com/jquery-1.8.3.min.js'></script>`
  + **This Plguin**
   `<script src='https://syuemingfang-helpyoustupid.googlecode.com/git/js/helpyoustupid.js'></script>`
 2. **Usage**
  + **Format**  This Plugin accepts settings from an object of key/value pairs.
   `$(selector).helpyoustupid({key: value...})`
  + **Example**
     + `$('button').helpyoustupid({on: 'click'})`
 3. **Set** copy code from the `<head>` and `</head>` tags and paste it on your page.

        <script>
        $(document).ready(function(){
          //Usage
        });
        </script>

****************************************************************************************************/
;(function($){
 $.fn.helpyoustupid=function(opt){
  var f=$.fn.helpyoustupid;
  $.extend(f, {
    version: '0.1.0.0',
    //! 
    //!## Options
    set: {
      on: 'click',
      user: '#user', //!+ **user**
      repository: '#repository' //!+ **project**
    },
    //! 
    //!****************************************************************************************************
    //!## API
    log: function(str){
      //!+ **log(str)** outputs a message to the web console.
      console.log(str)
    }
  }); 
  //! 
  //!****************************************************************************************************
  //!## Function
  var func=function(that, set){
    var initialize=function(){
      //!+ **initialize()**
      // Declare
      // Constructor
      that.on(set.on, function(){
         start();
      });
    }
    var start=function(){
      //!+ **start()**
      // Declare
      // Constructor
      var d=new Date();
      var user=$(set.user).val();
      var repository=$(set.repository).val();
      f.log(d);
      f.log('## Google Code');
      f.log('+ **Create New Repository**');
      f.log('  https://code.google.com/hosting/createProject');
      f.log('+ **Use Git Bash**');
      f.log('  git remote add master https://'+user+'@code.google.com/p/'+repository+'/');
      f.log('## GitHub');
      f.log('+ **Create New Repository**');
      f.log('  https://github.com/new');
      f.log('+ **Use Git Bash**');
      f.log('  git remote add origin https://github.com/'+user+'/'+repository+'.git');
    }
    initialize();
  }
  return this.each(function(){ 
    var set=$.extend(f.set, opt);
    func($(this), set);
  });
 }
})(jQuery);