import AWS from "aws-sdk";
const endpoint = process.env.S3_ENDPOINT || "http://localhost:9000";

const s3 = new AWS.S3({
  endpoint,
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  s3ForcePathStyle: true,
  signatureVersion: "v4"
});

export async function getPresignedUploadUrl(key: string, contentType = "application/octet-stream") {
  const params = {
    Bucket: process.env.S3_BUCKET || "autoverif",
    Key: key,
    Expires: 60 * 10, // 10 minutes
    ContentType: contentType
  };
  return s3.getSignedUrlPromise("putObject", params);
}
