"use strict";

const id = document.getElementById('id'),
    name = document.getElementById('name'),
    pw = document.getElementById('pw'),
    pwCf = document.getElementById('pwCf');


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

function join(){
    if(pw.value !== pwCf.value)return alert('비밀번호가 동일하지 않습니다.');
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };
    fetch("/join", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            res.success?location.href="/login":alert(res.msg);
        })
        .catch((err) => {
            console.error('회원가입 중 에러 발생');
        });
}