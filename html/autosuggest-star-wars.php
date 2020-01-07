<?php include('../head.php') ?>
<br>
<div class="row align-items-center"">
  <h2 class="col-md-8">
    Autosuggest star wars
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>
<br>
<div class="row">
  
  <div class="col-md-12">
    <input type="text" id="search" class="" placeholder="han solo"/>
    <br>
    <div id="result"></div>
    <div id="load"></div>
  </div>

</div>

<?php 
$lesson = 1;
$scriptName = "autosuggest-star-wars";
include('../scripts-import.php');
include('../footer.php');
?>