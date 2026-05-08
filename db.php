<?php

function loadData() {
    return json_decode(file_get_contents("db.json"), true);
}

function saveData($data) {
    file_put_contents("db.json", json_encode($data, JSON_PRETTY_PRINT));
}