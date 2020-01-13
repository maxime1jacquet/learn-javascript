<?php include('../head.php') ?>
<br>
<div class="row align-items-center"">
  <h2 class="col-md-8">
    Puissance 4
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>
<br>
<div class="row">

  <div class="col-md-12">
  <button id="replay">Rejouer</button>
    <div id="game">
    </div>
  </div>

</div>

<style>
  #game{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .rowPlay{
    display:flex;
    flex-direction:column;
    background-color:#536DFE;
  }
  .case{
    margin:10px;
    width:70px;
    height:70px;
    border-radius: 100%;
    background: #FFF;
  }
  .payer1{
    background-color:#FFC107;
  }
  .payer2{
    background-color:#FF5252;
  }
</style>

<?php 
$lesson = 1;
$scriptName = "puissance-4";
include('../scripts-import.php');
include('../footer.php');
?>