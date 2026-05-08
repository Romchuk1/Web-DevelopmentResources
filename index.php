<?php

header("Content-Type: application/json");

$file = "notes.json";

function readData($file) {
    return json_decode(file_get_contents($file), true);
}

function writeData($file, $data) {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? null;

$data = readData($file);

if ($method === "GET" && $action === "list") {
    echo json_encode($data);
    exit;
}

if ($method === "GET" && $action === "get") {

    $id = $_GET['id'] ?? null;

    foreach ($data as $note) {
        if ($note['id'] == $id) {
            echo json_encode($note);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Not found"]);
    exit;
}


if ($method === "POST" && $action === "create") {

    $input = json_decode(file_get_contents("php://input"), true);

    if (!isset($input['title']) || !isset($input['content'])) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid data"]);
        exit;
    }

    $newNote = [
        "id" => count($data) > 0 ? end($data)['id'] + 1 : 1,
        "title" => $input['title'],
        "content" => $input['content']
    ];

    $data[] = $newNote;
    writeData($file, $data);

    http_response_code(201);
    echo json_encode($newNote);
    exit;
}


if ($method === "PUT" && $action === "update") {

    $id = $_GET['id'] ?? null;
    $input = json_decode(file_get_contents("php://input"), true);

    foreach ($data as &$note) {

        if ($note['id'] == $id) {

            if (isset($input['title'])) {
                $note['title'] = $input['title'];
            }

            if (isset($input['content'])) {
                $note['content'] = $input['content'];
            }

            writeData($file, $data);

            echo json_encode($note);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Not found"]);
    exit;
}


if ($method === "DELETE" && $action === "delete") {

    $id = $_GET['id'] ?? null;

    foreach ($data as $index => $note) {

        if ($note['id'] == $id) {

            array_splice($data, $index, 1);
            writeData($file, $data);

            echo json_encode(["message" => "Deleted"]);
            exit;
        }
    }

    http_response_code(404);
    echo json_encode(["message" => "Not found"]);
    exit;
}

http_response_code(404);
echo json_encode(["message" => "Invalid endpoint"]);