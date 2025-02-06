export const Registration = async(req, res) => {
    return res.json({stats:"success","Message":"User Registered Successfully"})
}

export const Login = async(req, res) => {
    return res.json({stats:"success","Message":"User Login Successfully"})
}
export const ProfileDetails = async(req, res) => {
    return res.json({stats:"success","Message":"User ProfileDetails Successfully"})
}

export const ProfileUpdate = async(req, res) => {
    return res.json({stats:"success","Message":"User ProfileUpdate Successfully"})
}

export const EmailVerify = async(req, res) => {
    return res.json({stats:"success","Message":"EmailVerify Successfully"})
}

export const CodeVerify = async(req, res) => {
    return res.json({stats:"success","Message":"Code Verify Successfully"})
}

export const ResetPassword = async(req, res) => {
    return res.json({stats:"success","Message":"User ResetPassword Successfully"})
}