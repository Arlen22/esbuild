
async function* examples2() {

    const expression = "hello";
    let result;
    result = try expression;
    result = try await expression;
    result = try yield expression;
    result = try yield await expression;

}

