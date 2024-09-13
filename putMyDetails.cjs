const fs = require('fs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function putMyDetails() {
    await prisma.user.create({
        data: {
            "id": "cm0akixdf00019377zjvombec",
            "name": "Samarth Shetty",
            "email": "samarthshetty495@gmail.com",
            "emailVerified": null,
            "image": "https://lh3.googleusercontent.com/a/ACg8ocJWlf0cuBFqHAM2fTEP6MdR30MVA69MtkB2qPzUIpLZdDSQRdd8=s96-c",
            "displayName": "Samarth H Shetty",
            "phone": "8310626432",
            "username": "sammonster495",
            "college": "N.M.A.M Institute of Technology",
            "usn": "NNM22AM048",
            "lightTheme": "",
            "darkTheme": "",
            "role": "ADMIN",
            "createdAt": "2024-08-26T05:39:07.252Z",
            "updatedAt": "2024-09-12T16:58:01.439Z"
          }
    })

    await prisma.account.create({
        data: {
            "userId": "cm0akixdf00019377zjvombec",
            "type": "oidc",
            "provider": "google",
            "providerAccountId": "118172924848771951117",
            "refresh_token": "1//05belnGEpM0ibCgYIARAAGAUSNwF-L9IruFHgnUcx6r0VoTm3BURK5rwVo7x_PDWlubzSkhu7rg2_KHBMQOswg-RQXJiSZU7Afhs",
            "access_token": "ya29.a0AcM612zEjdI1m_WRiw_HBXQUFlGXFIIw_t-rBfz5aK7bI_osqa4yf4itnZTYjbExhBpRzXMavSEHtO0ktk83xvypRWMM_87fgOCKarseSWqMH7VGZjd1Y59OlUvxBRFXc_Z09wfvmCMQnolrFbn-s3BxWdjC2Xot_Ewgal54aCgYKAckSARMSFQHGX2Mibqg-bRaA35fC6usggwbqoQ0175",
            "expires_at": 1726156733,
            "token_type": "bearer",
            "scope": "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
            "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE0OTM5MWJmNTJiNThjMWQ1NjAyNTVjMmYyYTA0ZTU5ZTIyYTdiNjUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiI2NDA0OTE2NDEzNi1zdmtxOWdwbHRna2VpYTEwcnZzaThicHY1YzVkY2NkZy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjY0MDQ5MTY0MTM2LXN2a3E5Z3BsdGdrZWlhMTBydnNpOGJwdjVjNWRjY2RnLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE4MTcyOTI0ODQ4NzcxOTUxMTE3IiwiZW1haWwiOiJzYW1hcnRoc2hldHR5NDk1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiUlVLVUlfZlI4WnUyd1VnSkNQRF94QSIsIm5hbWUiOiJTYW1hcnRoIFNoZXR0eSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKV2xmMGN1QkZxSEFNMmZURVA2TWRSMzBNVkE2OU10a0IycVB6VUlwTFpkRFNRUmRkOD1zOTYtYyIsImdpdmVuX25hbWUiOiJTYW1hcnRoIiwiZmFtaWx5X25hbWUiOiJTaGV0dHkiLCJpYXQiOjE3MjQ2NTA3NjksImV4cCI6MTcyNDY1NDM2OX0.TZ3ZzAl1VHJA7wrFgMdGypJ-R-AYdqgpkvn33UgnsLs3Z4t-hBOpbjJxs30rA73QDjAGLo97P345E3xQtofMFG95nkmL8dlj1Um2ejETQamokum1rCSmdH3--NGb58vr_5dB_o6qWKrSrrrqgZdr2vJCo9lRQz6xZm_qjJgX2GMezEUOHZywlK3NLtWaiRr2Lk5n6Fgmf0nL1qLO0PzcHLW-INMPaCCbgMvTdVBz3Sqh5wZd61OCurhh8iS-gtkkHZwYqpMLBrdGJDgHRLvs2uVyefDtr7CbE5qVr1pxfinRXXKsCkgbmYmNVz1WqzFjgSVXpOpP_ulrCYv-UcptwQ",
            "session_state": null,
            "createdAt": "2024-08-26T05:39:30.079Z",
            "updatedAt": "2024-09-12T14:58:54.931Z"
          }
    })
}

putMyDetails().then(() => {
    console.log('My details have been added to the database!');
})