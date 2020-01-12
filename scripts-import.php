<script
  type="text/javascript"
  src="./../lesson<?=$lesson?>/<?=$scriptName?>.js"
></script>

<?php if(!$env->prod){?>
  <script
  type="text/javascript"
  src="./../lesson<?=$lesson?>/<?=$scriptName?>.solution.js"
  ></script>
<?php } ?>
