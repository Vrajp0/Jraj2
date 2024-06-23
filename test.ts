import { HumeClient } from "hume";

const hume = new HumeClient({
    apiKey: "z1IAQHMZOI46Q0W9Zm3uccCLouCNZ9Z4NVLSYqKQ2SiLYUvW",
});

const job = await hume.expressionMeasurement.batch.startInferenceJob({
    models: {
        face: {},
    },
    urls: ["https://hume-tutorials.s3.amazonaws.com/faces.zip"],
});

console.log("Running...");
await job.awaitCompletion();

const predictions = await hume.expressionMeasurement.batch.getJobPredictions(job.jobId);
console.log(predictions);