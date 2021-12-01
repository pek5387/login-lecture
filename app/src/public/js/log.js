const id = document.getElementById('id'),
    name = document.getElementById('name'),
    pw = document.getElementById('pw'),
    pwCf = document.getElementById('pwCf');


const login = () => {
    if(!id.value) return alert('아이디를 입력해주십시오.');
    if(!pw.value) return alert('비밀번호를 입력해주십시오.');
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
            if(res.err) return alert(res.err);
            res.success?location.href="/":alert(res.msg);
        })
        .catch((err) => {
            console.error('로그인 중 에러 발생');
        });
},
duplicateCheck = () =>{
    const check = () => {
        const req = {
            id: id.value,
        };
        fetch("/duplicatecheck", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(req),
        })
            .then((res) => res.json())
            .then((res) => {
                if(res.err) return alert(res.err);
                res.success?alert(res.msg):alert(res.msg);
            })
            .catch((err) => {
                console.error('회원가입 중 에러 발생');
        });
    }
    return id.value === ''? alert('아이디를 입력해주세요'):
    id.value.length < 5? alert('아이디는 5자 이상 작성하셔야합니다'):check();
},
join = () => {
    if(!id.value) return alert('아이디를 입력해주십시오.');
    if(!pw.value) return alert('비밀번호를 입력해주십시오.');
    if(pw.value !== pwCf.value) return alert('비밀번호가 동일하지 않습니다.');
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
            if(res.err) return alert(res.err);
            res.success?location.href="/login":alert(res.msg);
        })
        .catch((err) => {
            console.error('회원가입 중 에러 발생');
        });
}
