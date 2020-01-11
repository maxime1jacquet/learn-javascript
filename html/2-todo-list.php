<?php include('../head.php') ?>
<br>
<div class="row align-items-center">
  <h2 class="col-md-8">
    Todo List
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>
<br>
<div class="row">
  
  <div class="col-md-4">
    <h4>Ajouter un item : </h4>
  </div>

  <div class="col-md-8">
  <input type="text" id="elementInput">
  </div>

  <div class="col-md-12">
    <br>
    <div id="elementList"></div>
  </div>

</div>

<?php 
$lesson = 2;
$scriptName = "todo-list";
include('../scripts-import.php');
include('../footer.php');
?>