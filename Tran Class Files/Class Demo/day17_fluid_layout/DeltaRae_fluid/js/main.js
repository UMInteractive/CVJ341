<script>
   window.onresize = function(){
      //To work even on resize
      getToMiddle();
      getToMiddle2();
   }
   window.onload = function(){
      getToMiddle();
      getToMiddle2();
   }

   function getToMiddle(){
      var box = document.getElementById('banner');
      var height = box.offsetHeight;
      var width = box.offsetWidth;
      box.style.top = -(height/2);
      box.style.left = -(width/2);
   }

   function getToMiddle2(){
      var box = document.getElementById('name');
      var height = box.offsetHeight;
      var width = box.offsetWidth;
      box.style.top = -(height/2);
      box.style.left = -(width/2);
   }
</script>