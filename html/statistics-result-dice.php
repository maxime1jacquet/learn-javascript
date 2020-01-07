<?php include('../head.php') ?>
<br />
<div class="row align-items-center"">
  <h2 class="col-md-8">
    Statistiques des résultats d'un dés
  </h2>
  <a href="../index.php" class="primary col-md-2">Go summary</a>
</div>

<br />

<div class="row">

  <div class="col-md-12">
    <label for="jeu">Définir le nombre de lancer</label>
    <input type="number" name="" id="jeu" value="10" min="0" max="10000000" >
  </div>

  <div class="col-md-12">
    <button id="start">Lancer les dés</button>
  </div>

  <div class="col-md-12">
    <br>
    <h2>Resultat de la simulation en pourcentage</h2>
    <br>
    <div class="result" style="display:flex;height:400px;align-items:flex-end;background-color:#303F9F;padding:10px;">
      <div id="col1" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
      <div id="col2" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
      <div id="col3" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
      <div id="col4" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
      <div id="col5" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
      <div id="col6" style="background-color:#536DFE;color:#FFF;text-align:center;width: 99%;margin-left:1%"></div>
    </div>
  </div>
</div>


<?php 
$lesson = 1;
$scriptName = "statistics-result-dice";
include('../scripts-import.php');
include('../footer.php');
?>