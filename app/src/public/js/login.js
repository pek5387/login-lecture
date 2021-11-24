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
    })
        .then((res) => res.json())
        .then((res) => {
            res.success?location.href="/":alert(res.msg);
        })
        .catch((err) => {
            console.error('로그인 중 에러 발생');
        });
}