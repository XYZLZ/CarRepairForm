const fetchModelOptions = async () => {
    const req = await fetch('http://localhost:3000/modeloptions');
    const res = await req.json();
    return res
}

const fetchAuthOptions = async () => {
    const req = await fetch('http://localhost:3000/authoptions');
    const res = await req.json();
    return res
}

export {fetchAuthOptions, fetchModelOptions};

