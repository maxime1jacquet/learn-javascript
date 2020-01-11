<?php include('../head.php') ?>
<br>
<div class="row align-items-center"">
  <h2 class="col-md-8">
    Pile ou face
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>
<br>
<div class="row">
  
  <div class="col-md-12">
    <button class="primary" id="start">Lancer la piece</button>
  </div>
  <div class="col-md-12">
    <br>
    Résultat : 
    <div id="result" class="alert alert-primary"></div>
  </div>
</div>


<?php 
$lesson = 1;
$scriptName = "heads-or-tails";
include('../scripts-import.php');
include('../footer.php');
?>