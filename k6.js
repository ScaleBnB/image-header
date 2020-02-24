import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 1000,
    duration: '30s',
};

// Read operations testing
export default function () {
    const id = Math.round(Math.random() * 10000000);
    const res = http.get(`http://localhost:3000/listing/${id}/images`);
    check(res, {
        "status was 200": (r) => r.status === 200,
        "transaction time OK": (r) => r.timings.duration < 2000
    });
    sleep(1);
};

// Write operations testing
// export default function () {
//     const data = {
//         image_url: 'https://scalebnbimages.s3.us-east-2.amazonaws.com/luke-stackpoole-eWqOgJ-lfiI-unsplash.jpg',
//         image_caption: 'My front deck!',
//         user_id: 777,
//     };
//     const params = { headers: { 'Content-Type': 'application/json' } };
//     const id = Math.round(Math.random() * 10000000);
//     const postRes = http.post(`http://localhost:3000/listing/${id}/images`, JSON.stringify(data), params);
//     check(postRes, {
//         "status was 200": (r) => r.status === 200,
//         "transaction time OK": (r) => r.timings.duration < 200
//     });
//     sleep(1);
// }