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
      on: 'change',
      user: '#user', //!+ **user**
      repository: '#repository', //!+ **project**
      SHA1: '#SHA1', //!+ **SHA1**
      remote_google: '#remote_google', //!+ **remote_google**
      remote_github: '#remote_github', //!+ **remote_github**
      branch: '#branch', //!+ **remote_github**
      type: '#type', //!+ **type**
      show: '#show', //!+ **show**
      remote: '#remote', //!+ **remote**
      commit: '#commit' //!+ **commit**
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
      var user='<b>'+$(set.user).val()+'</b>';
      var repository='<b>'+$(set.repository).val()+'</b>';
      var SHA1='<b>'+$(set.SHA1).val()+'</b>';
      var remote_google='<b>'+$(set.remote_google).val()+'</b>';
      var remote_github='<b>'+$(set.remote_github).val()+'</b>';
      var remote='<b>'+$(set.remote).val()+'</b>';
      var branch='<b>'+$(set.branch).val()+'</b>';
      var commit='<b>'+$(set.commit).val()+'</b>';
      var type=$(set.type).val();
      var arr=[];
      if(type == 'c1'){
        arr.push('git remote add '+remote_github+' https://github.com/'+user+'/'+repository+'.git');
      } else if(type == 'c2'){
        arr.push('git remote add '+remote_google+' https://'+user+'@code.google.com/p/'+repository+'/');
      } else if(type == 'c3'){
        arr.push('git push '+remote+' --delete '+branch);
      } else if(type == 'c4'){
        arr.push('git branch -d '+branch);
      } else if(type == 'c5'){
        arr.push('git branch -m '+branch+' <b>[branch new name]</b>');
      } else if(type == 'c6'){
        arr.push('git checkout '+branch);
      } else if(type == 'c7'){
        arr.push('git push '+remote_google+' +HEAD');
      } else if(type == 'c8'){
        arr.push('git reset --hard '+SHA1);
      } else if(type == 'c9'){
        arr.push('git commit -a -m \''+commit+'\'');
      } else if(type == 'c10'){
        arr.push('git push '+remote+' '+branch);
      } else if(type == 'c11'){
        arr.push('git fetch '+remote+' '+branch);
      }
      $(set.show).html(arr.join(''));
      f.log(d);
      /*
      f.log('## Google Code');
      f.log('+ **Create New Repository**');
      f.log('  https://code.google.com/hosting/createProject');
      f.log('+ **Add Remote**');
      f.log('  git remote add '+remote_google+' https://'+user+'@code.google.com/p/'+repository+'/');
      f.log('+ **Delete Commit**');
      f.log(' + **Local**');
      f.log('   git reset --hard '+SHA1);
      f.log(' + **Remote**');
      f.log('   git push '+remote_google+' +HEAD');
      f.log('******************************************************************************************');
      f.log('## GitHub');
      f.log('+ **Create New Repository**');
      f.log('  https://github.com/new');
      f.log('+ **Add Remote**');
      f.log('  git remote add '+remote_github+' https://github.com/'+user+'/'+repository+'.git');
      f.log('+ **Delete Commit**');
      f.log(' + **Local**');
      f.log('   git reset --hard '+SHA1);
      f.log(' + **Remote**');
      f.log('   git push '+remote_github+' +HEAD');
      f.log('******************************************************************************************');
      */
    }
    initialize();
  }
  return this.each(function(){ 
    var set=$.extend(f.set, opt);
    func($(this), set);
  });
 }
})(jQuery);