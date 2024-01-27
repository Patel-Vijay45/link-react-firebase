function createToken(
  payload,
  secretKey = "4f&k(QWT3-#5dV.&cp*i4K#[xb!wymZ[PFv.aARA?WvxT#khBz",
  expiresIn = "3600"
) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));

  const expirationTime = Math.floor(Date.now() / 1000) + expiresIn;

  const token = `${encodedHeader}.${encodedPayload}.${expirationTime}`;

  return token;
}

function verifyToken(
  token,
  secretKey = "4f&k(QWT3-#5dV.&cp*i4K#[xb!wymZ[PFv.aARA?WvxT#khBz"
) {
  const [encodedHeader, encodedPayload, signature] = token.split(".");

  const decodedHeader = JSON.parse(atob(encodedHeader));
  const decodedPayload = JSON.parse(atob(encodedPayload));

  const currentTimestamp = Math.floor(Date.now() / 1000);
  if (decodedPayload.exp && decodedPayload.exp < currentTimestamp) {
    throw new Error("Token has expired");
  }

  const expectedSignature = btoa(
    JSON.stringify(decodedHeader) + "." + JSON.stringify(decodedPayload)
  );
  const isSignatureValid = signature === expectedSignature;

  if (!isSignatureValid) {
    throw new Error("Token signature is not valid");
  }

  return decodedPayload;
}

export { createToken, verifyToken };
