<?php include('../head.php') ?>
<br>
<div class="row align-items-center"">
  <h2 class="col-md-8">
    Local Storage
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>
<br>

<?php include('../go-console.php') ?>

<?php 
$lesson = 1;
$scriptName = "localstorage";
include('../scripts-import.php');
include('../footer.php');
?>