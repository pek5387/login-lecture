"use strict";

const id = document.getElementById('id'),
    pw = document.getElementById('pw');

function login(){
    const req = {
        id: id.value,
        pw: pw.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    });
}