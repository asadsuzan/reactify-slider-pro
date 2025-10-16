<?php 

function brsbIsPremium() {
    return BRSB_HAS_PRO ? rs_fs()->can_use_premium_code() : false;
}