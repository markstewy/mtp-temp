https://github.com/Hypercubed/angular-marked/blob/master/README.md
https://github.com/NextStepWebs/simplemde-markdown-editor




===========MARKED==============
app.js
angular.module('app', ['ui.router', 'hc.marked'])


package.json
"angular-marked": "^1.2.0",

=====================================

blog.html
<div class="post" ng-repeat="post in posts">
    <h1 class="blogtitle">{{post.title}}</h1>
    <div class="blogsubtitle">
        {{post.subtitle}}
    </div>
    <div class="blogpostdate">Posted {{post.date}}</div>
   <div style="text-align: justify-all;" marked="post.fullpost"></div> <!-- "marked" attribute linked to angular-marked https://github.com/Hypercubed/angular-marked/blob/master/README.md -->
</div>
=====================================
portfolio.html
<div class="post" style="text-align: center;" ng-repeat="project in projects">
    <!-- <h1 class="blogtitle">{{project.title}}</h1> -->
    <!-- <div class="blogsubtitle">
        {{post.subtitle}}
    </div> -->
    <!-- <div class="blogpostdate">Posted {{post.date}}</div> -->
   <div style="text-align: center;" marked="project.fullpost"></div>
   <!-- "marked" attribute linked to angular-marked https://github.com/Hypercubed/angular-marked/blob/master/README.md -->
</div>
==============
adminhtml


<div style="margin-left: 40px;">

Title (blog posts only) <br>
<textarea name="name" ng-model="post.title" rows="2" cols="40" value="post.title"></textarea><br>
Subtitle (blog posts only) <br>
<textarea name="name" ng-model="post.subtitle" rows="2" cols="40" value="post.subtitle"></textarea><br>
Post Date (blog posts only) <br>
<textarea name="name" ng-model="post.date" rows="2" cols="40" value="post.date"></textarea><br>

<div><textarea id="MyID" name="name" ng-model="post.fullpost" rows="8" cols="40" value="post.fullpost"></textarea></div>
<div><button type="button" ng-click="addpost(post)" name="button">SUBMIT BLOG POST</button></div><br>
<!-- <div><button type="button" ng-click="addproject(post)" name="button">SUBMIT PORTFOLIO ITEM</button></div> -->

</div>

===================
npm install angular-marked
=====================================
index.html
<!-- Mark Down smplemde -->
<link rel="stylesheet" href="//cdn.jsdelivr.net/simplemde/latest/simplemde.min.css">

<!-- mark down simplemde -->
<script src="//cdn.jsdelivr.net/simplemde/latest/simplemde.min.js"></script>
<!-- npm Angular Marked --> **link to these two npm files with copies moved out of the nodemodules folder**
<script src="./npmcopies/angular-marked.js" charset="utf-8"></script>
<script src="./npmcopies/marked.js" charset="utf-8"></script>
=====================================
/public/npmcopies  **(move copies of these npm files out of the npm modules folder)**

angular-marked/dist/angular-marked.js
marked/lib/marked.js

===========================
adminCtrl.js

//simplemde plugin
var simplemde = new SimpleMDE({ element: $("#MyID")[0] });
simplemde.codemirror.on("change", function() {
   // console.log(simplemde.value());
   $scope.post.fullpost = simplemde.value();
})
