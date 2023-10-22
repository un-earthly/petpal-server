import argon2 from "argon2"

const verifyPassword = async (hasedPass: string, pass: string) => {
    const isValid = await argon2.verify(hasedPass, pass)
    return isValid
}

const hashPass = async (pass: string) => {
    const hash = await argon2.hash(pass);
    return hash
}

export { verifyPassword, hashPass };