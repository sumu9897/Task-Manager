export const PORT=5050
export const DATABASE=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rmec6.mongodb.net/?retryWrites=true&w=majority`;

export const JWT_KEY=`${process.env.ACCESS_TOKEN_SECRET}`
export const JWT_EXPIRE_TIME=30*24*60*60

// export const EMAIL_HOST="mail.teamrabbil.com"
// export const EMAIL_PORT=25
// export const EMAIL_SECURITY=false
// export const EMAIL_USER="info@teamrabbil.com"
// export const EMAIL_PASS="~sR4[bhaC[Qs"
// export const EMAIL_UN_AUTH=false

export const WEB_CACHE=false
export const MAX_JSON_SIZE="10MB"
export const URL_ENCODE=true

export const REQUEST_TIME=20*60*1000
export const REQUEST_NUMBER=2000
