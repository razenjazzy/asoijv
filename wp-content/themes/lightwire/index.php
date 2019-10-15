<?php
// =============================================================================
// INDEX.PHP
// =============================================================================

global $query;
if (is_search()) include_once(LIGHTWIRE_PATH . "/inc/search.php");
else include_once(LIGHTWIRE_PATH . "/template-base.php");

?>